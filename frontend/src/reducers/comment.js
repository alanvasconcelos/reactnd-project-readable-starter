import {
    COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST,
    COMMENT_FIND_ALL_SUCCESS,
    COMMENT_FIND_ALL_FAILURE
} from "./../actions/types";

const initialState = {
    comments: [],
    isLoading: false
};

const comment = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case COMMENT_FIND_ALL_SUCCESS:
            return {
                ...state,
                comments: action.payload.data,
                isLoading: false
            };
        case COMMENT_FIND_ALL_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export default comment;