import { useContext, useState } from "react";
import TodoCtx from "../../store/toDoContext";
import classes from "./NewTaskForm.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewTaskForm = (props) => {
  const [userInput, setUserInput] = useState("");
  const [invalid, setInvalid] = useState(false);

  let todoCtx = useContext(TodoCtx);

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") {
      setInvalid(true);
      return;
    }
    todoCtx.addItem(userInput);
    setUserInput("");
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value);
    setInvalid(false);
  };

  const hideFormHandler = () => {
    props.onHide();
  };

  return (
    <Form
      noValidate
      onSubmit={submitHandler}
      sm={12}
      md={{ span: 6, offset: 3 }}
    >
      <Form.Group controlId="newTask">
        <Form.Control
          type="text"
          onChange={userInputHandler}
          value={userInput}
          placeholder="Enter New Task"
          className={classes.input}
          isInvalid={invalid}
        ></Form.Control>
        <Form.Control.Feedback type="invalid">
          Enter a valid task.
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className={`${classes.button} ${classes.submit}`}
      >
        Enter
      </Button>
      <Button
        variant="danger"
        type="button"
        onClick={hideFormHandler}
        className={classes.button}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default NewTaskForm;
