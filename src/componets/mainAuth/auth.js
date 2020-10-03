import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import firebase from '../../firebase/firebase';

const Auth = (component) => {
    class Auth extends React.Component {
        componentDidMount = async() => {
            let useStatus = {};
            await firebase.getUserState().then(user => {
                if (user) {
                    useStatus = user;
                }
            });

            if ((Object.keys(this.props.loggedIn).length === 0) && (Object.keys(this.props.signIn).length === 0) && Object.keys(useStatus).length === 0) {
                
            }
        }

        render() {
            return(
                <Component {...this.props} />
            );
        };
    }

function mapStateToProps(state) {
    return{
        loggedIn: state.login.user,
        signIn: state.signIn.user
    }
}

return connect(mapStateToProps, "")(withRouter(Auth));
}

export default Auth;