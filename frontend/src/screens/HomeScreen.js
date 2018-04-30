import React, { Component } from "react";
import { connect } from "react-redux";

import { findAllPostRequest, updateVotePostRequest, deletePostRequest } from "./../actions/post";
import { sort } from "./../actions/sort";
import { getSortPosts } from './../selectors/post';

import PostList from "./../components/PostList";

class HomeScreen extends Component {
    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { posts, loading, sortMode, sendPostVote, sortPosts, deletePost } = this.props;

        return (
            <PostList
                title="All Post's"
                posts={posts}
                loading={loading}
                sort={sortMode}
                onPostVote={sendPostVote}
                onSort={sortPosts}
                onPostDelete={deletePost} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.post.isLoading,
    posts: getSortPosts(state, ownProps) || [],
    sortMode: state.sort
});

const mapDispatchToProps = (dispatch) => ({
    loadPosts: () => dispatch(findAllPostRequest()),
    sendPostVote: (id, option) => dispatch(updateVotePostRequest(id, option)),
    sortPosts: (option) => dispatch(sort(option)),
    deletePost: (id) => dispatch(deletePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
