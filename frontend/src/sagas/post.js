import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import {
    findAllPostSuccess,
    findAllPostFailure,
    findOnePostSuccess,
    findOnePostFailure,
    updatePostSuccess,
    updatePostFailure
} from "./../actions/post";

function* findAllPost({ category }) {
    try {
        const res = yield axios.get((category) ? `/${category}/posts` : "/posts");
        yield put(findAllPostSuccess(res.data));
    } catch (error) {
        yield put(findAllPostFailure(error));
    }
}

function* findOnePost({ id }) {
    try {
        const res = yield axios.get(`/posts/${id}`);
        yield put(findOnePostSuccess(res.data));
    } catch (error) {
        yield put(findOnePostFailure(error));
    }
}

function* updateVotePost({ id, option }) {
    try {
        const res = yield axios.post(`/posts/${id}`, { option });
        yield put(updatePostSuccess(res.data));
    } catch (error) {
        yield put(updatePostFailure(error));
    }
}

function* deletePost({ id }) {
    try {
        const res = yield axios.delete(`/posts/${id}`);
        yield put(updatePostSuccess(res.data));
    } catch (error) {
        yield put(updatePostFailure(error));
    }
}

function* watchFindAllPost() {
    yield takeLatest(types.POST_FIND_ALL_REQUEST, findAllPost);
}

function* watchFindOnePost() {
    yield takeLatest(types.POST_FIND_ONE_REQUEST, findOnePost);
}

function* watchUpdateVotePost() {
    yield takeLatest(types.POST_UPDATE_VOTE_REQUEST, updateVotePost);
}

function* watchDeletePost() {
    yield takeLatest(types.POST_DELETE_REQUEST, deletePost);
}

export const postSagas = [
    fork(watchFindAllPost),
    fork(watchFindOnePost),
    fork(watchUpdateVotePost),
    fork(watchDeletePost),
];
