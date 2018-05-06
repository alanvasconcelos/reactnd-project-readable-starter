import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Segment, Menu, Button, Popup } from "semantic-ui-react";

import capitalize from "capitalize";

import PostCard from "./PostCard";
import SortMode from "./SortMode";

const PostList = ({ category, posts = [], loading, sort, onPostVote, onSort, onPostDelete }) => (
  <Segment.Group>
    <Menu attached="top">
      <Menu.Item as="h3" header>{capitalize.words(category || "All Post's")}</Menu.Item>
      <Menu.Item>
        <Button.Group size="mini" basic>
          <Popup trigger={
            <Button as={Link} icon="add" to={category ? `/${category}/post/new` :  "/post/new"} />
          } content="New Post" />
        </Button.Group>
      </Menu.Item>
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
  category: PropTypes.string,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
  onPostVote: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onPostDelete: PropTypes.func.isRequired
}

export default PostList;