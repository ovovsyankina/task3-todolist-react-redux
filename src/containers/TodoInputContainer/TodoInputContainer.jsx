import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../action/action";
import TodoInput from "../../components/TodoInput/TodoInput";

const TodoInputContainer = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const addNewTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (value.trim().length !== 0) {
        dispatch(addTodo(Date.now(), value, false));
        setValue("");
      } else {
        setValue("");
      }
      console.log(value);
      console.log("add");
    },
    [dispatch, value]
  );
  return (
    <TodoInput value={value} addNewTodo={addNewTodo} setValue={setValue} />
  );
};

export default TodoInputContainer;
