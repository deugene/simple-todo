import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';

import { TodoService } from './todo.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: [ './todos-list.component.css' ],
})
export class TodosListComponent implements OnInit {
  private user_id: string;
  private showDialog = { visible: false, type: '' };

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
  showModal(todo: Todo, type: string): void {
    this.selectedTodo = todo;
    this.showDialog.visible = !this.showDialog.visible;
    this.showDialog.type = type;
  }
  edit(todo: Todo): void {
    this.selectedTodo = todo;
  }
  delete(): void {
    this.todoService
      .delete(this.selectedTodo._id)
      .then(() => {
        this.todos = this.todos.filter(t => t !== this.selectedTodo);
        this.selectedTodo = null;
      });
  }
  create(todo: string): void {
    this.todoService
      .create(todo, this.user_id)
      .then(() => this.getAll());
  }
  cancel(): void {
    this.getAll();
  }
  update(todo?: Todo): void {
    if (todo) {
      todo.done = !todo.done;
      this.selectedTodo = todo;
    }
    this.todoService.update(this.selectedTodo).then(() => this.getAll());
  }
}
