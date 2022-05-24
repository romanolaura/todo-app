import TodoCtx from "./toDoContext";
import data from "./data.json";
import { useState } from "react";

const TodoCtxProvider = (props) => {
  const [todoList, setTodoList] = useState(data);

  const markComplete = (id) => {
    setTodoList((prevList) => {
      let index = prevList.findIndex((item) => item.id === id);
      prevList[index].complete = !prevList[index].complete;
      return prevList;
    });
  };

  const addItem = (task) => {
    setTodoList((prevList) => {
      const newTask = { id: prevList.length + 1, task: task, complete: false };
      let newList = [newTask, ...prevList];
      return newList;
    });
  };

  const defaultCtx = {
    list: todoList,
    addItem: addItem,
    markComplete: markComplete,
  };

  return (
    <TodoCtx.Provider value={defaultCtx}>{props.children}</TodoCtx.Provider>
  );
};

export default TodoCtxProvider;
