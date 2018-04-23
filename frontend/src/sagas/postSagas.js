import { put } from 'redux-saga/effects';

import { loadPostsSuccess } from './../actions/postsActions';

export function *loadPosts(axios) {
    const res = yield axios.get('/categories');
    yield put(loadPostsSuccess(res));
}
