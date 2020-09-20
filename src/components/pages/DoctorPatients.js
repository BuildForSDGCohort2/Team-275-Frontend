import React, { Component } from 'react'

class DoctorPatients extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
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
                                            <a href='/userDashboard'>Chats</a>
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
                            <div className="patient-item">
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/P.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Jane Banda</h5>
                                        <p><span>Patient ID:</span> 1234</p>
                                        <p><span>Age:</span> 24 years, Female</p>
                                        <p><span>Blood Group:</span> O</p>
                                        <div className="contact-details">
                                            <div className="rating-timer">
                                                <i className="small material-icons">chat</i>
                                                <p>janebanba123@gmail.com</p>
                                            </div>
                                            <div className="rating-timer">
                                                <i className="small material-icons">call</i>
                                                <p>+260978919525</p>
                                            </div>
                                        </div>
                                        <div className="results-btn">
                                            <a className="waves-effect waves-light btn modal-trigger" href="#userViewMedical">View Medical History</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="patient-item">
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/P.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Jane Banda</h5>
                                        <p><span>Patient ID:</span> 1234</p>
                                        <p><span>Age:</span> 24 years, Female</p>
                                        <p><span>Blood Group:</span> O</p>
                                        <div className="contact-details">
                                            <div className="rating-timer">
                                                <i className="small material-icons">chat</i>
                                                <p>janebanba123@gmail.com</p>
                                            </div>
                                            <div className="rating-timer">
                                                <i className="small material-icons">call</i>
                                                <p>+260978919525</p>
                                            </div>
                                        </div>
                                        <div className="results-btn">
                                            <a className="waves-effect waves-light btn modal-trigger" href="#userViewMedical">View Medical History</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="patient-item">
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/P.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Jane Banda</h5>
                                        <p><span>Patient ID:</span> 1234</p>
                                        <p><span>Age:</span> 24 years, Female</p>
                                        <p><span>Blood Group:</span> O</p>
                                        <div className="contact-details">
                                            <div className="rating-timer">
                                                <i className="small material-icons">chat</i>
                                                <p>janebanba123@gmail.com</p>
                                            </div>
                                            <div className="rating-timer">
                                                <i className="small material-icons">call</i>
                                                <p>+260978919525</p>
                                            </div>
                                        </div>
                                        <div className="results-btn">
                                            <a className="waves-effect waves-light btn modal-trigger" href="#userViewMedical">View Medical History</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="patient-item">
                                <div className="data-doctor">
                                    <div className="left-side">
                                        <img src={require('../images/P.png')} alt="pic here"/>
                                    </div>
                                    <div className="right-side">
                                        <h5>Jane Banda</h5>
                                        <p><span>Patient ID:</span> 1234</p>
                                        <p><span>Age:</span> 24 years, Female</p>
                                        <p><span>Blood Group:</span> O</p>
                                        <div className="contact-details">
                                            <div className="rating-timer">
                                                <i className="small material-icons">chat</i>
                                                <p>janebanba123@gmail.com</p>
                                            </div>
                                            <div className="rating-timer">
                                                <i className="small material-icons">call</i>
                                                <p>+260978919525</p>
                                            </div>
                                        </div>
                                        <div className="results-btn">
                                            <a className="waves-effect waves-light btn modal-trigger" href="#userViewMedical">View Medical History</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="pagination">
                                <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                                <li className="active"><a href="#!">1</a></li>
                                <li className="waves-effect"><a href="#!">2</a></li>
                                <li className="waves-effect"><a href="#!">3</a></li>
                                <li className="waves-effect"><a href="#!">4</a></li>
                                <li className="waves-effect"><a href="#!">5</a></li>
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div id="userViewMedical" className="modal">
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

export default DoctorPatients