import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS
} from './../actions/types';

const initialState = {
    data: [],
    isFetching: false,
    error: ''
};

const categoryReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default categoryReducer;