import React, { Component } from "react";
import { connect } from "react-redux";

import { loadPostsRequest, sendPostVoteRequest } from "./../actions/post";

import PostList from "./../components/PostList";

class HomeScreen extends Component {

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { data, isLoading } = this.props.post;

        return (
            <PostList 
                title="All Post's" 
                data={data} 
                loading ={isLoading}
                onPostVote={this.props.sendPostVote} />
        );
    }
}

const mapStateToProps = ({ post }) => ({ post });

const mapDispatchToProps = (dispatch) => ({ 
    loadPosts: () => dispatch(loadPostsRequest()),
    sendPostVote: (id, option) => dispatch(sendPostVoteRequest(id, option)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
