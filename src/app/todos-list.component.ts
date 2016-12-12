import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html'
})
export class TodosListComponent implements OnInit {
  private colMd = 12;
  todos: Todo[];
  selectedTodo: Todo;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.todoService
      .getAll()
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
      .create(todo)
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
