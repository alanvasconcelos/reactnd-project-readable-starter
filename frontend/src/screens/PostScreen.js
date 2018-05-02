import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { findOnePostRequest, updateVotePostRequest, deletePostRequest } from './../actions/post';
import { findAllCommentByParentIDRequest } from "../actions/comment";
import { getPostByCategoryAndPostID } from "./../selectors/post";
import PostDetails from "./../components/PostDetails";
import Page404 from "./Page404";
import { getSortComments } from "../selectors/comment";

class PostScreen extends Component {

    componentDidMount() {
        this.props.loadPost(this.props.postID);

        // if (this.props.post) {
        //     this.props.loadCommentByPost(this.props.post.id);
        // }
    }

    onPageBack = () => this.props.history.goBack();

    render() {
        const { post, sendPostVote, deletePost } = this.props;

        return (
            post && post.id
                ? <PostDetails
                    post={post}
                    onPageBack={this.onPageBack}
                    onPostVote={sendPostVote}
                    onPostDelete={deletePost} />
                : <Page404 />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    hionBackstory: state.history,
    postID: ownProps.match.params.post_id,
    post: getPostByCategoryAndPostID(state, ownProps) || {},
    comments: getSortComments(state, ownProps) || []
});

const mapDispatchToProps = (dispatch) => ({
    loadPost: (id) => dispatch(findOnePostRequest(id)),
    sendPostVote: (id, option) => dispatch(updateVotePostRequest(id, option)),
    deletePost: (id) => dispatch(deletePostRequest(id)),
    loadCommentByPost: (id) => dispatch(findAllCommentByParentIDRequest(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostScreen));