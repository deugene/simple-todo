import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Todo } from '../shared/todo';

import { TodoService } from '../todo.service';
import { AuthService } from '../auth.service';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { NotificationsService } from 'angular2-notifications';

import { minDateValidator } from '../shared/min-date.validator';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.css' ],
})
export class TodosComponent implements OnInit {
  private user_id: string;
  private todosToRemind: Todo[];
  private gmt = new Date().getTimezoneOffset() * 60000;

  todos: Todo[];
  selectedTodo: Todo;
  showDialog = { visible: false, type: '' };
  reminderInputType = 'hidden';
  notificationsOptions = {
    position: [ 'top', 'right' ]
  };

  // forms variables
  todo = new Todo('', false, '', undefined);
  todoForm: FormGroup;

  formErrors = {
    'todo': '',
    'reminder': ''
  };

  validationMessages = {
    'todo': {
      'required': 'Title is required.',
      'maxlength': 'Title cannot be more than 150 characters long'
    },
    'reminder': {
      'minDate': 'It must be future date.'
    }
  };

  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService: AuthService,
    private dragulaService: DragulaService,
    private formBuilder: FormBuilder,
    private notificationsService: NotificationsService
  ) {
    dragulaService.drop.subscribe((value: Array<any>): void => {
      this.onDrop(value.slice(1));
    });
  }

  ngOnInit(): void {
    this.buildForm();
    this.authService.getUserProfile()
      .then(profile => this.user_id = profile.identities[0].user_id)
      .then(() => this.getAll()
        .then(() => {
          this.remind();
        })
      );
  }

  // drag and drop functional
  onDrop(args: Array<HTMLElement>): void {
    let [ droppedTodoEl, from, to, nextTodoEl ] = args;

    let droppedTodo = this.todos
      .find(todo => todo._id === droppedTodoEl.getAttribute('id'));

    let nextTodo = nextTodoEl
      ? this.todos
        .find(todo => todo._id === nextTodoEl.getAttribute('id'))
      : undefined;

    let maxPosition = this.todos
      .reduce((cur, max) => cur.position > max.position ? cur : max).position;

    if (nextTodo) {
      this.todos.map(todo => {
        if (todo._id !== droppedTodo._id && todo.position < nextTodo.position) {
          todo.position = todo.position - 1;
        } else if (todo._id === droppedTodo._id) {
          todo.position = nextTodo.position - 1;
        }
        return todo;
      });
      this.todoService.updateAll(this.todos, this.user_id);
    } else {
      droppedTodo.position = maxPosition + 1;
      this.todoService.update(droppedTodo);
    }
  }

  // CRUD functional
  getAll(): Promise<Todo[]> {
    return this.todoService
      .getAll(this.user_id)
      .then(todos => this.todos = todos.sort((a, b) => a.position - b.position));
  }

  delete(): void {
    this.todoService
      .delete(this.selectedTodo._id)
      .then(() => {
        this.todos = this.todos.filter(t => t !== this.selectedTodo);
        this.selectedTodo = null;
      });
  }

  create(): void {
    let position: number;
    if (this.todos.length > 1) {
      position = this.todos
        .reduce((min, cur) => min.position < cur.position ? min : cur).position;
    } else if (this.todos.length === 1) {
      position = this.todos[0].position;
    } else {
      position = 0;
    }

    this.todo.position = position - 1;
    this.todo.user_id = this.user_id;


    this.todoService.create(this.todo).then(() => this.getAll());
  }

  update(todo?: Todo): void {
    if (todo) {
      todo.done = !todo.done;
      this.selectedTodo = todo;
    }
    this.todoService.update(this.selectedTodo).then(() => this.getAll());
  }

  // show dialogs
  showModal(todo: Todo, type: string): void {
    this.selectedTodo = todo;
    this.showDialog.visible = !this.showDialog.visible;
    this.showDialog.type = type;
    if (type === 'edit') { this.buildForm(); }
  }

  // reminders functional
  remind(): void {
    new Promise(res => {
      this.todosToRemind = this.todos.filter(todo => {
        let remindDate: Date;
        if (todo.reminder) {
          remindDate = new Date(Date.parse(todo.reminder) + this.gmt);
        }
        return remindDate && remindDate < new Date(Date.now());
      });
      if (this.todosToRemind.length === 0) { return res(); }
      this.todosToRemind.forEach(todo => {
        this.notificationsService.success(
          'Reminder',
          todo.todo,
          { id: todo._id }
        );
      });
    })
    .then(() => setTimeout(this.remind.bind(this), 3000));
  }

  onDestroy(id: string): void {
    let remindedTodo = this.todos.find(todo => todo._id === id);
    remindedTodo.reminder = '';
    this.todoService.update(remindedTodo).then(() => {
      let index = this.todosToRemind.indexOf(remindedTodo);
      this.todosToRemind.splice(index, 1);
      if (this.todosToRemind.length === 0) { this.remind(); }
    });
  }

  humanReadableDate(dateTime: string): string {
    let dateWithGmt = Date.parse(dateTime) + this.gmt;
    let date = new Date(dateWithGmt).toLocaleDateString();
    let time = new Date(dateWithGmt).toLocaleTimeString();
    return date + ' ' + time;
  }

  // forms functional
  toggleReminderInputType(): void {
    this.reminderInputType = this.reminderInputType === 'hidden'
      ? 'datetime-local'
      : 'hidden';
  }

  onSubmit(valid: boolean, method: string, dialog?: any): void {
    if (!valid) { return; }
    console.log(valid);
    this.todo.todo = this.todoForm.value.todo;
    this.todo.reminder = this.todoForm.value.reminder;
    if (this.selectedTodo) { this.selectedTodo = this.todo; }
    this[method]();
    this.todo = new Todo('', false, '', undefined);
    this.reminderInputType = 'hidden';
    this.buildForm();
    console.log(dialog);
    if ( dialog ) { dialog.cancel(); };
  }

  buildForm(): void {
    if (this.selectedTodo) { this.todo = this.selectedTodo; }
    this.todoForm = this.formBuilder.group({
      'todo': [
        this.todo.todo,
        [
          Validators.required,
          Validators.maxLength(150)
        ]
      ],
      'reminder': [ this.todo.reminder, [ minDateValidator() ] ]
    });

    this.todoForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any): void {
    if (!this.todoForm) { return; }
    const form = this.todoForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  cancel(valid: boolean, dialog: any): void {
    if (!valid) {
      this.todo = new Todo('', false, '', undefined);
      this.selectedTodo = null;
      this.buildForm();
    }
    dialog.cancel();
  }
}
