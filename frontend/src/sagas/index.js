import { all } from 'redux-saga/effects';

import axios from 'axios';

import { categorySagas } from './category';
import { postSagas } from './post';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common.Authorization = 'whatever-you-want';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function* index() {
    yield all([
        ...categorySagas,
        ...postSagas
    ])
}