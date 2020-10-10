import React, { Component } from 'react'
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class DoctorAppointments extends Component {
    state = {
        id: [],
        appointments: []
    }

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });

        let id = this.props.match.params.user_id;

        const getDoctors = firebase.database().ref("Consultants");

        getDoctors.orderByChild("email").limitToFirst(1).startAt(id).on("value", (snapshot) => {
            const doctorsProfile = snapshot.val();
            let doctorArray = [];
            
            for (let id in doctorsProfile) {
                doctorArray.push({
                    profilePic: doctorsProfile[id].profilePic,
                    email: doctorsProfile[id].email,
                    fullName: doctorsProfile[id].fullName,
                    location: doctorsProfile[id].location,
                    department: doctorsProfile[id].department,
                    price: doctorsProfile[id].price,
                    liveSessions: doctorsProfile[id].liveSessions,
                    dayAvailable: doctorsProfile[id].dayAvailable
                });
            }
            this.setState({id: doctorArray});
        });

        const getAppointments = firebase.database().ref("DoctorAppointments");

        getAppointments.orderByChild("doctorFullNames").limitToFirst(1).startAt(id).on("value", (snapshot) => {
            const doctorsAppointment = snapshot.val();
            let appointmentsArray = [];
            
            for (let id in doctorsAppointment) {
                appointmentsArray.push({
                    profilePic: doctorsAppointment[id].profilePic,
                    doctorEmail: doctorsAppointment[id].doctorEmail,
                    doctorFullNames: doctorsAppointment[id].doctorFullNames,
                    name: doctorsAppointment[id].name,
                    email: doctorsAppointment[id].email,
                    phone: doctorsAppointment[id].phone,
                    location: doctorsAppointment[id].location,
                    scheduledDate: doctorsAppointment[id].scheduledDate
                });
            }
            this.setState({appointments: appointmentsArray});
        });
    }

    render() {
        return (
            <div>
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Appointments</p>
                        <h2>Appointments</h2>
                    </div>
                </section>
                <section>
                    <div className="dashboard-content">
                    {this.state.id.map(doc => (
                        <div className="dashboard-links" key={doc.id}>
                            <div className="user-details">
                                <div className="left-side">
                                    <img src={doc.profilePic} alt="pic here"/>
                                    <h5>{doc.fullName}</h5>
                                    <p>{doc.department}</p>
                                </div>
                            </div>

                            <div className="dashboard-link">
                                <ul>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">dashboard</i>
                                            <Link to={'/doctorDashboard/' + doc.email}>Dashboard</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">assignment</i>
                                            <Link to={'/doctorAppoinments/' + doc.fullName}>Appointments</Link>
                                            <h6 className="notification-appoint">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">people</i>
                                            <Link to={'/doctorPatients/' + doc.email}>Patients</Link>
                                            <h6 className="notification-patients">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">today</i>
                                            <Link to={'/doctorSchedule/' + doc.email}>Schedules</Link>
                                            <h6 className="notification-schedules">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">account_balance_wallet</i>
                                            <Link to={'/doctorPayments/' + doc.fullName}>Payments</Link>
                                            <h6 className="notification-doctor-payments">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">chat</i>
                                            <Link to={'/doctorChats/' + doc.fullName}>Chats</Link>
                                            <h6 className="notification-doctor-chats">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">comment</i>
                                            <Link to={'/doctorProfile/' + doc.fullName}>Reviews</Link>
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
                                            <Link to={'/doctorSettings/' + doc.email}>Settings</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>))}

                        {this.state.appointments.map(doc => (
                        <div className="dashboard-main-content" key={doc.id}>
                            <div className="data-doctor">
                                <div className="left-side">
                                    <img src={doc.profilePic} alt="pic here"/>
                                </div>
                                <div className="right-side">
                                    <h5>{doc.fullName}</h5>
                                    <div className="rating-timer">
                                        <i className="small material-icons">timer</i>
                                        <p>{doc.scheduledDate}</p>
                                    </div>
                                    <div className="rating-timer">
                                        <i className="small material-icons">chat</i>
                                        <p>{doc.email}</p>
                                    </div>
                                    <div className="rating-timer">
                                        <i className="small material-icons">call</i>
                                        <p>{doc.phone}</p>
                                    </div>
                                    <div className="rating-timer">
                                        <i className="small material-icons">location_on</i>
                                        <p>{doc.location}</p>
                                    </div>
                                    <div className="results-btn">
                                        <a className="waves-effect waves-light btn modal-trigger" href="#userView">View</a>
                                    </div>
                                </div>
                            </div>

                            <ul className="pagination" hidden>
                                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                                <li className="active"><a href="#!">1</a></li>
                                <li className="waves-effect"><a href="#!">2</a></li>
                                <li className="waves-effect"><a href="#!">3</a></li>
                                <li className="waves-effect"><a href="#!">4</a></li>
                                <li className="waves-effect"><a href="#!">5</a></li>
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                            </ul>
                        </div>))}
                    </div>
                </section>

                <div id="userView" className="modal">
                    <div className="modal-content">
                        m
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorAppointments