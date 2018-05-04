import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import { Button, Feed, Menu, Segment  } from "semantic-ui-react";
import ButtonAction from "./ButtonAction";
import VoteScore from "./VoteScore";
import ConfirmDelete from "./ConfirmDelete";

class CommentCard extends Component {
    state = { modalDeleteOpen: false }

    static propTypes = {
        comment: PropTypes.object.isRequired,
        onCommentVote: PropTypes.func.isRequired,
        onCommentDelete: PropTypes.func.isRequired
    }

    onVoteComment = (id, option) => (e) => {
        e.preventDefault();
        this.props.onCommentVote(id, option);
    }

    handleModalDeleteOpen = () => this.setState({ modalDeleteOpen: true });

    handleModalDeleteConfirm = (id) => () => {
        this.setState({ modalDeleteOpen: false });
        this.props.onCommentDelete(id);
    }

    handleModalDeleteCancel = () => this.setState({ modalDeleteOpen: false });

    render() {
        const { comment } = this.props;

        return (
            <Segment.Group>
                <Segment clearing attached="top">
                    <Feed size="small">
                        <Feed.Event>
                            <Feed.Content>
                                <Feed.Summary>
                                    Commented by {comment.author}
                                    <Feed.Date>{moment(comment.timestamp).format("MM/DD/YYYY HH:mm")}</Feed.Date>
                                </Feed.Summary>
                                <Feed.Extra text>
                                    {comment.body}
                                </Feed.Extra>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Segment>
                <Menu secondary size="tiny" attached compact>
                    <Menu.Item>
                        <VoteScore 
                            voteScore={comment.voteScore} 
                            onVoteUp={this.onVoteComment(comment.id, "upVote")}
                            onVoteDown={this.onVoteComment(comment.id, "downVote")} />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button.Group size="mini" basic>
                                <ButtonAction icon="edit" tooltip="Edit" />
                                <ButtonAction icon="trash" tooltip="Delete" onClick={this.handleModalDeleteOpen} />
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <ConfirmDelete
                    open={this.state.modalDeleteOpen}
                    textHeader="Comment"
                    textContent="the comment"
                    onConfirm={this.handleModalDeleteConfirm(comment.id)}
                    onCancel={this.handleModalDeleteCancel} />
            </Segment.Group>
        );
    }
}

export default CommentCard;