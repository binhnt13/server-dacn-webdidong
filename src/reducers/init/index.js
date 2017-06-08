/**
 * Created by slinker on 12/28/16.
 */
// Constants defined
import * as actionTypes from '../../constants/actionTypes';
import {removeLocalStorage} from '../../actions';

const initialState = {
    isConnected: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case actionTypes.IS_CONNECTED:
            return {
                ...state,
                isConnected: true
            };

        case actionTypes.IS_DISCONNECT:
            return {
                ...state,
                isConnected: false
            };
        
    }
    return state;
}

