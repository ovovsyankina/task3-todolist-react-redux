import { createSelector } from "reselect";

export const todosSelector = createSelector(
  (state) => state,
  (state) => state.tasks
);
