import React from "react";
import { string, func } from "prop-types";
import styles from "./TodoInput.module.scss";

const TodoInput = ({ value, addNewTodo, setValue, onCheckAll }) => {
  return (
    <div className={styles.root}>
      <label className={styles.all_completed} onClick={onCheckAll}></label>
      <input
        type="text"
        value={value}
        className={styles.input_text}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          addNewTodo(e);
        }}
      />
    </div>
  );
};

TodoInput.propTypes = {
  value: string,
  addNewTodo: func,
  setValue: func,
  onCheckAll: func,
};

export default TodoInput;
