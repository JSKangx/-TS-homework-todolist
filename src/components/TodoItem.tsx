import { TodoType } from "../App";

type TodoItemProps = TodoType;

export default function TodoItem({ id, text, completed }: TodoItemProps) {
  return (
    <>
      <div>
        <li>
          {text}
          <button>Completed</button>
          <button>Delete</button>
        </li>
      </div>
    </>
  );
}
