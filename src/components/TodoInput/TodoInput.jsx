import React from "react";

const TodoInput = ({ value, addNewTodo, setValue, onCheckAll }) => {
  return (
    <div className="inputField">
      <label className="allCompleted" onClick={onCheckAll}></label>
      <input
        type="text"
        value={value}
        className="inputText"
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          addNewTodo(e);
        }}
      />
    </div>
  );
};

export default TodoInput;
