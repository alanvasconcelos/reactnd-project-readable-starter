import React from "react";
import PropTypes from "prop-types";
import { Card, Container, Header, Segment } from "semantic-ui-react";

import capitalize from "capitalize";

import PostCard from "./PostCard";

const PostList = ({ title = '', data = [], loading, onPostVote }) => (
  <Segment.Group>
    <Header as="h3" attached="top">
      {capitalize.words(title)}
    </Header>
    <Segment attached loading={loading}>
      {
        data && data.length > 0
          ? <Card.Group stackable>
              {
                data.map(p => (
                  <PostCard key={p.id} post={p} onPostVote={onPostVote} />
                ))
              }
            </Card.Group>
          : <Container textAlign="center" text><p>No Results.</p></Container>
      }
    </Segment>
  </Segment.Group>
);

PostList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onPostVote: PropTypes.func.isRequired
}

export default PostList;