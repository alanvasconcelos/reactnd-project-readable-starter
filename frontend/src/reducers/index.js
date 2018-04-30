import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import category from "./category";
import post from "./post";
import sort from './sort'

const reducer = combineReducers({
    category,
    post,
    sort,
    router: routerReducer
});

export default reducer;