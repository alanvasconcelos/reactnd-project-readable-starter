import React, { Component } from "react";
import { connect } from "react-redux";

import { findAllPostRequest, updateVotePostRequest, deletePostRequest } from "./../actions/post";
import { sort } from "./../actions/sort";
import { getSortPosts } from './../selectors/post';

import PostList from "./../components/PostList";

class PostsScreen extends Component {
    componentDidMount() {
        this.props.loadPosts(this.props.category);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            this.props.loadPosts(nextProps.category);
        }
    }

    render() {
        const { category, posts, loading, sortMode, sendPostVote, sortPosts, deletePost } = this.props;

        return (
            <PostList
                title={category || "All Post's"}
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
    sortMode: state.sort,
    category: ownProps.match.params.category
});

const mapDispatchToProps = (dispatch) => ({
    loadPosts: (category) => dispatch(findAllPostRequest(category)),
    sendPostVote: (id, option) => dispatch(updateVotePostRequest(id, option)),
    sortPosts: (option) => dispatch(sort(option)),
    deletePost: (id) => dispatch(deletePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
