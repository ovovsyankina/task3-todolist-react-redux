import React from "react";

const TodoItem = ({ todo, onDelete, onCheck }) => {
  return (
    <li className="todo">
      <input
        type="checkbox"
        className="todo_checkbox"
        checked={todo.complete}
        onChange={() => onCheck(todo.id)}
      ></input>

      <div>{todo.text}</div>

      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
};
export default TodoItem;
