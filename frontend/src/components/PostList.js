import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";

import capitalize from "capitalize";

import PostCard from "./PostCard";
import SortMode from "./SortMode";

const PostList = ({ title = "", posts = [], loading, sort, onPostVote, onSort, onPostDelete }) => (
  <Segment.Group>
    <Segment clearing attached="top">
      <Header as="h2" floated="left">
        {capitalize.words(title)}
      </Header>
      <Header as="h6" floated="right">
        <SortMode sort={sort} onSort={onSort} />
      </Header>
    </Segment>
    <Segment attached loading={loading}>
      {
        posts && posts.length > 0
          ? posts.map(p => (
            <PostCard key={p.id} post={p} onPostVote={onPostVote} onPostDelete={onPostDelete} />
          ))
          : <Container textAlign="center" text content="No Post's." />
      }
    </Segment>
  </Segment.Group>
);

PostList.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
  onPostVote: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onPostDelete: PropTypes.func.isRequired
}

export default PostList;