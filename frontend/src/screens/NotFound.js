import React from "react";
import { Link } from "react-router-dom";

import { Segment, Message, Header, Button } from "semantic-ui-react";

const NotFound = () => {
    return (
        <Segment as={Message} textAlign="left">
            <Header as="h1">Ops! The page you have request cannot be found.</Header>
            <p>Maybe the page was deleted or perhaps you just mistyped the address.</p>
            <Button as={Link} to="/" color="blue">Back to Home Page</Button>
        </Segment>
    );
}

export default NotFound;