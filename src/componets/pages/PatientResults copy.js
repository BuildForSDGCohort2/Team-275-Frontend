import React, { Component } from 'react'

class PatientResults extends Component {
    render () {
        return (
            <div>
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Results</p>
                        <h2>1045 mataches found: Denist in Lagos</h2>
                    </div>
                </section>
                <section>
                    <div className="dashboard-content">
                        <div className="dashboard-links">
                            <div className="user-details">
                                <div className="left-side">
                                    <img src={require('../images/P.png')} alt="pic here"/>
                                    <h5>Jane Banba</h5>
                                    <p>14, April 1991</p>
                                    <p>Lagos, Nigria</p>
                                </div>
                            </div>

                            <div className="dashboard-link">
                                <ul>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">dashboard</i>
                                            <a href='/userDashboard'>Dashboard</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">assignment</i>
                                            <a href='/userDashboard'>Appointments</a>
                                            <h6 className="notification-appoint">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">favorite</i>
                                            <a href='/userDashboard'>Favorite</a>
                                            <h6 className="notification-favorite">7</h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rating-timer">
                                            <i className="small material-icons">chat</i>
                                            <a href='/userDashboard'>Chats</a>
                                            <h6 className="notification-chats">7</h6>
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
                        <div className="results-right-display">
                        <div className="data-doctor">
                            <div className="left-side">
                                <img src={require('../images/D2.png')} alt="pic here"/>
                            </div>
                            <div className="right-side">
                                <h5>Frank Leopard <i className="small material-icons">check_circle</i></h5>
                                <div className="rating-title">
                                    <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology.</p>
                                </div>
                                <div className="rating">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                    <p>(4.5) rating out of (5.0)</p>
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
                                <div className="results-btn">
                                    <a href="/profile" className="waves-effect waves-dark btn">Profile</a>
                                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Book An Appoinment</a>
                                </div>
                            </div>
                        </div>

                        <div className="data-doctor">
                            <div className="left-side">
                                <img src={require('../images/D2.png')} alt="pic here"/>
                            </div>
                            <div className="right-side">
                                <h5>Frank Leopard <i className="small material-icons">check_circle</i></h5>
                                <div className="rating-title">
                                    <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology.</p>
                                </div>
                                <div className="rating">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                    <p>(4.5) rating out of (5.0)</p>
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
                                <div className="results-btn">
                                    <a href="/profile" className="waves-effect waves-dark btn">Profile</a>
                                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Book An Appoinment</a>
                                </div>
                            </div>
                        </div>

                        <div className="data-doctor">
                            <div className="left-side">
                                <img src={require('../images/D2.png')} alt="pic here"/>
                            </div>
                            <div className="right-side">
                                <h5>Frank Leopard <i className="small material-icons">check_circle</i></h5>
                                <div className="rating-title">
                                    <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology.</p>
                                </div>
                                <div className="rating">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                    <p>(4.5) rating out of (5.0)</p>
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
                                <div className="results-btn">
                                    <a href="/profile" className="waves-effect waves-dark btn">Profile</a>
                                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Book An Appoinment</a>
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
                    </div>
                </section>
            </div>
        );
    }
}

export default PatientResults