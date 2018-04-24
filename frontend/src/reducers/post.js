import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_BY_CATEGORY_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE
} from './../actions/types';

const initialState = {
    data: [],
    category: null,
    isFetching: false,
    error: ''
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST: {
            return {
                ...state,
                category: null,
                isFetching: true
            }
        }
        case LOAD_POSTS_BY_CATEGORY_REQUEST: {
            return {
                ...state,
                category: action.category,
                isFetching: true
            }
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        }
        case LOAD_POSTS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export default post;