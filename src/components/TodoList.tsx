import { TodoType } from "../App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todoList: TodoType[];
  onDeleteTodo: (id: TodoType["id"]) => void;
};

export default function TodoList({ todoList, onDeleteTodo }: TodoListProps) {
  return (
    <>
      <ul>
        {todoList.map((item) => (
          <TodoItem key={item.id} {...item} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
}
