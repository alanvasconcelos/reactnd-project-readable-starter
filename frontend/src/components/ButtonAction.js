import React from "react";
import PropTypes from "prop-types";
import { Popup, Button } from "semantic-ui-react";

const ButtonAction = ({ icon, tooltip, onClick }) => (
    <Popup trigger={
        <Button icon={icon} onClick={onClick} />
    } content={tooltip} />
);

ButtonAction.propTypes = {
    icon: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ButtonAction;
