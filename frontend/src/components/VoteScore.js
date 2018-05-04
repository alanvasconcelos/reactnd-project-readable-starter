import React from "react";
import PropTypes from "prop-types";
import { Popup, Label, Button, Icon } from "semantic-ui-react";

const VoteScore = ({ voteScore, onVoteUp, onVoteDown }) => (
    <div>
        <Popup trigger={
            <Label size="medium" basic pointing="right">{voteScore}</Label>
        } content="Vote Score" />
        <Button.Group size="mini">
            <Popup trigger={
                <Button basic icon color="green" onClick={onVoteUp}>
                    <Icon flipped="horizontally" name="thumbs outline up" />
                </Button>
            } content="Vote Up" />
            <Popup trigger={
                <Button basic icon color="red" onClick={onVoteDown}>
                    <Icon name="thumbs outline down" />
                </Button>
            } content="Vote Down" />
        </Button.Group>
    </div>
)

VoteScore.propTypes = {
    voteScore: PropTypes.number.isRequired,
    onVoteUp: PropTypes.func.isRequired,
    onVoteDown: PropTypes.func.isRequired
}

export default VoteScore;
