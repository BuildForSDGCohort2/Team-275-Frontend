import React, {useEffect, useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logout';
import firebase from '../../firebase/firebase';

const Nav = (props) => {

    const loginSelector = useSelector((state) => state.logIn);
    const signinSelector = useSelector((state) => state.signIn);
    const [userState, setUserState] = useState(null);
    const dispatch = useDispatch();
    const logoutUserAction = () => dispatch(logoutUser());

    useEffect(() => {
        firebase.getUserState().then(user => {
            setUserState(user);
        });
    })

    const logout = async(e) => {
        console.log("logout user");
        setUserState(null);
        await logoutUserAction();
        props.history.replace("/");
    }

    let buttons;

    if ((loginSelector.user && loginSelector.user.hasOwnProperty("user")) || (signinSelector.user && signinSelector.user.hasOwnProperty("user")) || userState != null) {
        buttons = (
            <React.Fragment>
                <li>
                    <div className="nav-wrapper">
                        <form>
                            <i className="material-icons">search</i>
                            <input id="search" type="search" required />
                        </form>
                    </div>
                </li>
                <li><Link className="links" to='/profile'><i className="material-icons">person_pin</i></Link></li>
                <li><Link className="links" onClick={logout} to='/settings'><i className="material-icons">exit_to_app</i></Link></li>
            </React.Fragment>
        )
    } else {
        buttons = (
            <React.Fragment>
                <li><Link className="links" to='/'>Blog</Link></li>
                <li>
                    <Link className="links" to='/login'>Create or Login Account</Link>
                </li>
                <li>
                    <Link className="links" to='/providerSignup'>Provider</Link>
                </li>
            </React.Fragment>
        )
    }

    return(
        <div className="navbar">
            <nav className="nav-wrapper white sticky-top">
                <ul>
                    <a href="/" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <li><Link className="links" to='/'>Online Health Therapy</Link></li>
                </ul>
                <ul className="right hide-on-med-and-down">
                    {buttons}
                </ul>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><Link className="links" to='/'>Blog</Link></li>
                {buttons}
            </ul>

            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
        </div>
    )
}

export default withRouter(Nav);