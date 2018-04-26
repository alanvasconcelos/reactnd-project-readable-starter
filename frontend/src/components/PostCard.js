import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import capitalize from "capitalize";

import { Card, Header, Label, Button, Icon, Popup, Grid } from "semantic-ui-react";

const PostCard = ({ post, onPostVote }) => (
    <Card fluid>
        <Card.Content>
            <Label as={NavLink} color="grey" ribbon="right" to={`/${post.category}`} name={post.category} content={capitalize.words(post.category)} />
            <Card.Header>
                <Header active="true" as={NavLink} to={`/${post.category}/${post.id}`} content={post.title} size="tiny" />
            </Card.Header>
            <Card.Meta>
                {`Posted by ${post.author || ""} - ${moment(post.timestamp).format("MM/DD/YYYY HH:mm")}`}
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <Grid columns="equal">
                <Grid.Row>
                    <Grid.Column>
                        <Popup trigger={
                            <Label size="large" basic pointing="right">{post.voteScore}</Label>
                        } content="Vote Score" />
                        <Button.Group>
                            <Popup trigger={
                                <Button basic icon size="mini" color="green" onClick={() => onPostVote(post.id, "upVote")}>
                                    <Icon flipped="horizontally" name="thumbs outline up" />
                                </Button>
                            } content="Vote Up" />
                            <Popup trigger={
                                <Button basic icon size="mini" color="red" onClick={() => onPostVote(post.id, "downVote")}>
                                    <Icon name="thumbs outline down" />
                                </Button>
                            } content="Vote Down" />
                        </Button.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Popup trigger={
                            <Button as="div" labelPosition="left" floated="right">
                                <Label basic pointing="right">{post.commentCount}</Label>

                                <Button icon>
                                    <Icon name="comment" />
                                </Button>

                            </Button>
                        } content="Comments" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Card.Content>
    </Card>
);

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    onPostVote: PropTypes.func.isRequired
}

export default PostCard;
