import React from "react";
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import PropTypes from "prop-types";
import styles from "./TodoList.module.scss";
import FilterContainer from "../Filters/FilterContainer";

const TodoList = ({ todos, filter, counter, sharedTodos }) => {
  return (
    <div className={styles.main}>
      <FilterContainer counter={counter} filter={filter} />
      <div className={styles.list_todo}>
        <ul className={styles.list_items}>
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => (
              <TodoItemContainer todo={todo} key={todo.id} />
            ))}
        </ul>

        {counter() === 0 && sharedTodos.length === 0 && (
          <div className={styles.style_alert}>You haven't added any tasks</div>
        )}
        {counter() === 0 && filter === "active" && sharedTodos.length !== 0 && (
          <div className={styles.style_alert}>There is no active tasks</div>
        )}
        {counter() === sharedTodos.length &&
          filter === "completed" &&
          sharedTodos.length !== 0 && (
            <div className={styles.style_alert}>
              There is no completed tasks
            </div>
          )}
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  counter: PropTypes.func,
  sharedTodos: PropTypes.array,
};

export default TodoList;
