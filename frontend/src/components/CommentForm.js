import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import uuidv1 from "uuid/v1";

import { Segment, Button, Form, Header } from "semantic-ui-react";

class CommentForm extends Component {
    state = {
        id: this.props.comment.id || uuidv1(),
        parentId: this.props.comment.parentId || "",
        timestamp: +moment(),
        author: this.props.comment.author || "",
        body: this.props.comment.body || ""
    }

    static propTypes = {
        comment: PropTypes.object.isRequired,
        isEditing: PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    canBeSubmitted = () => (
        this.state.author.trim().length > 0 &&
        this.state.body.trim().length > 0
    );

    handleSubmit = (e) => {
        e.preventDefault();

        const {id, parentId, timestamp, author, body } = this.state;

        const comment = {
            id: id,
            parentId: parentId,
            timestamp: timestamp,
            author: author,
            body: body
        };

        this.props.onSubmit(comment);
        this.props.onCancel();
    }

    render() {
        const isSubmit = this.canBeSubmitted();
        const { isEditing, onCancel } = this.props;
        const { author, body } = this.state;

        return (
            <Segment>
                <Form size="small" onSubmit={this.handleSubmit}>
                    <Header as="h3" dividing>{isEditing ? "Edit" : "New"} Comment</Header>
                    <Form.Input label="Author:" disabled={isEditing} name="author" required fluid placeholder="Author..." value={author} onChange={this.handleChange} />
                    <Form.TextArea label="Comment:" name="body" required placeholder="Comment..." value={body} onChange={this.handleChange} />
                    <Button disabled={!isSubmit} color="blue" size="small">{isEditing ? "Edit" : "Add"}</Button>
                    <Button type="button" size="small" floated="right" onClick={onCancel}>Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default CommentForm;
