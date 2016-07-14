/*
    external imports
*/

import expect from 'expect';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

/*
    internal imports
*/

import * as creators from '../src/actionCreators';
import { ENDPOINT_HOST, ENDPOINT_PATH } from '../config';

/*
    setup
*/

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

/*
    tests
*/

describe("[actionCreators]", () => {
    
    describe('sync', () => {
        
        describe("login", () => {
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
        });
        
    });
    
    describe('async', () => {
        
        afterEach(() => {
            nock.cleanAll()
        })
        
        it("async LOGIN action passes the correct parameters to the server", () => {
            let passedData;
            nock(ENDPOINT_HOST).post(ENDPOINT_PATH)
                .reply(200, function(uri, requestBody){
                    passedData = requestBody;
                });
                
            const store = mockStore({});
            
            const user = 'admin';
            const pass = 'admin123';
            return store.dispatch(creators.login(user, pass))
                .then(() => {
                    expect(passedData.action).toBe('login');
                    expect(passedData.user).toBe(user);
                    expect(passedData.pass).toBe(pass);
                });
        });
        
    });
    
});
