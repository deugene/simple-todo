import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;

export interface iTodo {
  todo: string;
  done: boolean;
  user_id: string;
  added: number;
}

export interface TodoModel extends iTodo, mongoose.Document { };
const todoSchema = new mongoose.Schema({
  todo: String,
  done: Boolean,
  user_id: String,
  added: Number
});

export const Todo = mongoose.model<TodoModel>('Todo', todoSchema);

export interface DocumentQueryTodo
  extends mongoose.DocumentQuery<TodoModel[] | TodoModel, TodoModel> { };
new Date()
