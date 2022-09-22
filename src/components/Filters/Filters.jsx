import React from "react";
import { func, string, number } from "prop-types";
import classnames from "classnames";
import styles from "./Filters.module.scss";

const Filters = ({
  onClearCompleted,
  onAllFilter,
  onActiveFilter,
  onCompletedFilter,
  counter,
  filter,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}>
        <button
          className={classnames(styles.all_filter, {
            [styles.active_button]: filter === "all",
          })}
          onClick={onAllFilter}
        >
          All
        </button>

        <button
          className={classnames(styles.active_filter, {
            [styles.active_button]: filter === "active",
          })}
          onClick={onActiveFilter}
        >
          Active
        </button>

        <button
          className={classnames(styles.completed_filter, {
            [styles.active_button]: filter === "completed",
          })}
          onClick={onCompletedFilter}
        >
          Completed
        </button>

        <button className={styles.clear_completed} onClick={onClearCompleted}>
          Clear Completed
        </button>

        <div className={styles.count}>
          {counter} item{counter > 1 ? "s" : ""} left
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  onClearCompleted: func,
  onAllFilter: func,
  onActiveFilter: func,
  onCompletedFilter: func,
  counter: number,
  filter: string,
};

export default Filters;
