import React, { Component } from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class DoctorSchedule extends Component {
    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }

    render() {
        return (
            <div>
                <section className="patients grey darken-3">
                    <div>
                        <p>Home / Appointments</p>
                        <h2>Appointments</h2>
                    </div>
                </section>
                <section>
                    <div className="dashboard-content">
                        <div className="dashboard-links">
                            <div className="user-details">
                                <div className="left-side">
                                    <img src={require('../images/D2.png')} alt="pic here"/>
                                    <h5>Frank Leopard</h5>
                                    <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology</p>
                                </div>
                            </div>

                            <div className="dashboard-link">
                                <ul>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">dashboard</i>
                                            <a href='/doctorDashboard'>Dashboard</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">assignment</i>
                                            <a href='/doctorAppoinments'>Appointments</a>
                                            <h6 className="notification-appoint">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">people</i>
                                            <a href='/doctorPatients'>Patients</a>
                                            <h6 className="notification-patients">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">today</i>
                                            <a href='/doctorSchedule'>Schedules</a>
                                            <h6 className="notification-schedules">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">account_balance_wallet</i>
                                            <a href='/doctorPayments'>Payments</a>
                                            <h6 className="notification-doctor-payments">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">chat</i>
                                            <a href='/doctorChats'>Chats</a>
                                            <h6 className="notification-doctor-chats">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">comment</i>
                                            <a href='/userDashboard'>Reviews</a>
                                            <h6 className="notification-doctor-review">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">share</i>
                                            <a href='/userDashboard'>Share</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">settings</i>
                                            <a href='/userDashboard'>Settings</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">exit_to_app</i>
                                            <a href='/userDashboard'>Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="dashboard-main-content">
                            <div className="time-slot">
                                <h1>Schedule Details</h1>
                                <form action="#">
                                    <div class="row">
                                        <div className="input-field col s4">
                                            <input id="from_time" type="text" className="validate" />
                                            <label for="from_time">From what time?</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input id="to_time" type="text" className="validate" />
                                            <label for="to_time">To what time?</label>
                                        </div>
                                        <div className="input-field col s4">
                                            <input id="days" type="text" className="validate" />
                                            <label for="days">Day of the week</label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div className="input-field col s6">
                                            <input id="time_slat" type="text" className="validate" />
                                            <label for="time_slat">Session's Duration</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="clinic_name" type="text" className="validate" />
                                            <label for="clinic_name">Clinic Name</label>
                                        </div>
                                    </div>
                                    <a href="/profile" className="waves-effect waves-dark btn">Add</a>
                                    <a href="/profile" className="waves-effect waves-dark btn">Update</a>
                                </form>
                            </div>
                            <div className="profile-tabs">
                                <ul
                                ref={Tabs => {
                                    this.Tabs = Tabs;
                                }}
                                id="tabs-swipe-demo"
                                className="tabs"
                                >
                                    <li className="tab col s3">
                                        <a href="#test-swipe-1">
                                            Sunday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-2">
                                            Monday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-3">
                                            Tuesday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-4">
                                            Wednesday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-5">
                                            Thursday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-6">
                                            Friday
                                        </a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-7">
                                            Saturday
                                        </a>
                                    </li>
                                 </ul>
                                    
                                <div id="test-swipe-1">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H3.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H4.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Lagos General Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-2">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H3.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-3">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H4.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-4">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H3.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-5">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H4.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-6">
                                    <div className="schedule-item">
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={require('../images/H3.png')} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>Mum's Care Clinic</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>Lagos, Nigeria</p>
                                                </div>
                                                <p><span>Session Duration:</span> 30minutes</p>
                                                <p><span>Time Slots:</span> 8:00AM - 10:00AM</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="test-swipe-7">
                                    <h3>No Schedule Created Yet</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default DoctorSchedule