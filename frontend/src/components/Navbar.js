import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Navbar = () => (
    <Menu fixed='top'>
        <Container>
            <Menu.Item as='a' header>
                Project Readable
            </Menu.Item>
        </Container>
    </Menu>
)

export default Navbar;