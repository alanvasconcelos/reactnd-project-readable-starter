import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import PostCard from './PostCard';

const PostList = ({ data, isFetching, error }) => (
  <Card.Group>
    {
      data && data.map(p => (
        <PostCard key={p.id} post={p} />
      ))
    }
  </Card.Group>
);
  
PostList.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

export default PostList;