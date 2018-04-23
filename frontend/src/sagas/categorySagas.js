import { put } from 'redux-saga/effects';

import { loadCategoriesSuccess } from './../actions/categoryActions';

export function *loadCategories(axios) {
    const res = yield axios.get('/categories');
    yield put(loadCategoriesSuccess(res.data.categories));
}
