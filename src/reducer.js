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
    loginError: '',
    authCode: ''
};

/*
    reducer definition
*/

export default (state=initialState, action) => {
    switch(action.type) {
        
        case types.LOGIN_REQUEST:
            return {
                ...state,
                requestingLogin: true
            }
            
        case types.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                requestingLogin: false,
                loginError: action.errorMessage
            }
        
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                requestingLogin: false,
                authCode: action.authCode
            }
            
        default:
            return state;
    }
}
