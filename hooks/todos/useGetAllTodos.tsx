import { useQuery } from "@tanstack/react-query";
import { todosApi } from "@/api/todos";

export const useGetAllTodos = () => {
  const { data: todosData, isPending } = useQuery({
    queryKey: ["get-all-todos"],
    queryFn: todosApi.getAllTodos,
  });

  return { data: todosData?.data || [], isPending };
};
