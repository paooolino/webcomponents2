/*
    internal imports
*/

import * as types from './actionTypes';

/*
    setup
*/

export const initialState = {
    user: '',
    pass: '',
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
            
        case types.CHANGE_USER:
            return {
                ...state,
                user: action.value
            }
            
        case types.CHANGE_PASS:
            return {
                ...state,
                pass: action.value
            }
            
        default:
            return state;
    }
}
