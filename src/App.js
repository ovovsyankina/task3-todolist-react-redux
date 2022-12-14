import React from "react";
import FilterContainer from "./containers/FilterContainer/FilterContainer";
import TodoInputContainer from "./containers/TodoInputContainer/TodoInputContainer";
import TodoListContainer from "./containers/TodoListContainer/TodoListContainer";
import "./index.css";
const App = () => {
  return (
    <div>
      <TodoInputContainer />
      <FilterContainer />
      <TodoListContainer />
    </div>
  );
};
export default App;
