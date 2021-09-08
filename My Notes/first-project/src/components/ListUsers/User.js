import React from 'react';
import { Card, Container } from 'react-bootstrap';

const User = (props) => {
    
    return <Container>
        <Card body className="bg-dark text-white">{`${props.name} (${props.age} years old)`}</Card>
    </Container>
}

export default User;