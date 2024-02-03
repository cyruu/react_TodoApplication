import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
export default function TodoList({
  todos,
  inputValue,
  setInputValue,
  setTodos,
  filteredTodos,
  setFilterdTodos,
  todoCategory,
  setTodoCategory,
}) {
  useEffect(() => {
    if (todoCategory === "All") {
      setFilterdTodos(todos);
    } else if (todoCategory === "Unchecked") {
      setFilterdTodos(todos.filter((todoel) => todoel.completed == false));
    } else if (todoCategory === "Checked") {
      setFilterdTodos(todos.filter((todoel) => todoel.completed == true));
    }
  }, [todoCategory, todos]);
  return (
    <div className="w-[100%]" style={{ overflow: "hidden" }}>
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            filteredTodos={filteredTodos}
            todoCategory={todoCategory}
          />
        );
      })}
    </div>
  );
}
