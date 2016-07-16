/*
    internal imports
*/

import { createAsyncAction } from './utils';
import * as types from './actionTypes';

export const loginRequest = () => {
    return { type: types.LOGIN_REQUEST }
};

export const loginFailure = (errorMessage) => {
    return {
        type: types.LOGIN_FAILURE,
        errorMessage
    }
};

export const loginSuccess = (authCode) => {
    return {
        type: types.LOGIN_SUCCESS,
        authCode
    }
};

export const login = (user, pass) => {
    return createAsyncAction(
        "login", 
        {user, pass},
        loginRequest, loginFailure, loginSuccess
    );
};

export const changePass = (value) => {
    return {
        type: types.CHANGE_PASS,
        value
    }
};

export const changeUser = (value) => {
    return {
        type: types.CHANGE_USER,
        value
    }
};
