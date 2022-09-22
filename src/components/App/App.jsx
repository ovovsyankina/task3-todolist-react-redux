import React from "react";
import TodoListContainer from "../TodoList/TodoListContainer";
import TodoInputContainer from "../TodoInput/TodoInputContainer";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div>
      <div className={styles.fon} />
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.head}>TODO LIST</div>
          <TodoInputContainer />
        </div>

        <TodoListContainer />
      </div>
    </div>
  );
};

export default App;
