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
  POST_DELETE_REQUEST
} from "./types";

export const findAllPostRequest = () => ({
  type: POST_FIND_ALL_REQUEST
});

export const findAllPostByCategoryRequest = (category) => ({
  type: POST_FIND_ALL_BY_CATEGORY_REQUEST,
  category
})

export const findAllPostSuccess = (data) => ({
  type: POST_FIND_ALL_SUCCESS,
  payload: { data }
});

export const findAllPostFailure = (error) => ({
  type: POST_FIND_ALL_FAILURE,
  payload: new Error()
});

export const findOnePostRequest = (id) => ({
  type: POST_FIND_ONE_REQUEST,
  id
});

export const findOnePostSuccess = (data) => ({
  type: POST_FIND_ONE_SUCCESS,
  payload: { data }
});

export const findOnePostFailure = (error) => ({
  type: POST_FIND_ONE_FAILURE,
  payload: new Error()
});

export const updatePostRequest = (post) => ({
  type: POST_UPDATE_REQUEST,
  post
});

export const updateVotePostRequest = (id, option) => ({
  type: POST_UPDATE_VOTE_REQUEST,
  id,
  option
});

export const updatePostSuccess = (data) => ({
  type: POST_UPDATE_SUCCESS,
  payload: { data }
});

export const updatePostFailure = (error) => ({
  type: POST_UPDATE_FAILURE,
  payload: new Error()
});

export const deletePostRequest = (id) => ({
  type: POST_DELETE_REQUEST,
  id
});