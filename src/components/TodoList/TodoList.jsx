import React from "react";
import TodoItemContainer from "../TodoItem/TodoItemContainer";
import { array, string, number } from "prop-types";
import styles from "./TodoList.module.scss";
import FilterContainer from "../Filters/FilterContainer";

const TodoList = ({ todos, filter, counter, sharedTodos }) => {
  return (
    <div className={styles.root}>
      <FilterContainer counter={counter} filter={filter} />

      <div className={styles.list_todo}>
        <ul className={styles.list_items}>
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => (
              <TodoItemContainer todo={todo} key={todo.id} />
            ))}
        </ul>

        {counter === 0 && sharedTodos.length === 0 && (
          <div className={styles.style_alert}>You haven't added any tasks</div>
        )}

        {counter === 0 && filter === "active" && sharedTodos.length !== 0 && (
          <div className={styles.style_alert}>There is no active tasks</div>
        )}

        {counter === sharedTodos.length &&
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
  todos: array,
  filter: string,
  counter: number,
  sharedTodos: array,
};

export default TodoList;
