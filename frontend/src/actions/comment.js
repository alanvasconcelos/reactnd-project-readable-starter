import {
    COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST,
    COMMENT_FIND_ALL_SUCCESS,
    COMMENT_FIND_ALL_FAILURE,
    COMMENT_UPDATE_VOTE_REQUEST,
    COMMENT_UPDATE_SUCCESS,
    COMMENT_UPDATE_FAILURE,
    COMMENT_DELETE_REQUEST,
    COMMENT_UPDATE_REQUEST,
    COMMENT_INSERT_REQUEST,
    COMMENT_INSERT_SUCCESS,
    COMMENT_INSERT_FAILURE
} from "./types";

export const findAllCommentByParentIDRequest = (id) => ({
    type: COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST,
    id
});

export const findAllCommentSuccess = (data) => ({
    type: COMMENT_FIND_ALL_SUCCESS,
    payload: { data }
});

export const findAllCommentFailure = (error) => ({
    type: COMMENT_FIND_ALL_FAILURE,
    payload: new Error()
});

export const updateVoteCommentRequest = (id, option) => ({
    type: COMMENT_UPDATE_VOTE_REQUEST,
    id,
    option
});

export const insertCommentRequest = (comment) => ({
    type: COMMENT_INSERT_REQUEST,
    comment
});

export const insertCommentSuccess = (data) => ({
    type: COMMENT_INSERT_SUCCESS,
    payload: { data }
});

export const insertCommentFailure = (error) => ({
    type: COMMENT_INSERT_FAILURE,
    payload: new Error()
});

export const updateCommentRequest = (comment) => ({
    type: COMMENT_UPDATE_REQUEST,
    comment
});

export const updateCommentSuccess = (data) => ({
    type: COMMENT_UPDATE_SUCCESS,
    payload: { data }
});

export const updateCommentFailure = (error) => ({
    type: COMMENT_UPDATE_FAILURE,
    payload: new Error()
});

export const deleteCommentRequest = (id) => ({
    type: COMMENT_DELETE_REQUEST,
    id
});