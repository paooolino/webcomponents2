/*
    external imports
*/

import expect from 'expect';

/*
    internal imports
*/

import * as types from '../src/actionTypes';

/*
    tests
*/

describe("ActionTypes", () => {
    
    describe("#LOGIN", () => {
        it("defines LOGIN sync types", () => {
            expect(types.LOGIN_REQUEST).toBe("LOGIN_REQUEST");
            expect(types.LOGIN_FAILURE).toBe("LOGIN_FAILURE");
            expect(types.LOGIN_SUCCESS).toBe("LOGIN_SUCCESS");
        });
    });
    
});
