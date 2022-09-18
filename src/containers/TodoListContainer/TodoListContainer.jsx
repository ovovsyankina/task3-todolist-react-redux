import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo, editTodo } from "../../action/action";
import Todolist from "../../components/TodoList/TodoList";
import { todosSelector, filterSelector } from "../../redux/selector";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  const filter = useSelector(filterSelector);
  const [isEdit, setEdit] = useState(false);
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

  const editTodoItem = useCallback(
    (editText, id) => {
      setEdit(false);
      console.log("edit >> ", editTodo(editText, id));
      dispatch(editTodo(editText, id));
    },
    [dispatch]
  );

  const filterTodo = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.complete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.complete);
    } else {
      return todos;
    }
  };
  return (
    <Todolist
      onDelete={handleDelete}
      onCheck={handleCheck}
      todos={filterTodo()}
      editTodoItem={editTodoItem}
      isEdit={isEdit}
      setEdit={setEdit}
    />
  );
};
export default TodoListContainer;
