import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, checkAllTodo } from "../../action/action";
import TodoInput from "../../components/TodoInput/TodoInput";

const TodoInputContainer = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const addNewTodo = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (value.trim().length !== 0) {
          dispatch(
            addTodo(Date.now(), value.trim().replace(/ /g, "\u00A0"), false)
          );
          setValue("");
        } else {
          setValue("");
        }
      }
    },
    [dispatch, value]
  );

  const handleCheckAll = useCallback(() => {
    dispatch(checkAllTodo());
  }, [dispatch]);
  return (
    <TodoInput
      value={value}
      addNewTodo={addNewTodo}
      setValue={setValue}
      onCheckAll={handleCheckAll}
    />
  );
};

export default TodoInputContainer;
