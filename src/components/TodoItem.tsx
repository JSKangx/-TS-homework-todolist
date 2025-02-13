import { TodoType, ToggleTodo } from "../App";

type TodoItemProps = TodoType & {
  onDeleteTodo: (id: TodoType["id"]) => void;
  onToggleTodo: (toggleTodo: ToggleTodo) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  onDeleteTodo,
  onToggleTodo,
}: TodoItemProps) {
  return (
    <>
      <div>
        <li>
          <span
            style={
              completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {text}
          </span>
          <button onClick={() => onToggleTodo({ id, completed })}>
            {completed ? "Undo" : "Completed"}
          </button>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      </div>
    </>
  );
}
