import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Segment } from 'semantic-ui-react';

import { loadPostsRequest } from './../actions/post';
import { TITLE_ALL_POSTS } from './../utils/constants';

import PostList from './../components/PostList';
import TitleHeader from './../components/TitleHeader';

class HomeScreen extends Component {

    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        const { data, isFetching } = this.props.post;

        return (
            <Segment.Group>
                <TitleHeader title={TITLE_ALL_POSTS} />
                <Segment attached loading={isFetching}>
                    <PostList data={data} />
                </Segment>
            </Segment.Group>
        );
    }
}

const mapStateToProps = ({ post }) => ({ post });

const mapDispatchToProps = (dispatch) => ({ 
    loadPosts: () => dispatch(loadPostsRequest()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
