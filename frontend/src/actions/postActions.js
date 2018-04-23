import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS
} from './types';

export const loadPostsRequest = () => ({
  type: LOAD_POSTS_REQUEST
});

export const loadPostsSuccess = (data) => ({
  type: LOAD_POSTS_SUCCESS,
  data
});