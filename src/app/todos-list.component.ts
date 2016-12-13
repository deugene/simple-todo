import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';

import { TodoService } from './todo.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {
  private colMd = 12;
  private user_id: string;
  todos: Todo[];
  selectedTodo: Todo;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getUserProfile()
      .then(profile => this.user_id = profile.identities[0].user_id)
      .then(() => this.getAll());
  }

  getAll(): void {
    this.todoService
      .getAll(this.user_id)
      .then(todos => this.todos = todos.sort((a, b) => b.added - a.added));
  }
  delete(todo: Todo): void {
    this.todoService
      .delete(todo._id)
      .then(() => {
        this.todos = this.todos.filter(t => t !== todo);
        if (this.selectedTodo === todo) this.selectedTodo = null;
      });
  }
  create(todo: string): void {
    this.todoService
      .create(todo, this.user_id)
      .then(() => this.getAll());
  }
  updateCheckbox(todo: Todo) {
    todo.done = !todo.done;
    this.todoService
      .update(todo)
      .then(() => this.getAll());

  }
  editTodo(todo: Todo): void {
    this.colMd = 8;
    this.selectedTodo = todo;
  }
  cancel(): void {
    this.getAll();
    this.selectedTodo = null;
    this.colMd = 12;
  }

  update(): void {
    this.todoService.update(this.selectedTodo).then(() => this.getAll());
    this.selectedTodo = null;
    this.colMd = 12;
  }
}
