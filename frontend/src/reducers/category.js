import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS
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
        default:
            return state;
    }
};

export default category;