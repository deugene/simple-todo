export class Todo {
  constructor(
    public todo: string,
    public done: boolean,
    public user_id: string,
    public position: number,
    public added?: number,
    public _id?: string,
    public reminder?: string
  ) { }
}
