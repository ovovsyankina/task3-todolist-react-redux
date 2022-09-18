import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const Todolist = ({
  onDelete,
  onCheck,
  todos,
  editTodoItem,
  isEdit,
  setEdit,
}) => {
  console.log(todos);
  return (
    <div>
      <ul className="list_items">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDelete={onDelete}
              onCheck={onCheck}
              editTodoItem={editTodoItem}
              isEdit={isEdit}
              setEdit={setEdit}
            />
          ))}
      </ul>
    </div>
  );
};
export default Todolist;
