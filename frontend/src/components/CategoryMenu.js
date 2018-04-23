import React from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';
import capitalize from 'capitalize';

import { TITLE_MENU_CATEGORY } from './../utils/constants';

const CategoryMenu = ({ data }) => (
    <Menu vertical>
        <Menu.Item>
            <Menu.Header>{ TITLE_MENU_CATEGORY }</Menu.Header>
            <Menu.Menu>
                {
                    data && data.map((c) => (
                        <Menu.Item key={c.path} as={NavLink} to={`/${c.path}`} name={c.name} content={capitalize.words(c.name)} />
                    ))
                }
            </Menu.Menu>
        </Menu.Item>
    </Menu>
);

export default CategoryMenu;