import { SORT } from "./../actions/types";
import { HIGH_SCORE } from './../utils/constants';

const sort = (state = HIGH_SCORE, action) => {
    switch (action.type) {
        case SORT:
            return action.sort;
        default:
            return state;
    }
};

export default sort;