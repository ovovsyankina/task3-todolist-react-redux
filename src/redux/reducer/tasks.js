import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  CHECK_ALL_TODO,
  CLEAR_COMPLETED,
} from "./constant";
const defaultState = [];
const tasks = (state = defaultState, { id, text, complete, type }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          text,
          complete,
        },
      ];
    case DELETE_TODO:
      return state.filter((elem) => elem.id !== id);
    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      );
    case CHECK_ALL_TODO:
      return state.some((element) => !element.complete)
        ? state.map((todo) => ({ ...todo, complete: (todo.complete = true) }))
        : state.map((todo) => ({
            ...todo,
            complete: (todo.complete = false),
          }));
    case CLEAR_COMPLETED:
      return state.filter((elem) => !elem.complete);
    default:
      return state;
  }
};
export default tasks;
