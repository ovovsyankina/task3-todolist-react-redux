import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo, editTodo } from "../../action/action";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoItemContainer = ({ todo }) => {
  const [isEdit, setEdit] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleCheck = useCallback(() => {
    dispatch(checkTodo(todo.id));
  }, [dispatch, todo.id]);

  const handleEditTodoItem = useCallback(() => {
    if (editText.trim().length !== 0) {
      setEdit(false);
      dispatch(editTodo(editText.trim().replace(/ /g, "\u00A0"), todo.id));
    } else {
      handleDelete();
    }
  }, [dispatch, editText, todo.id, handleDelete]);

  const handleEditTodoItemEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleEditTodoItem();
      }
    },
    [handleEditTodoItem]
  );

  return (
    <TodoItem
      todo={todo}
      key={todo.id}
      onDelete={handleDelete}
      onCheck={handleCheck}
      editText={editText}
      isEdit={isEdit}
      setEdit={setEdit}
      onEditTodoItem={handleEditTodoItem}
      setEditText={setEditText}
      onEditTodoItemEnter={handleEditTodoItemEnter}
    />
  );
};
export default TodoItemContainer;
