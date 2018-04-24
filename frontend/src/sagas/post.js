import { put, fork, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import * as types from './../actions/types';
import { loadPostsSuccess, loadPostsFailure } from './../actions/post';

function* loadPosts() {
    try {
        const res = yield axios.get('/posts');
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

function* watchLoadPosts() {
    yield takeLatest(types.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchLoadPostsByCategory() {
    yield takeLatest(types.LOAD_POSTS_BY_CATEGORY_REQUEST, loadPostsByCategory);
}

export const postSagas = [
    fork(watchLoadPosts),
    fork(watchLoadPostsByCategory)
]
