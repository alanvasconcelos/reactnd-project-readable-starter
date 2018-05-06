import React, { Component } from "react";
import PropTypes from "prop-types";
import { Segment, Menu, Button } from "semantic-ui-react";
import SortMode from "./SortMode";
import ButtonAction from "./ButtonAction";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

class Comment extends Component {
    state = {
        formShow: false
    }

    static propTypes = {
        postId: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        sort: PropTypes.string.isRequired,
        onSort: PropTypes.func.isRequired,
        onCommentInsert: PropTypes.func.isRequired,
        onCommentUpdate: PropTypes.func.isRequired,
        onCommentVote: PropTypes.func.isRequired,
        onCommentDelete: PropTypes.func.isRequired
    }

    handleFormShow = () => this.setState(prevState => ({ formShow: !prevState.formShow }));

    render() {
        const { postId, comments, onCommentVote, onCommentInsert, onCommentUpdate, onCommentDelete, sort, onSort } = this.props;
        const { formShow } = this.state;

        return (
            <Segment.Group>
                {
                    !formShow &&
                    <Menu compact attached>
                        <Menu.Item as="h3" header>Comments</Menu.Item>
                        <Menu.Item>
                            <Button.Group size="mini" basic>
                                <ButtonAction icon="add" tooltip="New Comment" onClick={this.handleFormShow} />
                            </Button.Group>
                        </Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item>
                                {!formShow && <SortMode sort={sort} onSort={onSort} />}
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                }
                {
                    formShow
                        ? <CommentForm 
                            isEditing={false}
                            comment={{parentId: postId}}
                            onSubmit={onCommentInsert}
                            onCancel={this.handleFormShow} />
                        : <CommentList
                            comments={comments}
                            onCommentVote={onCommentVote}
                            onCommentDelete={onCommentDelete}
                            onCommentUpdate={onCommentUpdate} />
                }
            </Segment.Group>
        );
    }
}

export default Comment;
