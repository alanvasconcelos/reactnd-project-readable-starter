import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import capitalize from "capitalize";
import moment from "moment";

import { Menu, Segment, Grid, Feed, Button, GridRow } from "semantic-ui-react";
import ButtonAction from "./ButtonAction";
import VoteScore from "./VoteScore";

class CommentCard extends Component {
    state = { modalDeleteOpen: false }

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    onVoteComment = (id, option) => (e) => {
        e.preventDefault();
        // this.props.onPostVote(id, option);
    }

    handleModalDeleteOpen = () => this.setState({ modalDeleteOpen: true });

    handleModalDeleteConfirm = (id) => () => {
        this.setState({ modalDeleteOpen: false });
        //this.props.onPostDelete(id);
    }

    handlesModalDeleteCancel = () => this.setState({ modalDeleteOpen: false });

    render() {
        const { comment } = this.props;

        return (
            <Segment>
                <Grid verticalAlign='middle' columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Feed size="small">
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            Commented by {comment.author}
                                            <Feed.Date>{moment(comment.timestamp).format("MM/DD/YYYY HH:mm")}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text>
                                            {comment.body}
                                        </Feed.Extra>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Grid.Column>
                        <Grid.Column floated="right">
                            <VoteScore />
                            <Button.Group size="mini" basic>
                                <ButtonAction icon="edit" tooltip="Edit" />
                                <ButtonAction icon="trash" tooltip="Delete" />
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}

export default CommentCard;