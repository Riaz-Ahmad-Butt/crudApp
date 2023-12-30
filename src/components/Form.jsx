import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addTodo } from "../Redux/todoApp/action";


const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj))
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col md={6}>
          <FormGroup className="mb-0">
            <Label for="text">Add your todo-items</Label>
            <Input
              id="text"
              name="text"
              placeholder="todos"
              type="text"
              value={todoValue}
              required
              onChange={(e) => setTodoValue(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
