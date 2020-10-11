import React, {useState} from 'react';
import * as firebase from 'firebase';

const Footer = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (email !== "") {

            firebase.database().ref("Subscription")
            .push({
                user: "End User",
                email: email
            });
        } else {
            console.log("need to fill the details");
        }

    }

    //render() {
        return (
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12 sub">
                            <div className="marketing-accounts">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <h5 className="white-text">Subscribe To Our Newsletter</h5>
                            <form className="footer-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col m12">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" 
                                                placeholder="Enter Email Address" 
                                                name="email"
                                                onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <button className="waves-effect waves-light btn">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="/contact">Conact Us</a></li>
                                <li><a className="grey-text text-lighten-3" href="/questions">FAQ</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">T's & C's</a></li>
                            </ul>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Service</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="/providerSignin">Medical Provider? SignIn</a></li>
                                <li><a className="grey-text text-lighten-3" href="/signin">Login</a></li>
                                <li><a className="grey-text text-lighten-3" href="/signup">Sign Up</a></li>
                                <li><a className="grey-text text-lighten-3" href="/news">Blog</a></li>
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
    //}
}

export default Footer