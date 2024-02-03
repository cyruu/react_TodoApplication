import React, { useEffect, useState } from "react";

export default function TodoItem({ todo, todos, setTodos, todoCategory }) {
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [readOnlyTodo, setReadOnlyTodo] = useState(true);
  const [tempAcitvity, setTempActivity] = useState(todo.activity);
  const [itemDeleted, setItemDeleted] = useState(false);
  const [todoEditable, setTodoEditable] = useState(false);
  const [inEditState, setInEditState] = useState(false);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [filteredTodoStatusChanged, setFilteredTodoStatusChanged] =
    useState(false);
  //   const [todoChecked,setTodoChecked] = useState(false);
  function handleEditTodo(e) {
    setReadOnlyTodo(false);
    setEditButtonClicked(true);

    setInEditState(true);
  }
  useEffect(() => {
    if (todo.completed) {
      setCheckboxStatus(true);
    }
  }, []);
  function handleSaveTodo() {
    setInEditState(false);
    setReadOnlyTodo(true);

    setEditButtonClicked(false);

    setTodos(
      todos.map((todoEl) => {
        if (todoEl.id == todo.id) {
          return { ...todoEl, activity: tempAcitvity };
        } else return todoEl;
      })
    );
  }
  const deletePromise = () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        res("Let the animation finish. Then filter this todo.");
      }, 450);
    });
  const filterTodoChangePromise = () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        res("Let the animation finish. Then filter this todo.");
      }, 1000);
    });
  async function handleDelete() {
    // to add css animation
    setItemDeleted(true);
    await filterTodoChangePromise();
    setTodos(todos.filter((todoEl) => todoEl.id != todo.id));
    // to remove animation from other componets if any (probabily will not have to set to false)
    setItemDeleted(false);
  }
  async function handleCheckboxChnge(e) {
    setCheckboxStatus((prev) => !prev);
    if (todoCategory == "Checked" || todoCategory == "Unchecked") {
      setFilteredTodoStatusChanged(true);
      await deletePromise();
    } else {
      setFilteredTodoStatusChanged(false);
    }

    setTodos(
      todos.map((todoel) => {
        if (todoel.id === todo.id) {
          return {
            ...todoel,
            completed: !todoel.completed,
          };
        } else {
          return todoel;
        }
      })
    );

    setTodoEditable((prev) => !prev);
  }
  return (
    <div
      className={`todo-item  mb-2 rounded  ${
        itemDeleted || filteredTodoStatusChanged ? "deleteAnimation" : ""
      } ${checkboxStatus || todo.completed ? "opacity-50 bg-green-200" : ""}
      ${editButtonClicked ? "bg-red-200" : "bg-gray-200"}
      
      `}
    >
      <label
        htmlFor={`checkLabel${todo.id}`}
        className={`checkLabel ${checkboxStatus ? "bg-green-300" : ""}`}
      >
        <i
          className={`fa-solid fa-check ${
            checkboxStatus || todo.completed ? "opacity-100" : "opacity-0"
          }`}
        ></i>
      </label>
      <input
        type="checkbox"
        className="checkboxInput"
        id={`checkLabel${todo.id}`}
        checked={checkboxStatus}
        onChange={handleCheckboxChnge}
        disabled={inEditState}
      />
      <input
        type="text"
        className={`w-[100%] outline-none todoInput cursor-auto ${
          checkboxStatus || todo.completed ? "line-through" : ""
        }`}
        value={tempAcitvity}
        onChange={(e) => setTempActivity(e.target.value)}
        readOnly={readOnlyTodo}
      />
      {readOnlyTodo ? (
        <button
          onClick={handleEditTodo}
          className={`${todoEditable ? "pointer-events-none" : ""}`}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      ) : (
        <button onClick={handleSaveTodo}>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      )}
      <button onClick={handleDelete} disabled={editButtonClicked}>
        <i className="fa-solid fa-trash text-red-700"></i>
      </button>
    </div>
  );
}
