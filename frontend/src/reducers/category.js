import { CATEGORY_FIND_ALL_REQUEST, CATEGORY_FIND_ALL_SUCCESS, CATEGORY_FIND_ALL_FAILURE } from "./../actions/types";

const initialState = {
    categories: [],
    isLoading: false
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_FIND_ALL_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case CATEGORY_FIND_ALL_SUCCESS:
            return {
                ...state,
                categories: action.payload.data,
                isLoading: false
            };
        case CATEGORY_FIND_ALL_FAILURE: 
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
};

export default category;