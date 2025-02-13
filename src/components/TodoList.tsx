import { TodoType } from "../App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todoList: TodoType[];
};

export default function TodoList({ todoList }: TodoListProps) {
  return (
    <>
      <ul>
        {todoList.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
