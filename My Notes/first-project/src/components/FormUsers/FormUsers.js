import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormUsers = (props) => {
  const [userForm,setUserForm] = useState({
    name: '',
    age: ''
  });
  
  const enteredNameHandler = (event) => {
    setUserForm( prevUserForm => { 
      return {
        ...prevUserForm,
        name: event.target.value,
      }
    });
  }

  const enteredAgeHandler = (event) => {
    setUserForm( prevUserForm => {
      return {
        ...prevUserForm,
        age: event.target.value,
      }
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onAddUser(userForm);
    setUserForm({
      name: '',
      age: ''
    });

  };

  return (
    <Jumbotron>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control value={userForm.name}  type="text" onChange={enteredNameHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age (Years)</Form.Label>
          <Form.Control value={userForm.age} type="number" onChange={enteredAgeHandler}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default FormUsers;
