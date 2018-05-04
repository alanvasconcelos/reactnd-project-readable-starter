import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import capitalize from "capitalize";
import moment from "moment";

import { Button, Confirm, Header, Label, Menu, Segment } from "semantic-ui-react";
import VoteScore from "./VoteScore";
import CommentCount from "./CommentCount";
import ButtonAction from "./ButtonAction";

class PostCard extends Component {
    state = { modalDeleteOpen: false }

    static propTypes = {
        post: PropTypes.object.isRequired,
        onPostVote: PropTypes.func.isRequired,
        onPostDelete: PropTypes.func.isRequired
    }

    onVotePost = (id, option) => (e) => {
        e.preventDefault();
        this.props.onPostVote(id, option);
    }

    handleModalDeleteOpen = () => this.setState({ modalDeleteOpen: true });

    handleModalDeleteConfirm = (id) => () => {
        this.setState({ modalDeleteOpen: false });
        this.props.onPostDelete(id);
    }

    handleModalDeleteCancel = () => this.setState({ modalDeleteOpen: false });

    render() {
        const { post } = this.props;

        return (
            <Segment.Group>
                <Segment clearing attached="top">
                    <Header as="h3" floated="left">
                        <NavLink active="true" to={`/${post.category}/${post.id}`}>{post.title}</NavLink>
                        <Header.Subheader>
                            {`Posted by ${post.author || ""} - ${moment(post.timestamp).format("MM/DD/YYYY HH:mm")}`}
                        </Header.Subheader>
                        <Label size="mini" tag as={NavLink} to={`/${post.category}`} name={post.category} content={capitalize.words(post.category || "")} />
                    </Header>
                    <Button.Group basic size="mini" floated="right">
                        <ButtonAction icon="edit" tooltip="Edit" />
                        <ButtonAction icon="trash" tooltip="Delete" onClick={this.handleModalDeleteOpen} />
                        <Confirm
                            size="small"
                            open={this.state.modalDeleteOpen}
                            header={`Delete Post?`}
                            content={`Are you sure you want to delete the post "${post.title}"?`}
                            onConfirm={this.handleModalDeleteConfirm(post.id)}
                            onCancel={this.handleModalDeleteCancel} />
                    </Button.Group>
                </Segment>
                <Menu secondary size="tiny" attached compact>
                    <Menu.Item>
                        <VoteScore
                            voteScore={post.voteScore}
                            onVoteUp={this.onVotePost(post.id, "upVote")}
                            onVoteDown={this.onVotePost(post.id, "downVote")} />
                    </Menu.Item>
                    <Menu.Item>
                        <CommentCount commentCount={post.commentCount} />
                    </Menu.Item>
                </Menu>
            </Segment.Group>
        );
    }
}

export default PostCard;