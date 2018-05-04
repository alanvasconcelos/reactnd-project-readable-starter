import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { findOnePostRequest, updateVotePostRequest, deletePostRequest } from './../actions/post';
import { findAllCommentByParentIDRequest, updateVoteCommentRequest, deleteCommentRequest } from "../actions/comment";
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
        const { post, comments, sendPostVote, deletePost, sendCommentVote, deleteComment, sortMode, sortComments } = this.props;

        return (
            post && post.id
                ? <PostDetails
                    post={post}
                    comments={comments}
                    onPageBack={this.onPageBack}
                    onPostVote={sendPostVote}
                    onPostDelete={deletePost}
                    onCommentVote={sendCommentVote}
                    onCommentDelete={deleteComment}
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
    deletePost: (id) => dispatch(deletePostRequest(id)),
    loadCommentByPost: (id) => dispatch(findAllCommentByParentIDRequest(id)),
    sendCommentVote: (id, option) => dispatch(updateVoteCommentRequest(id, option)),
    deleteComment: (id) => dispatch(deleteCommentRequest(id)),
    sortComments: (option) => dispatch(sort(option)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostScreen));