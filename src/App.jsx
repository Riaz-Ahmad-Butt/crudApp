import { Button, Container, Form } from "reactstrap";
import Todos from "./components/Todos";
import TodoForm from "./components/Form";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./Redux/todoApp/action";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);
  return (
    <>
      <div className="p-5 m-auto ">
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <p>Todo-App React-Readux & firebase</p>
          <div className="w-50">
            <TodoForm />
            <Todos />
          </div>
          <div>
            {todos.length> 1 && (
              <Button className="btn-danger btn-lg" onClick={()=>dispatch(deleteAll())}>Delete All</Button>
            )}
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
