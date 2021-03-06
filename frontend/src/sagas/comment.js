import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import {
    findAllCommentSuccess,
    findAllCommentFailure,
    updateCommentSuccess,
    updateCommentFailure,
    insertCommentSuccess,
    insertCommentFailure
} from "../actions/comment";
import { findOnePostRequest } from "../actions/post";

function* findAllCommentByParentID({ id }) {
    try {
        const res = yield axios.get(`/posts/${id}/comments`);
        yield put(findAllCommentSuccess(res.data));
    } catch (error) {
        yield put(findAllCommentFailure(error));
    }
}

function* updateVoteComment({ id, option }) {
    try {
        const res = yield axios.post(`/comments/${id}`, { option });
        yield put(updateCommentSuccess(res.data));
    } catch (error) {
        yield put(updateCommentFailure(error));
    }
}

function* deleteComment({ id }) {
    try {
        const res = yield axios.delete(`/comments/${id}`);
        yield put(updateCommentSuccess(res.data));
        yield put(findOnePostRequest(res.data.parentId));
    } catch (error) {
        yield put(updateCommentFailure(error));
    }
}

function* insertComment({ comment: { id, parentId, author, body, timestamp } }) {
    try {
        const res = yield axios.post("/comments", { id, parentId, author, body, timestamp });
        yield put(insertCommentSuccess(res.data));
        yield put(findOnePostRequest(res.data.parentId));
    } catch (error) {
        yield put(insertCommentFailure(error));
    }
}

function* updateComment({ comment: { id, body, timestamp } }) {
    try {
        const res = yield axios.put(`/comments/${id}`, { body, timestamp });
        yield put(updateCommentSuccess(res.data));
        yield put(findOnePostRequest(res.data.parentId));
    } catch (error) {
        yield put(updateCommentFailure(error));
    }
}

function* watchFindAllCommentByParentID() {
    yield takeLatest(types.COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST, findAllCommentByParentID);
}

function* watchUpdateVoteComment() {
    yield takeLatest(types.COMMENT_UPDATE_VOTE_REQUEST, updateVoteComment);
}

function* watchDeleteComment() {
    yield takeLatest(types.COMMENT_DELETE_REQUEST, deleteComment);
}

function* watchInsertComment() {
    yield takeLatest(types.COMMENT_INSERT_REQUEST, insertComment);
}

function* watchUpdateComment() {
    yield takeLatest(types.COMMENT_UPDATE_REQUEST, updateComment);
}

export const commentSagas = [
    fork(watchFindAllCommentByParentID),
    fork(watchUpdateVoteComment),
    fork(watchInsertComment),
    fork(watchUpdateComment),
    fork(watchDeleteComment)
];
