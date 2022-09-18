import React, { useState } from "react";

const TodoItem = ({
  todo,
  onDelete,
  onCheck,
  editTodoItem,
  isEdit,
  setEdit,
}) => {
  const [editValue, setEditValue] = useState(todo.text);
  return (
    <li className="todo">
      <input
        type="checkbox"
        className="todo_checkbox"
        checked={todo.complete}
        onChange={() => onCheck(todo.id)}
      ></input>
      {isEdit ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.text)}
          onBlur={() => {
            editTodoItem(editValue, todo.id);
          }}
        />
      ) : (
        <div onDoubleClick={() => setEdit(true)}>{todo.text}</div>
      )}

      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
};
export default TodoItem;
