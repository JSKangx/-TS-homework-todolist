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

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" /> <button>Add Todo</button>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
