import React from "react";
import PropTypes from "prop-types";
import { Confirm } from "semantic-ui-react";

const ConfirmDelete = ({ open, textHeader = "", textContent = "", onConfirm, onCancel }) => (
    <Confirm
        size="small"
        open={open}
        header={`Delete ${textHeader}?`}
        content={`Are you sure you want to delete ${textContent}?`}
        onConfirm={onConfirm}
        onCancel={onCancel} />
);

ConfirmDelete.propTypes = {
    open: PropTypes.bool.isRequired,
    textHeader: PropTypes.string,
    textContent: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

export default ConfirmDelete;
