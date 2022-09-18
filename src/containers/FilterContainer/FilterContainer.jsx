import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  activeFilter,
  allFilter,
  checkAllTodo,
  clearCompleted,
  completedFilter,
} from "../../action/action";
import Filters from "../../components/Filters/Filters";
import { filterSelector } from "../../redux/selector";

const FilterContainer = () => {
  const dispatch = useDispatch();

  const handleCheckAll = useCallback(() => {
    dispatch(checkAllTodo());
  }, [dispatch]);

  const handleClearCompleted = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);

  const handleActiveFilter = useCallback(() => {
    dispatch(activeFilter());
  }, [dispatch]);

  const handleAllFilter = useCallback(() => {
    dispatch(allFilter());
  }, [dispatch]);

  const handleCompletedFilter = useCallback(() => {
    dispatch(completedFilter());
  }, [dispatch]);

  return (
    <Filters
      onCheckAll={handleCheckAll}
      onClearCompleted={handleClearCompleted}
      onActiveFilter={handleActiveFilter}
      onAllFilter={handleAllFilter}
      onCompletedFilter={handleCompletedFilter}
    />
  );
};

export default FilterContainer;
