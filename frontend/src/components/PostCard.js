import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Card, Header, Grid } from 'semantic-ui-react'

const PostCard = ({ post }) => (
    <Card fluid>
        <Card.Content>
            <Card.Header>
                <Header as={NavLink} to={`/${post.category}/${post.id}`}  content={post.title} size='medium' />
            </Card.Header>
            <Card.Meta>
                {`Posted by ${post.author || ''} - ${moment(post.timestamp).format('DD/MM/YYYY HH:mm')}`}
            </Card.Meta>
            <Card.Description>
                {post.body}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card.Content>
    </Card>
);

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard;
