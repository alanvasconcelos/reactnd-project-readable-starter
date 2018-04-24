import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import PostCard from './PostCard';

const PostList = ({ data }) => (
  <Card.Group stackable itemsPerRow={2}>
    {
      data && data.length !== 0 && data.map(p => (<PostCard key={p.id} post={p} />))
    }
  </Card.Group>
);

PostList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PostList;