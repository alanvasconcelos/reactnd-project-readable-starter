import {
    POST_FIND_ALL_REQUEST,
    POST_FIND_ALL_SUCCESS,
    POST_FIND_ALL_FAILURE,
    POST_FIND_ONE_REQUEST,
    POST_FIND_ONE_SUCCESS,
    POST_FIND_ALL_BY_CATEGORY_REQUEST,
    POST_FIND_ONE_FAILURE,
    POST_UPDATE_REQUEST,
    POST_UPDATE_VOTE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAILURE,
    POST_DELETE_REQUEST,
    POST_INSERT_REQUEST,
    POST_INSERT_SUCCESS,
    POST_INSERT_FAILURE
} from "./../actions/types";

const initialState = {
    posts: [],
    isLoading: false
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case POST_FIND_ALL_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_FIND_ALL_BY_CATEGORY_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_FIND_ALL_SUCCESS:
            return {
                ...state,
                posts: action.payload.data,
                isLoading: false
            };
        case POST_FIND_ALL_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case POST_FIND_ONE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_FIND_ONE_SUCCESS: {
            return {
                ...state,
                posts: action.payload.data.id ? [action.payload.data] : [],
                isLoading: false
            };
        }
        case POST_FIND_ONE_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case POST_INSERT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_INSERT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, action.payload.data]
            };
        case POST_INSERT_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case POST_UPDATE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case POST_UPDATE_VOTE_REQUEST:
            return state;
        case POST_UPDATE_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.payload.data.id ? action.payload.data : p),
                isLoading: false
            };
        case POST_UPDATE_FAILURE:
            return {
                ...state,
                isLoading: false
            };
        case POST_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default post;