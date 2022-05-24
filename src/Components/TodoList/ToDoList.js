import { useContext, useState } from "react";
import TodoCtx from "../../store/toDoContext";
import Todo from "./ToDo";
import classes from "./ToDoList.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TodoList = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const todoCtx = useContext(TodoCtx);
  const tasks = todoCtx.list;

  // Shows or hides completed tasks on user click
  const toggleCompletedHandler = () => {
    setShowCompleted((prev) => !prev);
  };

  // Filters completed tasks or shows all
  const tasksToShow = showCompleted
    ? tasks
    : tasks.filter((item) => item.complete === false);

  // Creates tasks list
  const todoItems = (
    <ul>
      {tasksToShow.map((todo) => (
        <li key={todo.id}>
          <Todo id={todo.id} task={todo.task} completed={todo.completed}></Todo>
        </li>
      ))}
    </ul>
  );

  return (
    <Container>
      <Row>
        <Col sm={12} md={{ span: 6, offset: 3 }}>
          <Card className={`text-center ${classes.list} bg-light rounded-3`}>
            <Card.Body>{todoItems}</Card.Body>
          </Card>
          <Button
            variant="outline-info"
            type="button"
            onClick={toggleCompletedHandler}
          >
            {showCompleted ? "Hide Complete" : "Show All"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
