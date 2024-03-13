import React, { useState } from "react";

import "./App.css";
import FilterTodos from "./components/FilterTodos";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoCategory, setTodoCategory] = useState("All");
  const [filteredTodos, setFilterdTodos] = useState([]);
  return (
    <>
      <h2 className="mb-8 todotitle text-center">My Todo Activities</h2>

      <div className=" todo-input-category flex mb-10 justify-between items-center">
        <InputTodo
          setTodos={setTodos}
          todos={todos}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <FilterTodos
          todos={todos}
          todoCategory={todoCategory}
          setTodoCategory={setTodoCategory}
          filteredTodos={filteredTodos}
          setFilterdTodos={setFilterdTodos}
        />
      </div>
      <TodoList
        todoCategory={todoCategory}
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
        filteredTodos={filteredTodos}
        setFilterdTodos={setFilterdTodos}
        setTodoCategory={setTodoCategory}
      />
    </>
  );
}

export default App;
