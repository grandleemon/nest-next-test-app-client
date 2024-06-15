import { _axios } from "@/api/axios";
import { ApiRoutes } from "@/api/apiRoutes";
import {
  CreateTodoResponse,
  DeleteTodoResponse,
  GetAllTodosResponse,
  Todo,
  UpdateTodoResponse,
} from "@/api/todos/types";

export const todosApi = {
  getAllTodos: async () => {
    return await _axios.get<GetAllTodosResponse>(ApiRoutes.TODOS);
  },
  createTodo: async (title: string) => {
    return await _axios.post<CreateTodoResponse>(ApiRoutes.TODOS, {
      title,
    });
  },
  updateTodo: async ({ id, ...rest }: Todo) => {
    return await _axios.put<UpdateTodoResponse>(`${ApiRoutes.TODOS}/${id}`, {
      ...rest,
    });
  },
  deleteTodo: async (id: number) => {
    return await _axios.delete<DeleteTodoResponse>(`${ApiRoutes.TODOS}/${id}`);
  },
};
