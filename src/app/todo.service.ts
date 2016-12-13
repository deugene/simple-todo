import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  getAll(user_id: string): Promise<Todo[]> {
      return this.authHttp.get(`api/todos/${user_id}`)
      .toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) throw new Error(result.err);
        return result.data as Todo[];
      })
      .catch(this.handleError);
  }
  getTodo(_id: string): Promise<Todo> {
    return this.authHttp.get(`api/todo/${_id}`)
      .toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) throw new Error(result.err);
        return result.data as Todo;
      })
      .catch(this.handleError);
  }
  create(todo: string, user_id: string): Promise<Todo> {
      return this.authHttp.post(
        'api/todo/',
        JSON.stringify({ todo: todo, done: false, user_id: user_id }),
        { headers: this.headers }
      ).toPromise()
      .then(res => {
        let result = res.json();
        if (result.err) throw new Error(result.err);
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
        if (result.err) throw new Error(result.err);
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
        if (result.err) throw new Error(result.err);
        return null;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
