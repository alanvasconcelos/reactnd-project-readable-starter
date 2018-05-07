import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import uuidv1 from "uuid/v1";
import capitalize from "capitalize";

import { Segment, Button, Form, Header, Select } from "semantic-ui-react";

class PostForm extends Component {
    state = {
        id: this.props.post.id || uuidv1(),
        timestamp: this.props.post.timestamp || +moment(),
        title: this.props.post.title || "",
        body: this.props.post.body || "",
        author: this.props.post.author || "",
        category: this.props.post.category || "",
    }

    static propTypes = {
        post: PropTypes.object.isRequired,
        categories: PropTypes.array.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    onCategories = () => {
        let categories = [];

        if (this.props.categories) {
            this.props.categories.map(c =>
                categories.push({
                    "key": c.path,
                    "text": capitalize.words(c.name),
                    "value": c.path
                }));
        }

        return categories;
    }

    canBeSubmitted = () => (
        this.state.title.trim().length > 0 &&
        this.state.author.trim().length > 0 &&
        this.state.category.trim().length > 0 &&
        this.state.body.trim().length > 0
    );

    handleSubmit = (e) => {
        e.preventDefault();

        const { id, title, timestamp, author, body, category } = this.state;

        const post = {
            id: id,
            title: title,
            timestamp: timestamp,
            author: author,
            body: body,
            category: category
        };

        this.props.onSubmit(post);
        this.props.onCancel();
    }

    render() {
        const isSubmit = this.canBeSubmitted();
        const { isEditing, onCancel } = this.props;
        const { title, category, author, body } = this.state;

        return (
            <Segment>
                <Form size="small" onSubmit={this.handleSubmit}>
                    <Header as="h3" dividing>
                        {isEditing ? "Edit " : "New "}Post
                    </Header>
                    <Form.Input label="Title:" name="title" required fluid placeholder="Title..." value={title} onChange={this.handleChange} />
                    <Form.Input label="Author:" readOnly={isEditing} name="author" required fluid placeholder="Author..." value={author} onChange={this.handleChange} />
                    <Form.Field label="Category:" control={Select} name="category" options={this.onCategories()} placeholder="Category..." value={category} onChange={this.handleChange} />
                    <Form.TextArea label="Post:" name="body" required placeholder="Post..." value={body} onChange={this.handleChange} />
                    <Button disabled={!isSubmit} primary size="small">{isEditing ? "Edit" : "Add"}</Button>
                    <Button type="button" size="small" floated="right" onClick={onCancel}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default PostForm;
