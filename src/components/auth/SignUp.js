import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as firebase from 'firebase'
import fire from '../util/firebase';



const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    return valid;
};

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            phone: null,
            username: null,
            password: null, 
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                username: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {
            firebase.database().ref("Patients")
            .push({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                username: this.state.username,
                password: this.state.password
            });
        } else {
            console.error('Form invalid');
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = value.length < 3 ? "minimum 3 characters required!" : "";
                break;
            case 'lasttName':
                formErrors.lastName = value.length < 3 ? "minimum 3 characters required!" : "";
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case 'phone':
                formErrors.phone = value.length < 10 ? "minimum 10 characters required!" : "";
                break;
            case 'firstName':
                formErrors.username = value.length < 3 ? "minimum 3 characters required!" : "";
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
            <section className="background-img">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 offset-m1">
                            <div className="wrapper">
                                <div className="form-wrapper">
                                    <h1>Create your account</h1>

                                    <form onSubmit={this.handleSubmit}>
                                        <div className="firstName">
                                            <input
                                            type="text"
                                            className={formErrors.firstName.length > 0 ? "error" : null}
                                            placeholder="Enter your first name*"
                                            name="firstName"
                                            onChange={this.handleChange}/>
                                            {formErrors.firstName.length > 0 && (<span className="errorMessage">{formErrors.firstName}</span>)}
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            className={formErrors.lastName.length > 0 ? "error" : null}
                                            placeholder="Enter your last name*"
                                            name="lastName"
                                            onChange={this.handleChange}/>
                                            {formErrors.lastName.length > 0 && (<span className="errorMessage">{formErrors.lastName}</span>)}
                                        </div>

                                        <div className="email">
                                            <input
                                            type="email"
                                            className={formErrors.lastName.length > 0 ? "error" : null}
                                            placeholder="Enter your email address*"
                                            name="email"
                                            onChange={this.handleChange}/>
                                            {formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
                                        </div>

                                        <div className="password">
                                            <input
                                            type="text"
                                            className={formErrors.phone.length > 0 ? "error" : null}
                                            placeholder="Enter your phone number*"
                                            name="phone"
                                            onChange={this.handleChange}/>
                                            {formErrors.phone.length > 0 && (<span className="errorMessage">{formErrors.phone}</span>)}
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="text"
                                            className={formErrors.username.length > 0 ? "error" : null}
                                            placeholder="Enter your username*"
                                            name="username"
                                            onChange={this.handleChange}/>
                                            {formErrors.username.length > 0 && (<span className="errorMessage">{formErrors.username}</span>)}
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="password"
                                            className={formErrors.password.length > 0 ? "error" : null}
                                            placeholder="Enter your password*"
                                            name="password"
                                            onChange={this.handleChange}/>
                                            {formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
                                        </div>

                                        <div className="createAccount">
                                            <button to='/userDashboard'>Create</button>
                                            <small>Already have an account? <Link className="FormTitle__Link" to='/signin'>Sign In</Link></small>
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

export default SignUp