import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import category from './category';

const reducer = combineReducers({
    category,
    router: routerReducer
});

export default reducer;