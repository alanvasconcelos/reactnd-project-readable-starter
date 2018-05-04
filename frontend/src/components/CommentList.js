import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";
import CommentCard from "./CommentCard";

const CommentList = ({ comments = [] }) => (
    <Segment>
        <Header as="h4" dividing>Comments</Header>
        {
            comments && comments.length > 0
                ? comments.map(c => (
                    <CommentCard key={c.id} comment={c}/>
                ))
                : <Container textAlign="center" text content="No Comment's." />
        }
    </Segment>
);

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentList;