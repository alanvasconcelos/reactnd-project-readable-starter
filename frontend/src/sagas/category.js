import { put } from 'redux-saga/effects';

import { loadCategorySuccess } from './../actions/category';

export function *loadCategory(axios) {
    const res = yield axios.get('/categories');
    yield put(loadCategorySuccess(res.data.categories));
}
