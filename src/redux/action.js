import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETED,
  COMPLETED_FILTER,
  ACTIVE_FILTER,
  ALL_FILTER,
  EDIT_TODO_ITEM,
} from "./constant";

export const addTodo = (id, text, complete) => ({
  type: ADD_TODO,
  id,
  text,
  complete,
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
export const checkTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});
export const checkAllTodo = () => ({
  type: CHECK_ALL_TODO,
});
export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
export const editTodo = (editText, id) => ({
  type: EDIT_TODO_ITEM,
  editText,
  id,
});

export const completedFilter = () => ({
  type: COMPLETED_FILTER,
});
export const activeFilter = () => ({
  type: ACTIVE_FILTER,
});
export const allFilter = () => ({
  type: ALL_FILTER,
});
