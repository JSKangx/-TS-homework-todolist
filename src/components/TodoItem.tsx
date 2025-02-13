import { TodoType } from "../App";

type TodoItemProps = TodoType & {
  onDeleteTodo: (id: TodoType["id"]) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <>
      <div>
        <li>
          {text}
          <button>Completed</button>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      </div>
    </>
  );
}
