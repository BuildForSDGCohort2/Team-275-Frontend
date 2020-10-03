import React, { Component } from 'react'

class DoctorPayments extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    render() {
        return(
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
                            <table className="striped border-bottom">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Paid By</th>
                                        <th>Amount</th>
                                        <th>Paid On</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Partly Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Partly Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Partly Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="#!"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>R4332</td>
                                        <td className="doctor-infor">
                                            <img src={require('../images/P.png')} alt="pic here"/>
                                            <p>Jane Banda</p>
                                        </td>
                                        <td>$100</td>
                                        <td>13, May 2018</td>
                                        <td>Partly Paid</td>
                                        <td className="table-actions">
                                            <a href="#!"><i className="material-icons">print</i></a>
                                            <a href="/receipts"><i className="material-icons">visibility</i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

export default DoctorPayments