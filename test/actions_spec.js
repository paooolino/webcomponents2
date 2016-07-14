/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import * as types from '../src/actionTypes';
import * as creators from '../src/actionCreators';

/*
    tests
*/

describe("Actions", () => {
    
    /*
        LOGIN is an asyncronous action. 
        It is composed by three synchronous actions (REQUEST, FAILURE, SUCCESS)
        and an asynchronous creator.
    */
    describe("LOGIN", () => {
        
        describe("types", () => {
            
            it("defines LOGIN action type(s)", () => {
                expect(types.LOGIN_REQUEST).toBe('LOGIN_REQUEST');
                expect(types.LOGIN_FAILURE).toBe('LOGIN_FAILURE');
                expect(types.LOGIN_SUCCESS).toBe('LOGIN_SUCCESS');
            });
            
        });
        
        describe("creators", () => {
            
            it("creates the LOGIN_REQUEST action", () => {
                const expectedAction = creators.loginRequest();
                expect(expectedAction).toEqual({
                    type: 'LOGIN_REQUEST'
                });
            });
            
            it("creates the LOGIN_FAILURE action", () => {
                const errorMessage = "Whatever error message";
                const expectedAction = creators.loginFailure(errorMessage);
                expect(expectedAction).toEqual({
                    type: 'LOGIN_FAILURE',
                    errorMessage
                });
            });

            it("creates the LOGIN_SUCCESS action", () => {
                const serverData = {
                    authCode: 'whatever_auth_code'
                };
                const expectedAction = creators.loginSuccess(serverData);
                expect(expectedAction).toEqual({
                    type: 'LOGIN_SUCCESS',
                    authCode: serverData.authCode
                });
            });
            
            it("creates the async LOGIN action", () => {
                const expectedAction = creators.login('admin', 'admin123');
                expect(expectedAction).toBeA('function');
            });
            
        });
        
    });
    
});
