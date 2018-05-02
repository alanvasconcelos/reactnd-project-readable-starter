import {
    COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST,
    COMMENT_FIND_ALL_SUCCESS,
    COMMENT_FIND_ALL_FAILURE
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