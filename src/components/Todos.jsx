import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { revomeTodo } from "../Redux/todoApp/action/index";

const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);
  const dispatch = useDispatch();
  return todos.map((todo,id) => (
    <div key={todo.id}>
      <div className="d-flex flex-row justify-content-between align-items-center" >
        <div className="d-flex gap-2">
          <div className="mr-3">
            <input
              id="checkbox2"
              type="checkbox"
              checked={todo.completed}
            ></input>
          </div>
          <div className="ml-3 mr-3">
            <p>{todo.todo}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <span>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span onClick={() => dispatch(revomeTodo(todo.id))}>
            <FontAwesomeIcon icon={faEdit} />
          </span>
        </div>
      </div>
    </div>
  ));
};

export default Todos;
