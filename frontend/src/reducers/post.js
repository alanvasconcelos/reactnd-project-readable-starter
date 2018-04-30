import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_BY_CATEGORY_REQUEST,
    LOAD_POSTS_SUCCESS,
    SEND_POST_VOTE_REQUEST,
    UPDATE_POST_SUCCESS,
    LOAD_POST_REQUEST,
    LOAD_POSTS_FAILURE
} from "./../actions/types";

const initialState = {
    posts: [],
    isLoading: false
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POST_REQUEST:
        case LOAD_POSTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_POSTS_BY_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.data,
                isLoading: false
            };
        case LOAD_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.map(p => p.id === action.data.id ? action.data : p)
            };
        case SEND_POST_VOTE_REQUEST:
        default:
            return state;
    }
};

export default post;