import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import { findAllCategorySuccess, findAllCategoryFailure } from "./../actions/category";

function* findAllCategory() {
    try {
        const res = yield axios.get("/categories");
        yield put(findAllCategorySuccess(res.data.categories));    
    } catch (error) {
        yield put(findAllCategoryFailure(error));
    }
}

function* watchFindAllCategory() {
    yield takeLatest(types.CATEGORY_FIND_ALL_REQUEST, findAllCategory)
}

export const categorySagas = [
    fork(watchFindAllCategory)
];