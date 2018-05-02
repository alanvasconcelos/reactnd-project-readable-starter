import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import category from "./category";
import post from "./post";
import sort from "./sort"
import comment from "./comment";

const reducer = combineReducers({
    category,
    post,
    sort,
    comment,
    router: routerReducer
});

export default reducer;