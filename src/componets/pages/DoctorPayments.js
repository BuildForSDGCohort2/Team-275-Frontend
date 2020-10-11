import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class DoctorPayments extends Component {

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

        const getAppointments = firebase.database().ref("Payments");

        getAppointments.orderByChild("assignedDoctorEmail").startAt(id).on("value", (snapshot) => {
            const doctorsAppointment = snapshot.val();
            let appointmentsArray = [];
            
            for (let id in doctorsAppointment) {
                appointmentsArray.push({
                    patientPic: doctorsAppointment[id].patientPic,
                    patientFirstName: doctorsAppointment[id].patientFirstName,
                    patientLastName: doctorsAppointment[id].patientLastName,
                    cardID: doctorsAppointment[id].cardID,
                    age: doctorsAppointment[id].age,
                    gander: doctorsAppointment[id].gander,
                    bloodGroup: doctorsAppointment[id].bloodGroup,
                    patientPhone: doctorsAppointment[id].patientPhone,
                    patientEmail: doctorsAppointment[id].patientEmail
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
                        <p>Home / Payments</p>
                        <h2>Payments</h2>
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