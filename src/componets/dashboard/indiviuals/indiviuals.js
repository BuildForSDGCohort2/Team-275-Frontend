import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class Doctor extends Component {
    state = {
        id: [],
        appointments: []
    }

    componentDidMount() {
        M.Tabs.init(this.Tabs);

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

        getAppointments.orderByChild("doctorEmail").startAt(id).on("value", (snapshot) => {
            const doctorsAppointment = snapshot.val();
            let appointmentsArray = [];
            
            for (let id in doctorsAppointment) {
                appointmentsArray.push({
                    profilePic: doctorsAppointment[id].profilePic,
                    name: doctorsAppointment[id].name,
                    scheduledDate: doctorsAppointment[id].scheduledDate,
                    purpose: doctorsAppointment[id].purpose,
                    status: doctorsAppointment[id].status,
                    amount: doctorsAppointment[id].amount
                });
            }
            this.setState({appointments: appointmentsArray});
        });
    }

    /*constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3"],
                type: 'bar',
                datasets: [
                    {
                        label: "Patients - 24, April 2013",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [10, 20, 30, 40]
                    },
                    {
                        label: "# of Patients",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [20, 40, 15, 45]
                    },
                    {
                        label: "Appointments",
                        backgroundColor: "rgba(255, 0, 0, 0.75)",
                        data: [16, 4, 18, 10]
                    }
                ]
            }
        }
    }*/

    render() {
        return (
            <div className="doctor">
                <section className="payment grey darken-3">
                    <div>
                        <h2>Dashboard</h2>
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
                                            <a href='#'>Share</a>
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
                            <div className="row" hidden>
                                <div className="col s12 m12">
                                    <div style={{ position: "relative", height: 300, width: 600 }} className="chart-data">
                                        <Line 
                                            options={{
                                                responsive: true
                                            }}
                                            data={this.state.data}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m12 patient-table">
                                    <h3>Patient Appointments</h3>
                                    <ul
                                        ref={Tabs => {
                                            this.Tabs = Tabs;
                                        }}
                                        id="tabs-swipe-demo"
                                        className="tabs"
                                    >
                                        <li className="tab col s3">
                                            <a href="#test-swipe-1">
                                                Upcoming
                                            </a>
                                        </li>
                                    </ul>

                                        <div id="test-swipe-1">
                                            <table className="striped border-bottom">
                                                <thead>
                                                  <tr>
                                                      <th>Patient Name</th>
                                                      <th>Schedule Date</th>
                                                      <th>Purpose</th>
                                                      <th>Amount</th>
                                                      <th>Status</th>
                                                  </tr>
                                                </thead>

                                                <tbody>
                                                {this.state.appointments.map(doc => (
                                                  <tr>
                                                    <td>{doc.name}</td>
                                                    <td>{doc.scheduledDate}</td>
                                                    <td>{doc.purpose}</td>
                                                    <td>{doc.amount}</td>
                                                    <td>{doc.status}</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>))}
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Doctor