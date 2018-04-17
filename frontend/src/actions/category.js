import * as types from './types';

export const loadCategoryRequest = () => ({
  type: types.LOAD_CATEGORY_REQUEST
});

export const loadCategorySuccess = (data) => ({
  type: types.LOAD_CATEGORY_SUCCESS,
  data
});