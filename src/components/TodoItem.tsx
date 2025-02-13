import { TodoType } from "../App";

type TodoItemProps = TodoType;

export default function TodoItem({ id, text, completed }: TodoItemProps) {
  return (
    <>
      <li>{text}</li>
    </>
  );
}
