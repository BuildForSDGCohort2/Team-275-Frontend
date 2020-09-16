import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12 sub">
                            <div className="marketing-accounts">
                                <i class="fab fa-facebook-square"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                            <h5 className="white-text">Subscribe To Our Newsletter</h5>
                            <form className="footer-form">
                                <div className="row">
                                    <div className="col m12">
                                        <div class="row">
                                            <div className="input-field col s12">
                                                <input type="text" placeholder="Enter Email Address" id="autocomplete-input" />
                                            </div>
                                            <a className="waves-effect waves-light btn" href="/">Subscribe</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Conact Us</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">T's & C's</a></li>
                            </ul>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Service</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Medical Provider</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Login</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright grey darken-3">
                    <div className="container">
                    © 2020 Copyright Online Health Therapy
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer