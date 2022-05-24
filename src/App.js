import "./App.css";
import Header from "./Components/Header/Header";
import TodoList from "./Components/TodoList/ToDoList";
import TodoCtxProvider from "./store/toDoContextProvider";
import Container from "react-bootstrap/esm/Container";
import NewTask from "./Components/NewTask/NewTask";

function App() {
  return (
    <Container>
      <TodoCtxProvider>
        <Header />
        <NewTask />
        <TodoList />
      </TodoCtxProvider>
    </Container>
  );
}

export default App;
