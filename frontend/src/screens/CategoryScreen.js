import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadPostsByCategoryRequest } from './../actions/post';

import PostList from './../components/PostList';

class CategoryScreen extends Component {

    componentDidMount() {
        this.props.loadPosts(this.props.router.location.pathname);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.router.location.pathname !== nextProps.router.location.pathname) {
            this.props.loadPosts(nextProps.router.location.pathname);
        }
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
        loadPosts: (category) => dispatch(loadPostsByCategoryRequest(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
