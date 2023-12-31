import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addTodo } from "../Redux/todoApp/action";
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";


const TodoForm = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add todo to Redux state
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));

    // Add todo to Firebase Firestore
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        id: time,
        todo: todoValue,
        completed: false,
      });
      console.log("Todo added to Firestore with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding todo to Firestore: ", error);
    }
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
          <Button type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
