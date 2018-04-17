import * as types from './../actions/types';

const initialState = {
    data: [],
    isFetching: false,
    error: ''
};

const category = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_REQUEST: {
            return Object.assign({}, state, {
                isFetching : true
            });
        }
        case types.LOAD_CATEGORY_SUCCESS: {
            return Object.assign({}, state, {
                data: action.data,
                isFetching: false
            });
        }
        default:
            return state;
    }
};

export default category;