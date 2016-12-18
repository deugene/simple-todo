import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';

import { TodoService } from './todo.service';
import { AuthService } from './auth.service';

import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { PushNotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.css' ],
})
export class TodosListComponent implements OnInit {
  private user_id: string;

  todos: Todo[];
  selectedTodo: Todo;
  showDialog = { visible: false, type: '' };
  reminderInputType = 'hidden';

  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService: AuthService,
    private dragulaService: DragulaService,
    private push: PushNotificationsService
  ) {
    dragulaService.drop.subscribe((value: Array<any>): void => {
      this.onDrop(value.slice(1));
    });
  }

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

  ngOnInit(): void {
    this.authService.getUserProfile()
      .then(profile => this.user_id = profile.identities[0].user_id)
      .then(() => this.getAll()
        .then(() => {
          this.push.requestPermission();
          this.remind();
        })
      );
  }

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
  create(todo: string, reminder?: string): void {
    let position: number;
    if (this.todos.length > 1) {
      position = this.todos
        .reduce((min, cur) => min.position < cur.position ? min : cur).position;
    } else if (this.todos.length === 1) {
      position = this.todos[0].position;
    } else {
      position = 0;
    }

    let newTodo: Todo;
    newTodo = {
      todo: todo,
      done: false,
      user_id: this.user_id,
      position: position - 1,
      reminder: reminder || ''
    };

    this.reminderInputType = 'hidden';

    this.todoService.create(newTodo).then(() => this.getAll());
  }
  update(todo?: Todo): void {
    if (todo) {
      todo.done = !todo.done;
      this.selectedTodo = todo;
    }
    this.todoService.update(this.selectedTodo).then(() => this.getAll());
  }

  cancel(): void {
    this.getAll();
  }

  showModal(todo: Todo, type: string): void {
    this.selectedTodo = todo;
    this.showDialog.visible = !this.showDialog.visible;
    this.showDialog.type = type;
  }

  toggleReminderInputType(): void {
    this.reminderInputType = this.reminderInputType === 'hidden'
      ? 'datetime-local'
      : 'hidden';
  }
  remind(): void {
    new Promise((res, rej) => {
      let count = 0;
      let todosToRemind = this.todos.filter(todo => {
        let remindDate = Date.parse(todo.reminder);
        return remindDate && remindDate < Date.now();
      });
      if (todosToRemind && todosToRemind.length > 0) {
        todosToRemind.forEach(todo => {
          this.push.create('Reminder', { body: todo.todo })
            .subscribe(
              result => { },
              err => rej(err),
              () => {
                todo.reminder = '';
                this.todoService.update(todo)
                  .then(() => {
                    if (++count >= todosToRemind.length) { res(); }
                  });
              }
          );
        });
      } else {
        res();
      }
    })
    .then(refresh => {
      setTimeout(this.remind.bind(this), 10000);
    })
    .catch(err => console.log(err));
  }
}
