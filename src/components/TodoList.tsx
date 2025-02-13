import { TodoType, ToggleTodo } from "../App";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todoList: TodoType[];
  onDeleteTodo: (id: TodoType["id"]) => void;
  onToggleTodo: (toggleTodo: ToggleTodo) => void;
};

export default function TodoList({
  todoList,
  onDeleteTodo,
  onToggleTodo,
}: TodoListProps) {
  return (
    <>
      <ul>
        {todoList.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
}
