import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPostsRequest } from './../actions/post';

import PostList from './../components/PostList';

class HomeScreen extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.router.location.pathname);
    }

    render() {
        return (
            <PostList {...this.props.post} />
        )
    }
}

const mapStateToProps = ({ router, post }) => {
    return {
        post: post,
        router: router
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(loadPostsRequest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
