import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { checkAllTodo, clearCompleted } from "../../action/action";
import Filters from "../../components/Filters/Filters";

const FilterContainer = () => {
  const dispatch = useDispatch();
  const handleCheckAll = useCallback(() => {
    dispatch(checkAllTodo());
  }, [dispatch]);
  const handleClearCompleted = useCallback(() => {
    dispatch(clearCompleted());
  }, [dispatch]);
  return (
    <Filters
      onCheckAll={handleCheckAll}
      onClearCompleted={handleClearCompleted}
    />
  );
};

export default FilterContainer;
