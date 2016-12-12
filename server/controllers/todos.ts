import { NextFunction, Request, Response } from 'express';

import { Todo, iTodo, DocumentQueryTodo } from '../models/todo';

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
  getAll(req: Request, res: Response, next: NextFunction) {
    let user_id = req.params.user_id;
    action(Todo.find({ user_id: user_id }), res, next);
  },
  getTodo(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    action(Todo.findById(id), res, next);
  },
  create(req: Request, res: Response, next: NextFunction) {
    let data = req.body;
    data.added = Date.now();
    let newTodo = new Todo(data);
    action(newTodo.save() as any, res, next);
  },
  update(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    action(Todo.findByIdAndUpdate(id, req.body), res, next);
  },
  delete(req: Request, res: Response, next: NextFunction) {
    let id = req.params.id;
    action(Todo.findByIdAndRemove(id), res, next);
  }
}
