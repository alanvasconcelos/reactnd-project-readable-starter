import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import capitalize from "capitalize";
import moment from "moment";

import { Card, Confirm, Dropdown, Header, Label, Button, Icon, Popup, Grid } from "semantic-ui-react";

class PostCard extends Component {
    state = { modalDeleteOpen: false }

    static propTypes = {
        post: PropTypes.object.isRequired,
        onPostVote: PropTypes.func.isRequired
    }

    handleModalDeleteOpen = () => this.setState({ modalDeleteOpen: true })

    handleModalDeleteConfirm = () => this.setState({ modalDeleteOpen: false })

    handleModalDeleteCancel = () => this.setState({ modalDeleteOpen: false })

    render() {
        const { post, onPostVote } = this.props;

        return (
            <Card fluid>
                <Card.Content>
                    <Label as={NavLink} color="grey" ribbon="right" to={`/${post.category}`} name={post.category} content={capitalize.words(post.category)} />
                    <Card.Header>
                        <Dropdown icon="bars">
                            <Dropdown.Menu>
                                <Dropdown.Item icon="edit" text="Edit" />
                                <Dropdown.Item onClick={this.handleModalDeleteOpen} icon="trash" text="Delete" />
                                <Confirm
                                    size="small"
                                    open={this.state.modalDeleteOpen}
                                    header={`Delete the Post?`}
                                    content={`Are you sure you want to delete the post ${post.title}?`}
                                    onCancel={this.handleModalDeleteCancel}
                                    onConfirm={this.handleModalDeleteConfirm}
                                />
                            </Dropdown.Menu>
                        </Dropdown>
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
                                    <Button.Or />
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
    }
}

export default PostCard;