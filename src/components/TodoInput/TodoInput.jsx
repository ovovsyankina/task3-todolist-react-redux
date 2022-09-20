import React from "react";
import PropTypes from "prop-types";
import styles from "./TodoInput.module.scss";

const TodoInput = ({ value, addNewTodo, setValue, onCheckAll }) => {
  return (
    <div className={styles.inputField}>
      <label className={styles.allCompleted} onClick={onCheckAll}></label>
      <input
        type="text"
        value={value}
        className={styles.inputText}
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
  value: PropTypes.string,
  addNewTodo: PropTypes.func,
  setValue: PropTypes.func,
  onCheckAll: PropTypes.func,
};

export default TodoInput;
