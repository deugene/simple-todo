import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Todo } from './shared/todo';

@Injectable()
export class TodoService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private authHttp: AuthHttp) { }

  getAll(user_id: string): Promise<Todo[]> {
      return this.authHttp.get(`api/todos/${user_id}`)
      .toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return result.data as Todo[];
      })
      .catch(this.handleError);
  }
  getTodo(_id: string): Promise<Todo> {
    return this.authHttp.get(`api/todo/${_id}`)
      .toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return result.data as Todo;
      })
      .catch(this.handleError);
  }
  create(todo: Todo): Promise<Todo> {
      return this.authHttp.post(
        'api/todo/', JSON.stringify(todo), { headers: this.headers }
      ).toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return null;
      })
      .catch(this.handleError);
  }
  update(todo: Todo): Promise<Todo> {
    return this.authHttp.put(
      `api/todo/${todo._id}`, JSON.stringify(todo), { headers: this.headers }
    ).toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return null;
      })
      .catch(this.handleError);
  }
  updateAll(todos: Todo[], user_id: string): Promise<Todo[]> {
    return this.authHttp.put(
      `api/todos/${user_id}`, JSON.stringify({ todos: todos }), { headers: this.headers }
    ).toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return null;
      })
      .catch(this.handleError);
  }
  delete(_id: string): Promise<Todo> {
    return this.authHttp.delete(
      `api/todo/${_id}`,
      { headers: this.headers }
    ).toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) {  throw result.err; }
        return null;
      })
      .catch(this.handleError);
  }

  private handleError(err: any): void {
    console.error(err);
  }
}
