import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_BY_CATEGORY_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    SEND_POST_VOTE_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILURE
} from './../actions/types';

const initialState = {
    data: [],
    isLoading: false,
    error: ''
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_POSTS_BY_CATEGORY_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_POSTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                isLoading: false
            }
        }
        case LOAD_POSTS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
        case SEND_POST_VOTE_REQUEST: return state;
        case UPDATE_POST_SUCCESS: {
            return {
                ...state,
                data: state.data.map(post => post.id === action.data.id ? action.data : post)
            }
        }
        case UPDATE_POST_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export default post;