import React from "react";
import PropTypes from "prop-types";
import { Container, Segment } from "semantic-ui-react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments = [], onCommentUpdate, onCommentVote, onCommentDelete }) => (
    <Segment attached>
        {
            comments && comments.length > 0
                ? comments.map(c => (
                    <CommentCard
                        key={c.id}
                        comment={c}
                        onCommentUpdate={onCommentUpdate}
                        onCommentVote={onCommentVote}
                        onCommentDelete={onCommentDelete} />
                ))
                : <Segment><Container textAlign="center" text content="No Comment's." /></Segment>
        }
    </Segment>
);

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    onCommentVote: PropTypes.func.isRequired,
    onCommentDelete: PropTypes.func.isRequired,
    onCommentUpdate: PropTypes.func.isRequired
}

export default CommentList;