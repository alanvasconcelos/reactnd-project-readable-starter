import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import PostForm from "./../components/PostForm";
import { findOnePostRequest } from "../actions/post";
import { getPostByCategoryAndPostID } from "../selectors/post";

class PostFormScreen extends Component {

    onPageBack = () => this.props.history.goBack();

    render() {
        const { category, categories } = this.props;

        return (
            <PostForm
                post={{}}
                category={category}
                categories={categories}
                onCancel={this.onPageBack} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    categories: state.category.categories,
    category: ownProps.match.params.category
});

export default withRouter(connect(mapStateToProps)(PostFormScreen));;
