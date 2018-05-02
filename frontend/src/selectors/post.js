import { createSelector } from "reselect";

import { HIGH_SCORE, LOW_SCORE, NEW_TIME, OLD_TIME } from "./../utils/constants";

const getPosts = state => state.post.posts;
const getSort = state => state.sort;
const getPostID = (_, ownProps) => ownProps.match.params.post_id;
const getCategory = (_, ownProps) => ownProps.match.params.category;

const getActivePosts = createSelector([getPosts], (posts) => (
    posts.filter(p => !p.deleted)
));

export const getSortPosts = createSelector([getActivePosts, getSort], (posts, sort) => {
    switch (sort) {
        case OLD_TIME: return posts.slice().sort((x, y) => x.timestamp > y.timestamp);
        case NEW_TIME: return posts.slice().sort((x, y) => x.timestamp < y.timestamp);
        case LOW_SCORE: return posts.slice().sort((x, y) => x.voteScore > y.voteScore);
        case HIGH_SCORE: 
        default: return posts.slice().sort((x, y) => x.voteScore < y.voteScore); 
    }
});

export const getPostByCategoryAndPostID = createSelector([getActivePosts, getCategory, getPostID], (posts, category, postID) => (
    posts.find(p => p.id === postID && p.category === category)
));