import React from "react";
import TodoItemContainer from "../../containers/TodoItemContainer/TodoItemContainer";

const Todolist = ({ todos, filter, counter, sharedTodos }) => {
  return (
    <div className="list_todo">
      <ul className="list_items">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => <TodoItemContainer todo={todo} key={todo.id} />)}
      </ul>

      {counter() === 0 && sharedTodos.length === 0 ? (
        <div className="style_alert">You haven't added any tasks</div>
      ) : (
        ""
      )}
      {counter() === 0 && filter === "active" && sharedTodos.length !== 0 ? (
        <div className="style_alert">There is no active tasks</div>
      ) : (
        ""
      )}
      {counter() === sharedTodos.length &&
      filter === "completed" &&
      sharedTodos.length !== 0 ? (
        <div className="style_alert">There is no completed tasks</div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Todolist;
