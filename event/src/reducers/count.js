/**
 * Created by poiso on 26/05/2017.
 */
import { ADD_COUNT } from '../../../content/src/scripts/actions/types';
const initialState = { counter: 0 };

export default (state = initialState, action) => {;
    switch (action.type){
        case ADD_COUNT:
           // return state + (action.payload || 1);
            return Object.assign({}, state, {
               counter: state.counter + 1
            });
            // return {counter: 'testtset'};

        default:
            return state;
    }
};


