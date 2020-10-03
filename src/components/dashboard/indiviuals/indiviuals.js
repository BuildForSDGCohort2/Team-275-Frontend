import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class Doctor extends Component {

    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }

    constructor(props) {
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
    }

    render() {
        return (
            <div>
                <section className="payment grey darken-3">
                    <div>
                        <h2>Dashboard</h2>
                    </div>
                </section>
                <section>
                    <div className="dashboard-content">
                        <div className="dashboard-links">
                            <div className="user-details">
                                <div className="left-side">
                                    <img src={require('../../images/D2.png')} alt="pic here"/>
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
                            <div className="row">
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
                                        <li className="tab col s3">
                                            <a href="#test-swipe-2">
                                                Today
                                            </a>
                                        </li>
                                    </ul>

                                        <div id="test-swipe-1">
                                            <table className="striped border-bottom">
                                                <thead>
                                                  <tr>
                                                      <th>ID</th>
                                                      <th>Patient Name</th>
                                                      <th>Schedule Date</th>
                                                      <th>Purpose</th>
                                                      <th>Amount</th>
                                                  </tr>
                                                </thead>

                                                <tbody>
                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div id="test-swipe-2">
                                            <table className="striped border-bottom">
                                                <thead>
                                                  <tr>
                                                      <th>ID</th>
                                                      <th>Patient Name</th>
                                                      <th>Schedule Date</th>
                                                      <th>Purpose</th>
                                                      <th>Amount</th>
                                                  </tr>
                                                </thead>

                                                <tbody>
                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>1096</td>
                                                    <td>Bob James</td>
                                                    <td>13, May 2018</td>
                                                    <td>General</td>
                                                    <td>$100</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">check</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                        <a href="#!"><i className="material-icons">redo</i></a>
                                                    </td>
                                                  </tr>
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