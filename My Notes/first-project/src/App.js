import React, { useState } from "react";

import Container from "react-bootstrap/Container";

import FormUsers from "./components/FormUsers/FormUsers";
import ListUsers from "./components/ListUsers/ListUsers";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([
    {
      id: Math.random().toString(),
      name: "Carlos",
      age: 21,
    },
  ]);

  const addUserHandler = (user) => {
    const newUser = {
      id: Math.random().toString(),
      ...user,
    };

    setUserList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };

  return (
    <Container className="p-3">
      <FormUsers onAddUser={addUserHandler} />
      <ListUsers users={userList} />
    </Container>
  );
}

export default App;
