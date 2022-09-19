import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Filters.scss";

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
          className={classnames("all_filter", {
            active_button: filter === "all",
          })}
          onClick={onAllFilter}
        >
          All
        </button>
        <button
          className={classnames("active_filter", {
            active_button: filter === "active",
          })}
          onClick={onActiveFilter}
        >
          Active
        </button>
        <button
          className={classnames("completed_filter", {
            active_button: filter === "completed",
          })}
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
