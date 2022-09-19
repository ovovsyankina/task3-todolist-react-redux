import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  activeFilter,
  allFilter,
  clearCompleted,
  completedFilter,
} from "../../redux/action";
import Filters from "./Filters";

const FilterContainer = ({ counter, filter }) => {
  const dispatch = useDispatch();

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
      onClearCompleted={handleClearCompleted}
      onActiveFilter={handleActiveFilter}
      onAllFilter={handleAllFilter}
      onCompletedFilter={handleCompletedFilter}
      counter={counter}
      filter={filter}
    />
  );
};
FilterContainer.propTypes = {
  counter: PropTypes.func,
  filter: PropTypes.string,
};
export default FilterContainer;
