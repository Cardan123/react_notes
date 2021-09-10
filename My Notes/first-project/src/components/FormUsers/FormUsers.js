import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const FormUsers = (props) => {
  const [userForm, setUserForm] = useState({
    name: "",
    age: "",
  });

  const [errorAlert, setErrorAlert] = useState(0);

  const enteredNameHandler = (event) => {
    setUserForm((prevUserForm) => {
      return {
        ...prevUserForm,
        name: event.target.value,
      };
    });
  };

  const enteredAgeHandler = (event) => {
    setUserForm((prevUserForm) => {
      return {
        ...prevUserForm,
        age: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userForm.name.trim().length > 0 && userForm.age.trim().length > 0) {
      if (Number(userForm.age) < 0) {
        setErrorAlert(2);
        return;
      }

      props.onAddUser(userForm);
      setUserForm({
        name: "",
        age: "",
      });
      setErrorAlert(0);
      return;
    }

    setErrorAlert(1);
  };

  const alertEmpty = () => {
    if (errorAlert === 1) {
      return (
        <Alert key="errorEmpty" variant="danger">
          Please enter a valid name and age (not-empty values).
        </Alert>
      );
    } else if (errorAlert === 2) {
      return (
        <Alert key="errorNegative" variant="danger">
          Please enter a valid age (not negative).
        </Alert>
      );
    }

    return 1;
  };

  const alert = alertEmpty();

  return (
    <Jumbotron>
      {errorAlert === 1 && alert}
      {errorAlert === 2 && alert}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={userForm.name}
            type="text"
            onChange={enteredNameHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age (Years)</Form.Label>
          <Form.Control
            value={userForm.age}
            type="number"
            onChange={enteredAgeHandler}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add User
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default FormUsers;
