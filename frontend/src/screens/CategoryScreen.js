import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loadPostsByCategoryRequest, sendPostVoteRequest } from "./../actions/post";

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
        const { data, isLoading } = this.props.post;
        
        return (
            <PostList 
                title={this.props.category} 
                data={data} 
                loading ={isLoading}
                onPostVote={this.props.sendPostVote} />
        )
    }
}

const mapStateToProps = ({ post }, { match }) => ({ 
    post, 
    category: match.params.category 
});

const mapDispatchToProps = (dispatch) => ({ 
    loadPosts: (category) => dispatch(loadPostsByCategoryRequest(category)),
    sendPostVote: (id, option) => dispatch(sendPostVoteRequest(id, option)) 
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryScreen));
