import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  // todoList 상태 관리
  const [todoList, setTodoList] = useState<TodoType[]>([
    {
      id: "aowiejfoj2",
      text: "hello",
      completed: false,
    },
  ]);
  // text input 상태관리
  const [text, setText] = useState<string>("");
  // text 입력 핸들링
  function handleText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // todoItem 추가하는 함수
  function onCreateTodo() {
    // 새로운 todoItem
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    // 상태 업데이트
    setTodoList((prev) => [newTodo, ...prev]);
    setText("");
  }

  // todoItem 삭제하는 함수
  function onDeleteTodo(id: TodoType["id"]) {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={text} onChange={handleText} />{" "}
      <button
        onClick={() => {
          onCreateTodo();
        }}
      >
        Add Todo
      </button>
      <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </>
  );
}

export default App;
