import { createSelector } from "reselect";

import { HIGH_SCORE, LOW_SCORE, NEW_TIME, OLD_TIME } from "./../utils/constants";
import { getPostByCategoryAndPostID } from "./post";

const getComments = state => state.comment.comments;
const getSort = state => state.sort;

const getActiveComments = createSelector([getPostByCategoryAndPostID, getComments], (post, comments) => (
    (post) ? comments.filter(c => !c.deleted) : []
));

export const getSortComments = createSelector([getActiveComments, getSort], (comments, sort) => {
    switch (sort) {
        case OLD_TIME: return comments.slice().sort((x, y) => x.timestamp > y.timestamp);
        case NEW_TIME: return comments.slice().sort((x, y) => x.timestamp < y.timestamp);
        case LOW_SCORE: return comments.slice().sort((x, y) => x.voteScore > y.voteScore);
        case HIGH_SCORE: 
        default: return comments.slice().sort((x, y) => x.voteScore < y.voteScore); 
    }
});