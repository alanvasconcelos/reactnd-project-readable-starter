import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import { loadPostsSuccess, loadPostsFailure, updatePostSuccess, updatePostFailure } from "./../actions/post";

function* loadPosts() {
    try {
        const res = yield axios.get("/posts");
        yield put(loadPostsSuccess(res.data));
    } catch (error) {
        yield put(loadPostsFailure(error));
    }
}

function* loadPostsByCategory({ category }) {
    try {
        const res = yield axios.get(`/${category}/posts`);
        yield put(loadPostsSuccess(res.data));
    } catch (error) {
        yield put(loadPostsFailure(error));
    }
}

function* sendPostVote({ id, option }) {
    try {
        const res = yield axios.post(`/posts/${id}`, { option });
        yield put(updatePostSuccess(res.data));
    } catch (error) {
        yield put(updatePostFailure(error));
    }
}

function* watchLoadPosts() {
    yield takeLatest(types.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadPostsByCategory() {
    yield takeLatest(types.LOAD_POSTS_BY_CATEGORY_REQUEST, loadPostsByCategory);
}

function* watchSendPostVote() {
    yield takeLatest(types.SEND_POST_VOTE_REQUEST, sendPostVote);
}

export const postSagas = [
    fork(watchLoadPosts),
    fork(watchLoadPostsByCategory),
    fork(watchSendPostVote)
]
