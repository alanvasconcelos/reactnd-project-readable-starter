import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import { loadCategoriesSuccess, loadCategoriesFailure } from "./../actions/category";

function* loadCategories() {
    try {
        const res = yield axios.get("/categories");
        yield put(loadCategoriesSuccess(res.data.categories));
    } catch (error) {
        yield put(loadCategoriesFailure(error));
    }
}

function* watchLoadCategories() {
    yield takeLatest(types.LOAD_CATEGORIES_REQUEST, loadCategories)
}

export const categorySagas = [
    fork(watchLoadCategories)
];