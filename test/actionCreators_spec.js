/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import * as creators from '../src/actionCreators';

/*
    tests
*/

describe("ActionCreators", () => {
    
    describe("#LOGIN", () => {
        it("defines loginRequest action creator", () => {
            expect(creators.loginRequest).toBeA('function');
            const action = creators.loginRequest();
            expect(action).toEqual({
                type: 'LOGIN_REQUEST'
            });
        });
        
        it("defines loginFailure action creator", () => {
            expect(creators.loginFailure).toBeA('function');
            const errorMessage = 'Whatever error message';
            const action = creators.loginFailure(errorMessage);
            expect(action).toEqual({
                type: 'LOGIN_FAILURE',
                errorMessage
            });
        });
        
        it("defines loginSuccess action creator", () => {
            expect(creators.loginSuccess).toBeA('function');
            const authCode = 'whatever_auth_code';
            const action = creators.loginSuccess(authCode);
            expect(action).toEqual({
                type: 'LOGIN_SUCCESS',
                authCode
            });
        });
        
        it("defines login action creator", () => {
            expect(creators.login).toBeA('function');
            const action = creators.login('admin', 'admin123');
            expect(action).toBeA('function');
        });
        
    });
    
});
