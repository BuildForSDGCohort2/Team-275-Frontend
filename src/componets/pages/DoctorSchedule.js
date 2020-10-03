import React, { useState } from 'react';
//import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../../actions/create';
import "materialize-css/dist/css/materialize.min.css";

const DoctorSchedule = () => {

        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });

        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [day, setDay] = useState("");
        const [duration, setDuration] = useState("");
        const [clinic, setClinic] = useState("");
        const [routeRedirect, setRedirect] = useState("");
        const [loading, setLoading] = useState(false);
        
        const dispatch = useDispatch();
        const createScheduleAction = (post) => dispatch(createSchedule(post));

        //const redirect = routeRedirect;
        //if(redirect) {
            //return <Redirect to='/doctorSchedule' />.child(key).update({
  //title: 'zkoder new Tut#1'
//});
        //}

        const addSchedule = async(e) => {
            e.preventDefault();
            setLoading(true);
            let post = {
                startDate,
                endDate,
                day,
                duration,
                clinic
            }

            await createScheduleAction(post);
            setLoading(false);
            setRedirect(true);
        }

        let model;
        if(loading) {
            model = <div className="processing">
                        <p>Request is being processing....</p>
                        <div className="loader">
                            Loading....
                        </div>
                    </div>
        } else {
            model = <form onSubmit={addSchedule}>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="from_time" type="text" className="validate" name="startDate" onChange={(e) => setStartDate(e.target.value)} />
                            <label htmlFor="from_time">From what time?</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="to_time" type="text" className="validate" name="endDate" onChange={(e) => setEndDate(e.target.value)} />
                            <label htmlFor="to_time">To what time?</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="days" type="text" className="validate" name="day" onChange={(e) => setDay(e.target.value)} />
                            <label htmlFor="days">Day of the week</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input id="time_slat" type="text" className="validate" name="duration" onChange={(e) => setDuration(e.target.value)} />
                            <label htmlFor="time_slat">Session's Duration</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="clinic_name" type="text" className="validate" name="clinic" onChange={(e) => setClinic(e.target.value)} />
                            <label htmlFor="clinic_name">Clinic Name</label>
                        </div>
                    </div>
                    <input type="submit" className="waves-effect waves-dark btn" value="Add" />
                </form>
        }

    //render() {
        return (
            <React.Fragment>
            <div>
                <section className="patients grey darken-3">
                    <div>
                        <p>Home / Schedules</p>
                        <h2>Schedules</h2>
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
                                </ul>
                            </div>
                        </div>

                        <div className="dashboard-main-content">
                            <div className="time-slot">
                                <h1>Schedule Details</h1>
                                {model}
                            </div>

                            <div className="profile-tabs">
                                <ul className="tabs">
                                    <li className="tab col s3">
                                        <a href="#!">Sunday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Monday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Tuesday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Wednesday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Thursday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Friday</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#!">Saturday</a>
                                    </li>
                                 </ul>
                                    
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

                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </React.Fragment>
        );
    //}
}

export default DoctorSchedule