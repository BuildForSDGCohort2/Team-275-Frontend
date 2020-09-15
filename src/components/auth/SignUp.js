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
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="firstName"/>
                                        </div>

                                        <div className="lastName">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input
                                            type="text"
                                            placeholder="Enter your name"
                                            name="lastName"/>
                                        </div>

                                        <div className="email">
                                            <label htmlFor="email">Email</label>
                                            <input
                                            type="email"
                                            placeholder="Enter your name"
                                            name="email"/>
                                        </div>

                                        <div className="password">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                            type="password"
                                            placeholder="Enter your phone"
                                            name="phone"/>
                                        </div>

                                        <div className="password_again">
                                            <label htmlFor="password_again">Password</label>
                                            <input
                                            type="password"
                                            placeholder="Enter your name"
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