import React from "react";

const Filters = ({ onCheckAll, onClearCompleted }) => {
  return (
    <div>
      <button onClick={onCheckAll}>Check All</button>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Filters;
