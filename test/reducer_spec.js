/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import reducer from '../src/reducer.js';
import * as types from '../src/actionTypes.js';

/*
    setup
*/

const initialState = {
    user: '',
    pass: '',
    loggedIn: false,
    requestingLogin: false,
    loginError: '',
    authCode: ''
};

/*
    tests
*/

describe("[reducer]", () => {
    
    it('should return the initial state', () => {
        const nextState = reducer(undefined, {});
        expect(nextState).toEqual(initialState);
    });
    
    describe('login', () => {
        
        it('should handle LOGIN_REQUEST', () => {
            const action = {
                type: types.LOGIN_REQUEST
            };
            const state = {
                ...initialState
            };
            const expectedState = {
                ...initialState,
                requestingLogin: true
            };
            const nextState = reducer(state, action);
            expect(nextState).toEqual(expectedState);
        });
        
        it('should handle LOGIN_FAILURE', () => {
            const errorMessage = 'Whatever error message';
            const action = {
                type: types.LOGIN_FAILURE,
                errorMessage
            };
            const state = {
                ...initialState,
                requestingLogin: true
            };
            const expectedState = {
                ...initialState,
                loggedIn: false,
                requestingLogin: false,
                loginError: errorMessage
            };
            const nextState = reducer(state, action);
            expect(nextState).toEqual(expectedState);
        });

        it('should handle LOGIN_SUCCESS', () => {
            const authCode = 'whatever_auth_code';
            const action = {
                type: types.LOGIN_SUCCESS,
                authCode
            };
            const state = {
                ...initialState,
                requestingLogin: true
            };
            const expectedState = {
                ...initialState,
                loggedIn: true,
                requestingLogin: false,
                loginError: '',
                authCode
            };
            const nextState = reducer(state, action);
            expect(nextState).toEqual(expectedState);
        });
        
    });
    
});
