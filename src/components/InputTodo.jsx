import React, { useState } from "react";

export default function InputTodos({
  todos,
  setTodos,
  inputValue,
  setInputValue,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue) {
      setTodos([
        ...todos,
        {
          activity: inputValue,
          id: Math.floor(Math.random() * 1000),
          completed: false,
        },
      ]);
      setInputValue("");
    }
  }
  return (
    <form className="flex" onSubmit={handleSubmit} style={{ flex: ".8" }}>
      <input
        type="text"
        placeholder="What's on your mind?"
        className="outline-none bg-gray-200 p-2 text-black w-[302px]"
        value={inputValue}
        style={{ width: "100%" }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gray-200  text-black  h-[40px] px-3 button"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </form>
  );
}
