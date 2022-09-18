import { createSelector } from "reselect";

export const todosSelector = createSelector(
  (state) => state,
  (state) => {
    return state.tasks;
  }
);
export const filterSelector = createSelector(
  (state) => state,
  (state) => {
    return state.filter;
  }
);
