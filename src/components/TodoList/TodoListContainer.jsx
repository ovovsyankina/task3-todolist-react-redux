import React from "react";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import { todosSelector, filterSelector } from "../../redux/selector";
import FilterContainer from "../Filters/FilterContainer";
import TodoInputContainer from "../TodoInput/TodoInputContainer";

const TodoListContainer = () => {
  const todos = useSelector(todosSelector);
  const filter = useSelector(filterSelector);

  const filterTodo = () => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.complete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.complete);
    } else {
      return todos;
    }
  };

  const counter = () => {
    let index = 0;
    todos.map((todo) => (!todo.complete ? (index = index + 1) : index));
    return index;
  };

  return (
    <div className="body">
      <div className="header">
        <div className="head">TODO LIST</div>
        <TodoInputContainer />
      </div>
      <div className="main">
        <FilterContainer counter={counter} filter={filter} />
        <TodoList
          todos={filterTodo()}
          filter={filter}
          counter={counter}
          sharedTodos={todos}
        />
      </div>
    </div>
  );
};

export default TodoListContainer;
