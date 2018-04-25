import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Segment } from 'semantic-ui-react';

import { loadPostsByCategoryRequest, sendPostVoteRequest } from './../actions/post';

import PostList from './../components/PostList';
import TitleHeader from './../components/TitleHeader';


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
        const category = this.props.category;

        return (
            <Segment.Group>
                <TitleHeader title={category} />
                <Segment attached loading={isLoading}>
                    <PostList data={data} onPostVote={this.props.sendPostVote} />
                </Segment>
            </Segment.Group>
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
