import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import capitalize from 'capitalize';

import { Menu, Dimmer, Loader } from 'semantic-ui-react';

import { TITLE_MENU_CATEGORY } from './../utils/constants';

const Category = ({ data, isFetching }) => (
    <Menu fluid vertical size='large'>
        <Dimmer active={isFetching} inverted>
            <Loader inverted>Loading</Loader>
        </Dimmer>
        <Menu.Item>
            <Menu.Header>{TITLE_MENU_CATEGORY}</Menu.Header>
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

Category.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Category;