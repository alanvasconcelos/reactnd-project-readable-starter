import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import capitalize from 'capitalize';

import { Card, Header, Label } from 'semantic-ui-react';

const PostCard = ({ post }) => (
    <Card fluid>
        <Card.Content raised>
            <Label as={NavLink} color='grey' ribbon='right' to={`/${post.category}`} name={post.category} content={capitalize.words(post.category)} />
            <Card.Header>
                <Header as={NavLink} to={`/${post.category}/${post.id}`} content={post.title} size='tiny' />
            </Card.Header>
            <Card.Meta>
                {`Posted by ${post.author || ''} - ${moment(post.timestamp).format('MM/DD/YYYY HH:mm')}`}
            </Card.Meta>
            <Card.Description>
                {post.body}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
    </Card>
);

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard;
