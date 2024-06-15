import React, { ChangeEvent, useState } from "react";
import type { Todo as TodoType } from "@/api/todos/types";
import { useUpdateTodoById } from "@/hooks/todos/useUpdateTodoById";
import { useDeleteTodoById } from "@/hooks/todos/useDeleteTodoById";

export const Todo = ({ title: initialTitle, id, finished }: TodoType) => {
  const [title, setTitle] = useState(() => initialTitle);
  const [isFinished, setIsFinished] = useState(() => finished);

  const { mutate: updateTodo, isPending } = useUpdateTodoById({
    title,
    id,
    finished: isFinished,
  });
  const { mutate: deleteTodo, isPending: isDeletePending } =
    useDeleteTodoById(id);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onCheck = () => {
    setIsFinished(!isFinished);
  };

  const update = () => {
    updateTodo();
  };

  const deleteTodoFunction = () => {
    deleteTodo();
  };

  return (
    <div>
      <input value={title} onChange={onChange} />
      <input type="checkbox" checked={isFinished} onChange={onCheck} />
      <button type="button" onClick={update} disabled={isPending}>
        Update
      </button>
      <button
        type="button"
        onClick={deleteTodoFunction}
        disabled={isDeletePending}
      >
        Delete
      </button>
    </div>
  );
};
