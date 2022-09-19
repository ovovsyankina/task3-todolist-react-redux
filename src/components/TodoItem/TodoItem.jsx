import React from "react";
import PropTypes from "prop-types";

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
    <li className="todo">
      <input
        type="checkbox"
        className="todo_checkbox"
        checked={todo.complete}
        onChange={onCheck}
        id={todo.id}
      ></input>
      <label className="label_textTask" htmlFor={todo.id}></label>
      {isEdit ? (
        <input
          type="text"
          value={editText}
          className="textTask_input"
          onChange={(e) => setEditText(e.target.value)}
          ref={(input) => input && input.focus()}
          onBlur={onEditTodoItem}
          onKeyDown={(e) => {
            onEditTodoItemEnter(e);
          }}
        />
      ) : (
        <div className="textTask" onDoubleClick={() => setEdit(true)}>
          {todo.text.trim()}
        </div>
      )}

      <button className="todoDelete" onClick={onDelete}></button>
    </li>
  );
};
TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onCheck: PropTypes.func,
  editText: PropTypes.string,
  isEdit: PropTypes.bool,
  setEdit: PropTypes.func,
  onEditTodoItem: PropTypes.func,
  setEditText: PropTypes.func,
  onEditTodoItemEnter: PropTypes.func,
};
export default TodoItem;
