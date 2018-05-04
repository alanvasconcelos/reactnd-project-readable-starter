import React from "react";
import PropTypes from "prop-types";
import { Container, Segment, Menu } from "semantic-ui-react";
import CommentCard from "./CommentCard";
import SortMode from "./SortMode";

const CommentList = ({ comments = [], sort, onSort, onCommentVote, onCommentDelete }) => (
    <Segment.Group>
        <Menu attached="top">
            <Menu.Item as="h3" header>Comments</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <SortMode sort={sort} onSort={onSort} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        {
            comments && comments.length > 0
                ? comments.map(c => (
                    <CommentCard
                        key={c.id}
                        comment={c}
                        onCommentVote={onCommentVote}
                        onCommentDelete={onCommentDelete} />
                ))
                : <Container textAlign="center" text content="No Comment's." />
        }
    </Segment.Group>
);

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    onCommentVote: PropTypes.func.isRequired,
    onCommentDelete: PropTypes.func.isRequired
}

export default CommentList;