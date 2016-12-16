import { NextFunction, Request, Response } from 'express';

import { Todo, DocumentQueryTodo, ITodo } from '../models/todo';

function action(
  promise: DocumentQueryTodo,
  res: Response,
  next: NextFunction
): void {
  promise
    .then(data => res.json({ message: 'success', data: data }))
    .catch(next);
}

export const todos = {
  getAll(req: Request, res: Response, next: NextFunction): void {
    let user_id = req.params.user_id;
    action(Todo.find({ user_id: user_id }), res, next);
  },
  getTodo(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;
    action(Todo.findById(id), res, next);
  },
  create(req: Request, res: Response, next: NextFunction): void {
    let data = req.body;
    data.added = Date.now();
    let newTodo = new Todo(data);
    action(newTodo.save() as any, res, next);
  },
  update(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;
    action(Todo.findByIdAndUpdate(id, req.body), res, next);
  },
  updateAll(req: Request, res: Response, next: NextFunction): void {
    let updatedTodos = req.body.todos as Array<any>;
    let count = 0;
    if (updatedTodos) {
      updatedTodos.forEach(updatedTodo => {
        Todo.findByIdAndUpdate(updatedTodo._id, updatedTodo)
        .then(() => {
          if (++count === updatedTodos.length) {
            res.json({ message: 'success', data: updatedTodos });
          }
        })
        .catch(next);
      });
    }
  },
  delete(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;
    action(Todo.findByIdAndRemove(id), res, next);
  }
};
