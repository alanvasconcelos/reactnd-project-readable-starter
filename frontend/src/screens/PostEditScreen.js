import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { updatePostRequest, findOnePostRequest } from "./../actions/post";
import { getPostByCategoryAndPostID } from "./../selectors/post";
import PostForm from "./../components/PostForm";
import NotFound from "./NotFound";

class PostEditScreen extends Component {

    componentDidMount() {
        const id = this.props.match.params.post_id;

        if (id) {
            this.props.loadPost(id);
        }
    }

    onPageBack = () => this.props.history.goBack();

    render() {
        const { post, categories, sendPostUpdate } = this.props;

        return (
            post && post.id
                ? <PostForm
                    post={post}
                    categories={categories}
                    onSubmit={sendPostUpdate}
                    onCancel={this.onPageBack}
                    isEditing={true} />
                : <NotFound />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPostByCategoryAndPostID(state, ownProps) || {},
    categories: state.category.categories,
    category: ownProps.match.params.category
});

const mapDispatchToProps = (dispatch) => ({
    loadPost: (id) => dispatch(findOnePostRequest(id)),
    sendPostUpdate: (post) => dispatch(updatePostRequest(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEditScreen));;
