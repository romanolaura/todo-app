import { useCallback, useContext, useEffect, useState } from "react";
import TodoCtx from "../../store/toDoContext";
import classes from "./ToDo.module.css";

const Todo = (props) => {
  const [taskStyle, setTaskStyle] = useState("");

  const todoCtx = useContext(TodoCtx);

  const markCompleteHandler = () => {
    todoCtx.markComplete(props.id);
    strikeHandler(props.id);
  };

  const strikeHandler = useCallback(
    (id) => {
      let list = todoCtx.list;
      let task = list.find((item) => item.id === id);
      task.complete ? setTaskStyle(classes.completed) : setTaskStyle("");
    },
    [todoCtx]
  );

  useEffect(() => {
    strikeHandler(props.id);
  }, [strikeHandler, props.id]);

  return (
    <div onClick={markCompleteHandler} className={taskStyle}>
      <p className={classes["todo-item"]}>{props.task}</p>
    </div>
  );
};

export default Todo;
