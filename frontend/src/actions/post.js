import {
  LOAD_POST_REQUEST,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_BY_CATEGORY_REQUEST,
  SEND_POST_VOTE_REQUEST,
  UPDATE_POST_SUCCESS
} from "./types";

export const loadPostsRequest = () => ({
  type: LOAD_POSTS_REQUEST
});

export const loadPostsByCategoryRequest = (category) => ({
  type: LOAD_POSTS_BY_CATEGORY_REQUEST,
  category
});

export const loadPostsSuccess = (data) => ({
  type: LOAD_POSTS_SUCCESS,
  data
});

export const loadPostsFailure = (error) => ({
  type: LOAD_POSTS_FAILURE,
  error
})

export const loadPostRequest = (id) => ({
  type: LOAD_POST_REQUEST,
  id
});

export const sendPostVoteRequest = (id, option) => ({
  type: SEND_POST_VOTE_REQUEST,
  id, 
  option
});

export const updatePostSuccess = (data) => ({
  type: UPDATE_POST_SUCCESS,
  data
});