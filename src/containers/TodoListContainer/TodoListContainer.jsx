import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo } from "../../action/action";
import Todolist from "../../components/TodoList/TodoList";
import { todosSelector } from "../../redux/selector";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const handleDelete = useCallback(
    (id) => {
      console.log("remove");
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const handleCheck = useCallback(
    (id) => {
      console.log("check");
      dispatch(checkTodo(id));
    },
    [dispatch]
  );

  return (
    <Todolist onDelete={handleDelete} onCheck={handleCheck} todos={todos} />
  );
};
export default TodoListContainer;
