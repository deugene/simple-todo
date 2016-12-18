import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;

export interface ITodo {
  todo: string;
  done: boolean;
  user_id: string;
  added: number;
  position: number;
  reminder?: string;
}

export interface TodoModel extends ITodo, mongoose.Document { };
const todoSchema = new mongoose.Schema({
  todo: String,
  done: Boolean,
  user_id: String,
  added: Number,
  position: Number,
  reminder: String
});

export const Todo = mongoose.model<TodoModel>('Todo', todoSchema);

export interface DocumentQueryTodo
  extends mongoose.DocumentQuery<TodoModel[] | TodoModel, TodoModel> { };
