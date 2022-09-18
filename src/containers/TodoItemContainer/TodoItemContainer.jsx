import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo, editTodo } from "../../action/action";
import Todolist from "../../components/TodoList/TodoList";
import { todosSelector, filterSelector } from "../../redux/selector";

const TodoItemContainer = () => {
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
export default TodoItemContainer;
