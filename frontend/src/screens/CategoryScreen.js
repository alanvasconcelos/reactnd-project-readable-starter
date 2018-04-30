import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { loadPostsByCategoryRequest, sendPostVoteRequest } from "./../actions/post";
import { sort } from "./../actions/sort";
import { getSortPosts } from './../selectors/post';

import PostList from "./../components/PostList";

class CategoryScreen extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.category);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.category !== nextProps.category) {
            this.props.loadPosts(nextProps.category);
        }
    }

    render() {
        const { posts, loading, sortMode, sendPostVote, sortPosts } = this.props;

        return (
            <PostList
                title={this.props.category}
                posts={posts}
                loading={loading}
                sort={sortMode}
                onPostVote={sendPostVote}
                onSort={sortPosts} />
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
    loadPosts: (category) => dispatch(loadPostsByCategoryRequest(category)),
    sendPostVote: (id, option) => dispatch(sendPostVoteRequest(id, option)),
    sortPosts: (option) => dispatch(sort(option))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryScreen));
