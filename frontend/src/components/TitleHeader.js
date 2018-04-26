import React from "react";
import capitalize from "capitalize";
import PropTypes from "prop-types";

import { Header } from "semantic-ui-react";

const TitleHeader = ({ title = ""}) => (
    <Header as="h3" attached="top">
        {capitalize.words(title)}
    </Header>
)

TitleHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default TitleHeader;
