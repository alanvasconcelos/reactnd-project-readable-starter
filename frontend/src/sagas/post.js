import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import { loadPostsSuccess, updatePostSuccess } from "./../actions/post";

function* loadPosts() {
    const res = yield axios.get("/posts");
    yield put(loadPostsSuccess(res.data));
}

function* loadPostsByCategory({ category }) {
    const res = yield axios.get(`/${category}/posts`);
    yield put(loadPostsSuccess(res.data));
}

function* sendPostVote({ id, option }) {
    const res = yield axios.post(`/posts/${id}`, { option });
    yield put(updatePostSuccess(res.data));
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
