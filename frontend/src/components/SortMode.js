import React from "react";
import PropTypes from "prop-types";

import { Dropdown, Popup } from "semantic-ui-react";

import { HIGH_SCORE, LOW_SCORE, NEW_TIME, OLD_TIME } from "./../utils/constants";

const options = [
    { key: HIGH_SCORE, text: "High Score", value: HIGH_SCORE },
    { key: LOW_SCORE, text: "Low Score", value: LOW_SCORE },
    { key: NEW_TIME, text: "Newest", value: NEW_TIME },
    { key: OLD_TIME, text: "Oldest", value: OLD_TIME }
];

const SortMode = ({ sort, onSort }) => (
    <Popup trigger={
        <Dropdown compact icon="sort" floating labeled button className="icon"
            onChange={(e, { value }) => onSort(value)}
            options={options}
            placeholder="Sort Mode"
            selection
            value={sort} />
    } content="Sort" />
);

SortMode.propTypes = {
    sort: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired
}

export default SortMode;
