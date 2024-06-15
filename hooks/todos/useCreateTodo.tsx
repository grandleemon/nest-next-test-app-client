import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApi } from "@/api/todos";
import { Dispatch, SetStateAction } from "react";

export const useCreateTodo = (
  title: string,
  set?: Dispatch<SetStateAction<string>>,
) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => todosApi.createTodo(title),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-todos"] });
      set?.("");
    },
  });

  return { mutate, isPending };
};
