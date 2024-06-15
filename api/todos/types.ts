export interface Todo {
  id: number;
  title: string;
  finished: boolean;
}

export type GetAllTodosResponse = Todo[];
export type CreateTodoResponse = Todo;
export type UpdateTodoResponse = Todo;
export type DeleteTodoResponse = Todo;
