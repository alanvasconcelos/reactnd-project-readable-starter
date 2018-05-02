import React from "react";
import PropTypes from "prop-types";
import { Popup, Label, Button, Icon } from 'semantic-ui-react';

const CommentCount = ({ commentCount }) => (
    <Popup trigger={
        <div>
            <Label size="large" basic pointing="right">{commentCount}</Label>
            <Button basic color="black" icon disabled>
                <Icon name="comment" />
            </Button>
        </div>
    } content="Comments" />
);

CommentCount.propTypes = {
    commentCount: PropTypes.number.isRequired
}

export default CommentCount;