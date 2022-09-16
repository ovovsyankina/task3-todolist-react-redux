import React from "react";

const TodoInput = ({ value, addNewTodo, setValue }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          placeholder="Введите задачу"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addNewTodo}>Создать задачу</button>
      </form>
    </div>
  );
};

export default TodoInput;
