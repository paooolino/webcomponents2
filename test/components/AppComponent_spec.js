/*
    external imports
*/

import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

/*
    internal imports
*/

import AppComponent from '../../src/components/AppComponent';

/*
    setup
*/

const defaultProps = {
    user: '',
    pass: '',
    loginError: '',
    handleChangeUsername: function(){},
    handleChangePassword: function(){},
    handleLogin: function(){}
};

function setupShallow(props) {
    const actualProps = {...defaultProps, ...props};
    const output = shallow(<AppComponent {...actualProps} />);
    return output;
};

/*
    tests
*/

describe('[AppComponent]', () => {
    
    describe('rendering', () => {
        
        it('should render the input.username', () => {
            const output = setupShallow();
            expect(output.find('.username').length).toBe(1);
            expect(output.find('.username').is('input')).toBe(true);
        });
        
        it('should render the input.password', () => {
            const output = setupShallow();
            expect(output.find('.password').length).toBe(1);
            expect(output.find('.password').is('input')).toBe(true);
        });
        
        it('should render the button.login_button', () => {
            const output = setupShallow();
            expect(output.find('.login_button').length).toBe(1);
            expect(output.find('.login_button').is('button')).toBe(true);
        });
        
        it('should NOT render the div.loginError when loginError is not empty', () => {
            const loginError = '';
            const output = setupShallow({
                loginError
            });
            expect(output.find('.loginError').length).toBe(0);
        });
        
        it('should render the div.loginError when loginError is not empty', () => {
            const loginError = 'Whatever error message';
            const output = setupShallow({
                loginError
            });
            expect(output.find('.loginError').length).toBe(1);
            expect(output.find('.loginError').is('div')).toBe(true);
        });
        
    });

    describe('behaviour', () => {
        
        it('should call handleLogin when the button.login_button is clicked', () => {
            const handleLogin = expect.createSpy();
            const output = setupShallow({
                handleLogin,
                user: 'whatever_username',
                pass: 'whatever_password'
            });
            output.find('.login_button').simulate('click');
            expect(handleLogin.calls.length).toBe(1);   
            expect(handleLogin.calls[0].arguments).toEqual(['whatever_username', 'whatever_password']);   
        });

        it('should call handleChangeUsername when the input.username is changed', () => {
            const handleChangeUsername = expect.createSpy();
            const output = setupShallow({
                handleChangeUsername
            });
            output.find('.username').simulate(
                'change',
                { target: { value: "admin" }}
            );    
            expect(handleChangeUsername.calls.length).toBe(1);   
        });
        
        it('should call handleChangePassword when the input.password is changed', () => {
            const handleChangePassword = expect.createSpy();
            const output = setupShallow({
                handleChangePassword
            });
            output.find('.password').simulate(
                'change',
                { target: { value: "admin" }}
            );    
            expect(handleChangePassword.calls.length).toBe(1);   
        });
        
    });

    describe('proptypes', () => {
        
        it('should define the correct propTypes', () => {
            expect(Object.keys(AppComponent.propTypes)).toEqual(Object.keys(defaultProps));
        });
        
    }); 
    
});
