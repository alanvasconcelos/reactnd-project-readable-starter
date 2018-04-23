import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import category from './categoryReducer';

const reducer = combineReducers({
    category,
    router: routerReducer
});

export default reducer;