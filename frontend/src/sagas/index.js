import { takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import * as types from './../actions/types';

import { loadCategories } from './categorySagas';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common.Authorization = 'whatever-you-want';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function *index() {
    yield [
        takeLatest(types.LOAD_CATEGORIES_REQUEST, loadCategories, axios)
    ]
}

export default index;