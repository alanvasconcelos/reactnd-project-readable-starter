import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import category from "./category";
import post from "./post";

const reducer = combineReducers({
    category,
    post,
    router: routerReducer
});

export default reducer;