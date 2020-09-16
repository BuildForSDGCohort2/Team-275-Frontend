import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    return valid;
};

class providerSignIn extends Component {

    login() {
        console.warn("state", this.state);
    }

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            login_password: null, 
            formErrors: {
                username: "",
                login_password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            console.log(
                `Email: ${this.state.username}
                 Password: ${this.state.login_password}
                `
            )
        } else {
            console.error('Form invalid');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'username':
                formErrors.username = emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case 'login_password': 
                formErrors.login_password = value.length < 6 ? "minimum 6 characters required!" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <section className="background-img-provider">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 offset-m1">
                            <div className="wrapper">
                                <div className="form-wrapper">
                                    <h1>Create your account</h1>

                                    <form onValidate onSubmit={this.handleSubmit}>
                                        <div className="username">
                                            <input
                                            type="text"
                                            className={formErrors.username.length > 0 ? "error" : null}
                                            placeholder="Enter your email or username*"
                                            name="username"
                                            noValidate
                                            onChange={this.handleChange}/>
                                            {formErrors.username.length > 0 && (<span className="errorMessage">{formErrors.username}</span>)}
                                        </div>

                                        <div className="login_password">
                                            <input
                                            type="password"
                                            placeholder="Enter your password*"
                                            name="login_password"
                                            noValidate
                                            onChange={this.handleChange}/>
                                            {formErrors.login_password.length > 0 && (<span className="errorMessage">{formErrors.login_password}</span>)}
                                        </div>

                                        <div className="createAccount">
                                            <button onClick={() => this.login()}>Login</button>
                                        <small>Don't have an account? <Link className="FormTitle__Link" to='/providerSignup'>Sign Up</Link></small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default providerSignIn