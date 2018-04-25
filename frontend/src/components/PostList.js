import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import PostCard from './PostCard';

const PostList = ({ data = [], onPostVote }) => (
  <Card.Group stackable itemsPerRow={2}>
    {
      data 
      && data.length !== 0 
      && data.map(p => (
        <PostCard key={p.id} post={p} onPostVote={onPostVote} />
      ))
    }
  </Card.Group>
);

PostList.propTypes = {
  data: PropTypes.array.isRequired,
  onPostVote: PropTypes.func.isRequired
}

export default PostList;