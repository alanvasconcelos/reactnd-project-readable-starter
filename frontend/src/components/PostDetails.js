import React from "react";
import PropTypes from "prop-types";
import { Segment, Header } from "semantic-ui-react";

const PostDetails = ({ post }) => {
    return (
        <Segment.Group>
            <Segment clearing attached="top">
                <Header as="h2" floated="left">
                    {post.title}
                    <Header.Subheader>
                        {`Posted by ${post.author || ""}`}
                    </Header.Subheader>
                </Header>
                <Header as="h6" floated="right">
                </Header>
            </Segment>
            <Segment attached>
            </Segment>
        </Segment.Group>
    );
}

PostDetails.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostDetails;
