import React from "react";
import PropTypes from "prop-types";
import { Container, Segment, Menu } from "semantic-ui-react";

import capitalize from "capitalize";

import PostCard from "./PostCard";
import SortMode from "./SortMode";

const PostList = ({ title = "", posts = [], loading, sort, onPostVote, onSort, onPostDelete }) => (
  <Segment.Group>
    <Menu attached="top">
      <Menu.Item as="h3" header>{capitalize.words(title)}</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <SortMode sort={sort} onSort={onSort} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Segment attached="bottom" loading={loading}>
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