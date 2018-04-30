import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_FAILURE
} from "./../actions/types";

const initialState = {
    data: [],
    isLoading: false
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false
            };
        case LOAD_CATEGORIES_FAILURE: 
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};

export default category;