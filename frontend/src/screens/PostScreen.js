import React, { Component } from "react";
import { connect } from "react-redux";

import { findOnePostRequest } from './../actions/post';
import PostDetails from "../components/PostDetails";
import { getPostByCategoryAndPostID } from "../selectors/post";
import Page404 from "./Page404";

class PostScreen extends Component {

    componentDidMount() {
        this.props.loadPost(this.props.postID);
    }

    render() {
        const { post } = this.props;
        
        return (
            post && post.id
                ? <PostDetails post={this.props.post} />
                : <Page404 />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    postID: ownProps.match.params.post_id,
    post: getPostByCategoryAndPostID(state, ownProps) || {}
});

const mapDispatchToProps = (dispatch) => ({
    loadPost: (id) => dispatch(findOnePostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);