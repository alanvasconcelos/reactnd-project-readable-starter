import React from "react";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import capitalize from "capitalize";

import { Menu, Dimmer, Loader } from "semantic-ui-react";

const CategoryMenu = ({ data, isLoading }) => (
    <Menu fluid vertical size="large">
        <Dimmer active={isLoading} inverted>
            <Loader inverted />
        </Dimmer>
        <Menu.Item>
            <Menu.Header>Categories</Menu.Header>
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

CategoryMenu.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default CategoryMenu;