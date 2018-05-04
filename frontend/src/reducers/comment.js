import {
    COMMENT_FIND_ALL_BY_PARENT_ID_REQUEST,
    COMMENT_FIND_ALL_SUCCESS,
    COMMENT_FIND_ALL_FAILURE,
    COMMENT_UPDATE_FAILURE,
    COMMENT_UPDATE_SUCCESS,
    COMMENT_UPDATE_VOTE_REQUEST,
    COMMENT_DELETE_REQUEST
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
        case COMMENT_UPDATE_VOTE_REQUEST:
            return state;
        case COMMENT_UPDATE_SUCCESS:
            return {
                ...state,
                comments: state.comments.map(p => p.id === action.payload.data.id ? action.payload.data : p),
                isLoading: false
            };
        case COMMENT_UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case COMMENT_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default comment;