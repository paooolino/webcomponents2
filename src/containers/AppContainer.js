/*
    external imports
*/

import { connect } from 'react-redux';

/*
    internal imports
*/

import AppComponent from '../components/AppComponent';
import * as creators from '../actionCreators';

/*
    dispatch props
*/

export const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeUsername: () => {
            dispatch(creators.changePass(event.target.value));
        },
        handleChangePassword: () => {
            dispatch(creators.changeUser(event.target.value));
        },
        handleLogin: (user, pass) => {
            dispatch(creators.login(user, pass));
        }
    };
};

/*
    state props
*/

export const mapStateToProps = (state) => {
    return {
        user: state.user,
        pass: state.pass
    };
};

/*
    Container/Component connection
*/

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default AppContainer;
