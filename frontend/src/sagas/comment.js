import { put, fork, takeLatest, select } from "redux-saga/effects";

import axios from "axios";

import * as types from "./../actions/types";
import {
    findAllCommentSuccess,
    findAllCommentFailure
} from "../actions/comment";

import { getPostByCategoryAndPostID } from "../selectors/post";

function* findAllCommentByParentID() {
    try {
        const { post } = yield select();
        
        if (post && post.posts) {
            const res = yield axios.get(`/posts/${post.posts[0].id}/comments`);
            yield put(findAllCommentSuccess(res.data));
        }
    } catch (error) {
        yield put(findAllCommentFailure(error));
    }
}

function* watchFindAllCommentByParentID() {
    yield takeLatest(types.POST_FIND_ONE_SUCCESS, findAllCommentByParentID);
}

export const commentSagas = [
    fork(watchFindAllCommentByParentID)
];
