import {
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE 
} from "./types";

export const loadCategoriesRequest = () => ({
  type: LOAD_CATEGORIES_REQUEST
});

export const loadCategoriesSuccess = (data) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  data
});

export const loadCategoriesFailure = (error) => ({
  type: LOAD_CATEGORIES_FAILURE,
  error
});