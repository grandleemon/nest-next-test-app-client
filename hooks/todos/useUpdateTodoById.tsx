import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApi } from "@/api/todos";
import { Todo } from "@/api/todos/types";

export const useUpdateTodoById = (todo: Todo) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => todosApi.updateTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-todos"] });
    },
  });

  return { mutate, isPending };
};
