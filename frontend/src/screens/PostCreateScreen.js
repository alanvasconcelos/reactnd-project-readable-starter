import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import PostForm from "./../components/PostForm";
import { insertPostRequest } from "../actions/post";

class PostFormScreen extends Component {

    onPageBack = () => this.props.history.goBack();

    render() {
        const { category, categories, sendPostInsert } = this.props;

        return (
            <PostForm
                post={{ category: category }}
                categories={categories}
                onSubmit={sendPostInsert}
                onCancel={this.onPageBack} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.category.categories,
    category: ownProps.match.params.category
});

const mapDispatchToProps = (dispatch) => ({
    sendPostInsert: (post) => dispatch(insertPostRequest(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostFormScreen));;
