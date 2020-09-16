import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class NavBar extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    constructor(props) {
        super(props);
        this.state ={
            startDate: null,
            endDate: null
        }
    }

    render() {
        return (
            <div className="navbar">
                <nav className="nav-wrapper white sticky-top">
                    <div>
                        <a href="/" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <Link to='/' className="brand-logo black-text ">Online Health Therapy</Link>
                        <SignedOutLinks />
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><NavLink to='/' className="links"><a className="modal-trigger" href="#modal1">Book An Appoinment</a></NavLink></li>
                    <li><NavLink to='/news' className="links">Blog</NavLink></li>
                    <li><NavLink to='/provider' className="links">Provider SignIn</NavLink></li>
                    <li><NavLink to='/signup' className="links">Sign In or Create Account</NavLink></li>
                </ul>
    
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h5>Pick Your Date To Set The Appointment</h5>
                        <div className="data-doctor">
                            <div className="left-side">
                                <img src={require('../images/D2.png')} alt="pic here"/>
                            </div>
                            <div className="right-side">
                                <h5>Frank Leopard</h5>
                                <div className="rating">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                    <p>(4.5)</p>
                                </div>
                                <div className="rating-timer">
                                    <i className="small material-icons">timer</i>
                                    <p>Avaliable Sat, 24 April</p>
                                </div>
                                <div className="rating-timer">
                                    <i className="small material-icons">location_on</i>
                                    <p>Lagos, Nigeria</p>
                                </div>
                                <div className="rating-timer">
                                    <i className="small material-icons">local_atm</i>
                                    <p>K23.00 - K45.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="time-picker">
                            <SingleDatePicker
                                date={this.state.date} // momentPropTypes.momentObj or null
                                onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                focused={this.state.focused} // PropTypes.bool
                                onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                id="your_unique_id" // PropTypes.string.isRequired,
                            />
                            <div className="input-field col s6">
                                <input id="time_input" type="text" className="validate" />
                                <label for="time_input">12:00PM - 13:00PM</label>
                            </div>
                            <a href="/payment" className="waves-effect waves-light btn">Procced to pay</a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default NavBar