import React from "react";

export default function FilterTodo({
  todos,
  todoCategory,
  setTodoCategory,
  filteredTodos,
  setFilteredTodos,
}) {
  function handleCategoryChange(e) {
    setTodoCategory(e.target.value);
  }
  return (
    <select
      value={todoCategory}
      onChange={handleCategoryChange}
      className="w-[100px] p-2 text-center bg-gray-200 text-black outline-none"
    >
      <option value="All">All</option>
      <option value="Checked">Checked</option>
      <option value="Unchecked">Unchecked</option>
    </select>
  );
}
