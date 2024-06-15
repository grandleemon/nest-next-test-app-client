"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useGetAllTodos } from "@/hooks/todos/useGetAllTodos";
import { useCreateTodo } from "@/hooks/todos/useCreateTodo";
import { Todo } from "@/components/Todo";
import styles from "./style.module.css";

export default function TodosPage() {
  const [title, setTitle] = useState("");

  const { data, isPending } = useGetAllTodos();
  const { mutate: createTodo, isPending: isTodoCreatePending } = useCreateTodo(
    title,
    setTitle,
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onClick = () => {
    createTodo();
  };

  return (
    <main>
      <div>todos</div>
      <Link href="/">Back</Link>
      {isPending || isTodoCreatePending ? (
        "Loading..."
      ) : (
        <div>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={onChange}
          />
          <button type="submit" onClick={onClick}>
            Add Todo
          </button>
          <div className={styles.wrapper}>
            {data?.map(({ title, id, finished }) => {
              return (
                <Todo key={id} title={title} id={id} finished={finished} />
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
