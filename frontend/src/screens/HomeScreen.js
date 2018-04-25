import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment } from 'semantic-ui-react';

import { loadPostsRequest, sendPostVoteRequest } from './../actions/post';
import { TITLE_ALL_POSTS } from './../utils/constants';

import PostList from './../components/PostList';
import TitleHeader from './../components/TitleHeader';

class HomeScreen extends Component {

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { data, isLoading } = this.props.post;

        return (
            <Segment.Group>
                <TitleHeader title={TITLE_ALL_POSTS} />
                <Segment attached loading={isLoading}>
                    <PostList data={data} onPostVote={this.props.sendPostVote} />
                </Segment>
            </Segment.Group>
        );
    }
}

const mapStateToProps = ({ post }) => ({ post });

const mapDispatchToProps = (dispatch) => ({ 
    loadPosts: () => dispatch(loadPostsRequest()),
    sendPostVote: (id, option) => dispatch(sendPostVoteRequest(id, option)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
