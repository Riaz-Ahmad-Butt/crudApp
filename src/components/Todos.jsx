import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Input } from "reactstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const todos = useSelector((state) => state.operationsReducer);
  console.log(todos);
  return todos.map((todo) => (
    <div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <div className="mr-3">
            <input id="checkbox2" type="checkbox" checked={todo.completed} ></input>
          </div>
          <div className="ml-3 mr-3">
            <p>{todo.todo}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <FontAwesomeIcon icon={faTrash} />
          <FontAwesomeIcon icon={faEdit} />
        </div>
      </div>
    </div>
  ));
};

export default Todos;
