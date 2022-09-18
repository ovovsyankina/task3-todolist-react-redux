import React from "react";

const Filters = ({
  onCheckAll,
  onClearCompleted,
  onAllFilter,
  onActiveFilter,
  onCompletedFilter,
}) => {
  return (
    <div>
      <button onClick={onAllFilter}> All</button>
      <button onClick={onActiveFilter}>Active</button>
      <button onClick={onCompletedFilter}>Completed</button>

      <button onClick={onCheckAll}>Check All</button>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Filters;
