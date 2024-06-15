import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApi } from "@/api/todos";

export const useDeleteTodoById = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => todosApi.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-todos"] });
    },
  });

  return { mutate, isPending };
};
