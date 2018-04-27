import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_SUCCESS 
  } from "./types";
  
  export const loadCategoriesRequest = () => ({
    type: LOAD_CATEGORIES_REQUEST
  });
  
  export const loadCategoriesSuccess = (data) => ({
    type: LOAD_CATEGORIES_SUCCESS,
    data
  });