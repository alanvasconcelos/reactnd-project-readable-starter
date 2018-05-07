import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
import capitalize from "capitalize";
import { Segment, Header, Label, Container, Menu, Button } from "semantic-ui-react";
import VoteScore from "./VoteScore";
import CommentCount from "./CommentCount";
import ButtonAction from "./ButtonAction";
import ConfirmDelete from "./ConfirmDelete";
import Comment from "./Comment";

class PostDetails extends Component {
    state = { modalDeleteOpen: false }

    static propTypes = {
        post: PropTypes.object.isRequired,
        comments: PropTypes.array.isRequired,
        onPageBack: PropTypes.func.isRequired,
        onPageEdit: PropTypes.func.isRequired,
        onPostVote: PropTypes.func.isRequired,
        onPostDelete: PropTypes.func.isRequired,
        onCommentVote: PropTypes.func.isRequired,
        onCommentDelete: PropTypes.func.isRequired,
        onCommentInsert: PropTypes.func.isRequired,
        onCommentUpdate: PropTypes.func.isRequired,
        sort: PropTypes.string.isRequired,
        onSort: PropTypes.func.isRequired
    }

    onVotePost = (id, option) => (e) => {
        e.preventDefault();
        this.props.onPostVote(id, option);
    }

    handleModalDeleteOpen = () => this.setState({ modalDeleteOpen: true });

    handleModalDeleteConfirm = (id) => () => {
        this.setState({ modalDeleteOpen: false });
        this.props.onPostDelete(id);
        this.props.onPageBack();
    }

    handleModalDeleteCancel = () => this.setState({ modalDeleteOpen: false });

    render() {
        const { post, comments, onPageEdit, onPageBack, onCommentVote, onCommentInsert, onCommentUpdate, onCommentDelete, sort, onSort } = this.props;

        return (
            <div>
                <Segment.Group>
                    <Segment clearing attached="top">
                        <Header as="h2" floated="left">
                            {post.title}
                            <Header.Subheader>
                                {`Posted by ${post.author || ""} - ${moment(post.timestamp).format("MM/DD/YYYY HH:mm")}`}
                            </Header.Subheader>
                            <Label size="mini" tag as={NavLink} to={`/${post.category}`} name={post.category} content={capitalize.words(post.category || "")} />
                        </Header>
                        <Button.Group size="medium" basic floated="right">
                            <ButtonAction icon="reply" tooltip="Back Page" onClick={onPageBack} />
                            <ButtonAction icon="edit" tooltip="Edit" onClick={onPageEdit(post)} />
                            <ButtonAction icon="trash" tooltip="Delete" onClick={this.handleModalDeleteOpen} />
                        </Button.Group>
                    </Segment>
                    <Segment attached>
                        <Container fluid>
                            <p>{post.body}</p>
                        </Container>
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
                <Comment
                    postId={post.id}
                    sort={sort}
                    onSort={onSort}
                    comments={comments}
                    onCommentInsert={onCommentInsert}
                    onCommentUpdate={onCommentUpdate}
                    onCommentVote={onCommentVote}
                    onCommentDelete={onCommentDelete} />
                <ConfirmDelete
                    open={this.state.modalDeleteOpen}
                    textHeader="Post"
                    textContent={`the post "${post.title}"`}
                    onConfirm={this.handleModalDeleteConfirm(post.id)}
                    onCancel={this.handleModalDeleteCancel} />
            </div>
        );
    }
}

export default PostDetails;
