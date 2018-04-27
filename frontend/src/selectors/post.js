import { createSelector } from "reselect";

const getPosts = state => state.post.data;
const getSort = state => state.sort;

export const makeSortPosts = () => {
    return createSelector(
        [getPosts, getSort],
        (posts, sort) => {

        }
    );
};
