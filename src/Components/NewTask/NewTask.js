import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import NewTaskForm from "./NewTaskForm";
import classes from "./NewTask.module.css";

const NewTask = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Container className={`text-center ${classes["new-task-container"]}`}>
      <Row>
        <Col sm={12} md={{ span: 6, offset: 3 }} >
          <Card sm={12} md={{ span: 6, offset: 3 }} className={classes["card-bg"]}>
            <Card.Body>
              {!showForm ? (
                <Button type="button" onClick={showFormHandler}>
                  Add New Task
                </Button>
              ) : (
                <NewTaskForm onHide={showFormHandler} />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewTask;
