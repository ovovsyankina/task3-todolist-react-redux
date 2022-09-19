import React from "react";
import PropTypes from "prop-types";
const Filters = ({
  onClearCompleted,
  onAllFilter,
  onActiveFilter,
  onCompletedFilter,
  counter,
  filter,
}) => {
  return (
    <div className="filter_main">
      <div className="filter">
        <button
          className={
            filter === "all" ? "active_button all_filter" : "all_filter"
          }
          onClick={onAllFilter}
        >
          All
        </button>
        <button
          className={
            filter === "active"
              ? "active_button active_filter"
              : "active_filter"
          }
          onClick={onActiveFilter}
        >
          Active
        </button>
        <button
          className={
            filter === "completed"
              ? "active_button completed_filter"
              : "completed_filter"
          }
          onClick={onCompletedFilter}
        >
          Completed
        </button>

        <button className="clearCompleted" onClick={onClearCompleted}>
          Clear Completed
        </button>
        <div className="count">
          {counter()} item{counter() > 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
};
Filters.propTypes = {
  onClearCompleted: PropTypes.func,
  onAllFilter: PropTypes.func,
  onActiveFilter: PropTypes.func,
  onCompletedFilter: PropTypes.func,
  counter: PropTypes.func,
  filter: PropTypes.string,
};
export default Filters;
