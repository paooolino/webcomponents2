/*
    external imports
*/

import React, { Component, PropTypes } from 'react';

/*
    component definition
*/

class AppComponent extends Component {
    
    componentDidMount() {
    }
    
    render() {
        return(
            <div>
                <div className="formRow">
                    <div className="formLabel">Username</div>
                    <div className="formField">
                        <input className="username" 
                            onChange={this.props.handleChangeUsername}
                            value={this.props.user} 
                        />
                    </div>
                </div>
                <div className="formRow">
                    <div className="formLabel">Password</div>
                    <div className="formField">
                        <input className="password" type="password" 
                            onChange={this.props.handleChangePassword}
                            value={this.props.pass}
                        />
                    </div>
                </div>
                <div className="formRow">
                    <button 
                        className="login_button"
                        onClick={() => {
                            this.props.handleLogin(
                                this.props.user,
                                this.props.pass
                            );
                        }}
                    >login</button>
                </div>
            </div>
        )
    }
}

/*
    proptypes
*/

AppComponent.propTypes = {
    user: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleChangeUsername: PropTypes.func.isRequired,
    handleChangePassword: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired
};

/*
    export
*/

export default AppComponent;
