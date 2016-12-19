import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { Todo } from '../shared/todo';

import { minDateValidator } from '../shared/min-date.validator';

import { TodoService } from '../todo.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-todo-form-reactive',
  templateUrl: './todo-form-reactive.component.html',
  styleUrls: [ './todo-form-reactive.component.css' ]
})
export class TodoFormReactiveComponent implements OnInit {
  private gmt = new Date().getTimezoneOffset() * 60000;

  todo = new Todo('', false, '', undefined)
  user_id: string;
  todoForm: FormGroup;

  reminderInputType = 'hidden';

  formErrors = {
    'todo': '',
    'reminder': ''
  };

  validationMessages = {
    'todo': {
      'required': 'Title is required.',
      'maxLength': 'Title cannot be more than 100 characters long'
    },
    'reminder': {
      'minDate': 'It must be future date.'
    }
  };

  minDateTime(): string {
    return new Date(Date.now() - this.gmt).toISOString().slice(0, 16);
  }

  toggleReminderInputType(): void {
    this.reminderInputType = this.reminderInputType === 'hidden'
      ? 'datetime-local'
      : 'hidden';
  }

  onSubmit(): void {
    this.todo.todo = this.todoForm.value.todo;
    this.todo.todo = this.todoForm.value.reminder;
  }

  constructor(
    private todoService: TodoService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
    this.authService.getUserProfile()
      .then(profile => this.user_id = profile.identities[0].user_id)
      .catch(err => console.error(err));
  }

  buildForm(): void {
    this.todoForm = this.formBuilder.group({
      'todo': [
        this.todo.todo,
        [
          Validators.required,
          Validators.maxLength(100)
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
}
