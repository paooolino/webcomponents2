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
    loggedIn: false,
    requestingLogin: false,
    loginError: ''
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
            const nextState = reducer({
                ...initialState,
                loginError: 'an old error'
            }, action);
            expect(nextState).toEqual({
                ...initialState,
                loggedIn: false,
                requestingLogin: true
            });
        });
        
        it('should handle LOGIN_FAILURE', () => {
            const action = {
                type: types.LOGIN_FAILURE,
                errorMessage: 'Whatever error message'
            };
            const nextState = reducer({
                ...initialState,
                requestingLogin:true
            }, action);
            expect(nextState).toEqual({
                ...initialState,
                loggedIn: false,
                requestingLogin: false,
                loginError: 'Whatever error message'
            });
        });

        it('should handle LOGIN_SUCCESS', () => {
        });
        
    });
    
});
