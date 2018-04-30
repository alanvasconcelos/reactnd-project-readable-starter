import React from "react";
import { NavLink } from "react-router-dom";

import { Segment, Message, Header, Button } from "semantic-ui-react";

const Page404 = () => {
    return (
        <Segment as={Message} textAlign="left">
            <Header as='h1'>Ops! The page you have request cannot be found.</Header>
            <p>Maybe the page was deleted or perhaps you just mistyped the address.</p>
            <NavLink to="/">
                <Button color="blue">Back to Home Page</Button>
            </NavLink>
        </Segment>
    );
}

export default Page404;