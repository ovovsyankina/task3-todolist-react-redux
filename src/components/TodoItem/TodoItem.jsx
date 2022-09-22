import React from "react";
import { object, func, bool, string } from "prop-types";
import styles from "./TodoItem.module.scss";

const TodoItem = ({
  todo,
  onDelete,
  onCheck,
  editText,
  isEdit,
  setEdit,
  onEditTodoItem,
  setEditText,
  onEditTodoItemEnter,
}) => {
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        className={styles.todo_checkbox}
        checked={todo.complete}
        onChange={onCheck}
        id={todo.id}
      />

      <label className={styles.label_textTask} htmlFor={todo.id} />

      {isEdit ? (
        <input
          type="text"
          value={editText}
          className={styles.text_task_input}
          onChange={(e) => setEditText(e.target.value)}
          ref={(input) => input && input.focus()}
          onBlur={onEditTodoItem}
          onKeyDown={(e) => {
            onEditTodoItemEnter(e);
          }}
        />
      ) : (
        <div className={styles.text_task} onDoubleClick={() => setEdit(true)}>
          {todo.text.trim()}
        </div>
      )}

      <button className={styles.todo_delete} onClick={onDelete} />
    </li>
  );
};

TodoItem.propTypes = {
  todo: object,
  onDelete: func,
  onCheck: func,
  editText: string,
  isEdit: bool,
  setEdit: func,
  onEditTodoItem: func,
  setEditText: func,
  onEditTodoItemEnter: func,
};

export default TodoItem;
