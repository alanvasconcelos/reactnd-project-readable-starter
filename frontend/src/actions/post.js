import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_BY_CATEGORY_REQUEST,
  LOAD_POSTS_FAILURE
} from './types';

export const loadPostsRequest = () => ({
  type: LOAD_POSTS_REQUEST
});

export const loadPostsByCategoryRequest = (category) => ({
  type: LOAD_POSTS_BY_CATEGORY_REQUEST,
  category
})

export const loadPostsSuccess = (data) => ({
  type: LOAD_POSTS_SUCCESS,
  data
});

export const loadPostsFailure = (error) => ({
  type: LOAD_POSTS_FAILURE,
  error
})