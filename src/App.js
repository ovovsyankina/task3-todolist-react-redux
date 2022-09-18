import React from "react";
import FilterContainer from "./containers/FilterContainer/FilterContainer";
import TodoInputContainer from "./containers/TodoInputContainer/TodoInputContainer";
import TodoListContainer from "./containers/TodoListContainer/TodoListContainer";
import "./style/index.css";
const App = () => {
  return (
    <div>
      <div className="fon"></div>

      <TodoListContainer />
    </div>
  );
};
export default App;
