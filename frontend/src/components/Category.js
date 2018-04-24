import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import capitalize from 'capitalize';

import { Menu } from 'semantic-ui-react';

import { TITLE_MENU_CATEGORY } from './../utils/constants';

const Category = ({ categories }) => (
    <Menu fluid vertical size='large'>
        <Menu.Item>
            <Menu.Header>{ TITLE_MENU_CATEGORY }</Menu.Header>
            <Menu.Menu>
                {
                    categories && categories.map((c) => (
                        <Menu.Item key={c.path} as={NavLink} to={`/${c.path}`} name={c.name} content={capitalize.words(c.name)} />
                    ))
                }
            </Menu.Menu>
        </Menu.Item>
    </Menu>
);

Category.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Category;