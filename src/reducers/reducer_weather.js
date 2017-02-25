import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    
    switch (action.type){
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            // ES6 syntax to do same as above - state should not be mutated, so create new instance of array with the new city added
            return [ action.payload.data, ...state]; 
    }
    
    return state;
}