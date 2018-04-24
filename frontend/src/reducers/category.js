import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_FAILURE
} from './../actions/types';

const initialState = {
    data: [],
    isFetching: false,
    error: ''
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case LOAD_CATEGORIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        }
        case LOAD_CATEGORIES_FAILURE: {
            return {
                ...state,
                data: [],
                isFetching: false,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export default category;