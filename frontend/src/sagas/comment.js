import { put, fork, takeLatest } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import {
    findAllCommentSuccess,
    findAllCommentFailure
} from "../actions/comment";

function* findAllCommentByParentID({ id }) {
    try {
        const res = yield axios.get(`/posts/${id}/comments`);
        yield put(findAllCommentSuccess(res.data));
    } catch (error) {
        yield put(findAllCommentFailure(error));
    }
}

function* watchFindAllCommentByParentID() {
    yield takeLatest(types.COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST, findAllCommentByParentID);
}

export const commentSagas = [
    fork(watchFindAllCommentByParentID)
];
