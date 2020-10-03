import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/login';
import { Redirect, Link } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));

    const login = async(e) => {
        e.preventDefault();
        
        if (email !== "" && password !== "") {
            let user = await logInUserAction(email, password);
            console.log(user);

            if (user) {
                setRedirect(true);
            }
        } else {
            console.log("need to fill the details");
        }
    }

    const redirectTo = redirect;
    if (redirectTo) {
        return <Redirect to={'/userDashboard/' + email} />
    }

    return (
        <React.Fragment>
            <div>
        <section className="background-img">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 offset-m1">
                        <div className="wrapper">
                            <div className="form-wrapper">
                                <h1>Log Into Your Account</h1>
                                    <form onSubmit={login}>
                                        <div className="username">
                                            <input
                                            type="text"
                                            placeholder="Enter your email*"
                                            name="email"
                                            user={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="login_password">
                                            <input
                                            type="password"
                                            placeholder="Enter your password*"
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <div className="createAccount">
                                            <button>Login</button>
                                            <small>Don't have an account? <Link className="FormTitle__Link" to='/signin'>Sign Up</Link></small>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </React.Fragment>
    )
}

export default Login