import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';
import DoctorScheduleUpdate from '../subItems/DoctorSchedule';

class DoctorSchedule extends Component {
    state = {
        id: [],
        appointments: []
    }

    componentDidMount() {
        //M.Tabs.init(this.Tabs);

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

        const getAppointments = firebase.database().ref("DoctorsSchedule");

        getAppointments.orderByChild("email").startAt(id).on("value", (snapshot) => {
            const doctorsAppointment = snapshot.val();
            let appointmentsArray = [];
            
            for (let id in doctorsAppointment) {
                appointmentsArray.push({
                    clinicPic: doctorsAppointment[id].clinicPic,
                    clinic: doctorsAppointment[id].clinic,
                    clinicLocation: doctorsAppointment[id].clinicLocation,
                    dayAvaible: doctorsAppointment[id].dayAvaible,
                    duration: doctorsAppointment[id].duration,
                    sessionEndDate: doctorsAppointment[id].sessionEndDate,
                    sessionStartDate: doctorsAppointment[id].sessionStartDate
                });
            }
            this.setState({appointments: appointmentsArray});
        });
    }

    render() {
        return (
            <div>
                <section className="patients grey darken-3">
                    <div>
                        <p>Home / Schedules</p>
                        <h2>Schedules</h2>
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

                        <div className="dashboard-main-content">
                            <div className="time-slot">
                                <h1>Schedule Details</h1>
                                <DoctorScheduleUpdate />
                            </div>

                            <div className="profile-tabs">
                                <h1>Your weekly schedules</h1>

                                <div id="test-swipe-2">
                                    {this.state.appointments.map(doc => (
                                    <div className="schedule-item" key={doc.id}>
                                        <div className="data-doctor">
                                            <div className="left-side">
                                                <img src={doc.clinicPic} alt="pic here"/>
                                            </div>
                                            <div className="right-side">
                                                <h5>{doc.clinic}</h5>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">location_on</i>
                                                    <p>{doc.clinicLocation}</p>
                                                </div>
                                                <p><span>Day available:</span> {doc.dayAvaible}</p>
                                                <p><span>Session Duration:</span> {doc.duration}</p>
                                                <p><span>Time Slots:</span> {doc.sessionStartDate} - {doc.sessionEndDate}</p>
                                                <div className="results-btn">
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Edit</a>
                                                    <a className="waves-effect waves-light btn modal-trigger" href="#userEditClinic">Detele</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))}
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