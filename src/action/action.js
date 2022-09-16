import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETED,
} from "../redux/reducer/constant";

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
