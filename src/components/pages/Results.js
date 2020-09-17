import React, { Component } from 'react'

class Results extends Component {
    render() {
        return (
            <div className="payment-body">
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Results</p>
                        <h2>1045 mataches found: Denist in Lagos</h2>
                    </div>
                </section>

                <section className="results-body">
                    <div className="results-left-flilter">
                        <form action="#">
                            <h4>Gender</h4>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Female</span>
                                </label>
                            </p>
                            <h4 className="spec">Location</h4>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Nigeria</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Zambia</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>South Africa</span>
                                </label>
                            </p>
                            <h4 className="spec">Clinics</h4>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Dental</span>
                                </label>
                            </p>
                            <h4 className="spec">Type of Specialist</h4>
                            <p>
                                <label>
                                    <input type="checkbox" />
                                    <span>Dental</span>
                                </label>
                            </p>
                        </form>
                    </div>
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
                </section>
            </div>
        );
    }
}

export default Results