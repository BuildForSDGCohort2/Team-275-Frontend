import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render() {
        return (
            <section className="background-img">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 offset-m1">
                            <div className="wrapper">
                                <div className="form-wrapper">
                                    <h1>Create your account</h1>

                                    <form>
                                        <div className="firstName">
                                            <input
                                            type="text"
                                            placeholder="Enter your first name*"
                                            name="firstName"/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Enter your last name*"
                                            name="lastName"/>
                                        </div>

                                        <div className="email">
                                            <input
                                            type="email"
                                            placeholder="Enter your email address*"
                                            name="email"/>
                                        </div>

                                        <div className="password">
                                            <input
                                            type="password"
                                            placeholder="Enter your phone number*"
                                            name="phone"/>
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="password"
                                            placeholder="Enter your password*"
                                            name="password_again"/>
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="password"
                                            placeholder="Enter your password again*"
                                            name="password_again"/>
                                        </div>

                                        <div className="createAccount">
                                            <button type="submit">Create</button>
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