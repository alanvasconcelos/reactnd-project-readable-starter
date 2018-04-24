import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => (
    <Menu fixed='top' inverted size='large'>
        <Container>
            <Menu.Item as='div' header>
                <NavLink to='/'>Project Readable</NavLink>
            </Menu.Item>
        </Container>
    </Menu>
)

export default Navbar;