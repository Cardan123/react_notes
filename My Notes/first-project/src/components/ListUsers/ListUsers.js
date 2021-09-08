import React from "react";

import { Jumbotron } from "react-bootstrap";

import User from "./User";

const ListUsers = (props) => {
  const dataUsers = [...props.users];

  const userElement = dataUsers.map((userData) => (
    <User key={userData.id} name={userData.name} age={userData.age} />
  ));

  return <Jumbotron>{userElement}</Jumbotron>;
};

export default ListUsers;
