import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { findOnePostRequest, updateVotePostRequest, deletePostRequest } from './../actions/post';
import { findAllCommentByParentIDRequest, updateVoteCommentRequest, deleteCommentRequest, insertCommentRequest, updateCommentRequest } from "../actions/comment";
import { sort } from "../actions/sort";
import { getPostByCategoryAndPostID } from "./../selectors/post";
import { getSortComments } from "../selectors/comment";

import PostDetails from "./../components/PostDetails";
import NotFound from "./NotFound";

class PostScreen extends Component {

    componentDidMount() {
        const id = this.props.match.params.post_id;

        if (id) {
            this.props.loadPost(id);
            this.props.loadCommentByPost(id);
        }
    }

    onPageBack = () => this.props.history.goBack();

    render() {
        const { post, sortMode, comments, sendPostVote, sendPostDelete, sortComments, sendCommentVote, sendCommentInsert, sendCommentUpdate, sendCommentDelete } = this.props;

        return (
            post && post.id
                ? <PostDetails
                    post={post}
                    comments={comments}
                    onPageBack={this.onPageBack}
                    onPostVote={sendPostVote}
                    onPostDelete={sendPostDelete}
                    onCommentInsert={sendCommentInsert}
                    onCommentUpdate={sendCommentUpdate}
                    onCommentVote={sendCommentVote}
                    onCommentDelete={sendCommentDelete}
                    sort={sortMode}
                    onSort={sortComments} />
                : <NotFound />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPostByCategoryAndPostID(state, ownProps) || {},
    comments: getSortComments(state, ownProps) || [],
    sortMode: state.sort
});

const mapDispatchToProps = (dispatch) => ({
    loadPost: (id) => dispatch(findOnePostRequest(id)),
    sendPostVote: (id, option) => dispatch(updateVotePostRequest(id, option)),
    sendPostDelete: (id) => dispatch(deletePostRequest(id)),
    loadCommentByPost: (id) => dispatch(findAllCommentByParentIDRequest(id)),
    sortComments: (option) => dispatch(sort(option)),
    sendCommentVote: (id, option) => dispatch(updateVoteCommentRequest(id, option)),
    sendCommentInsert: (comment) => dispatch(insertCommentRequest(comment)),
    sendCommentUpdate: (comment) => dispatch(updateCommentRequest(comment)),
    sendCommentDelete: (id) => dispatch(deleteCommentRequest(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostScreen));