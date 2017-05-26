/**
 * Created by poiso on 26/05/2017.
 */
import { ADD_COUNT } from '../../../content/src/scripts/actions/types';
const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_COUNT:
            return state + (action.payload || 1);
        default:
            return state + 1;
    }
}


