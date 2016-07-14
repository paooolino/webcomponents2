/*
    internal imports
*/

import * as types from './actionTypes';

/*
    setup
*/

export const initialState = {
    loggedIn: false,
    requestingLogin: false,
    loginError: ''
};

/*
    reducer definition
*/

export default (state=initialState, action) => {
    switch(action.type) {
        
        case types.LOGIN_REQUEST:
            return {
                ...state,
                loggedIn: false,
                requestingLogin: true,
                loginError: ''
            }
            
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                requestingLogin: false,
                loginError: action.errorMessage
            }
            
        default:
            return state;
    }
}
