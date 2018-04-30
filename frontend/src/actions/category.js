import {
  CATEGORY_FIND_ALL_REQUEST,
  CATEGORY_FIND_ALL_SUCCESS,
  CATEGORY_FIND_ALL_FAILURE
} from "./types";

export const findAllCategoryRequest = () => ({
  type: CATEGORY_FIND_ALL_REQUEST
});

export const findAllCategorySuccess = (data) => ({
  type: CATEGORY_FIND_ALL_SUCCESS,
  payload: { data }
});

export const findAllCategoryFailure = (error) => ({
  type: CATEGORY_FIND_ALL_FAILURE,
  payload: new Error()
});