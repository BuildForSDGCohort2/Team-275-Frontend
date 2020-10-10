import React, { Component } from 'react'
import M from "materialize-css";
import * as firebase from 'firebase';

class Customer extends Component {
    state = {
        id: []
    }

    componentDidMount() {
        M.Tabs.init(this.Tabs);

        let id = this.props.match.params.user_id;

        const getDoctors = firebase.database().ref("Consultants");

        getDoctors.orderByChild("email").limitToFirst(1).startAt(id).on("value", (snapshot) => {
            const doctors = snapshot.val();
            let doctorArray = [];
            
            for (let id in doctors) {
                doctorArray.push({
                    email: doctors[id].email,
                    dayAvailable: doctors[id].dayAvailable
                });
            }
            this.setState({id: doctorArray});
            //setDoctorList(doctorArray);
        });
    }

    render() {
        return (
            <div>
                <section className="payment grey darken-3">
                    <div>
                        <h2>Dashboard</h2>
                        {this.state.id.map(doc => (
                            <div key={doc.id}>
                                
                            <p>{doc.dayAvailable}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <div className="dashboard-content">
                        <div className="dashboard-links">
                            <div className="user-details">
                                <div className="left-side">
                                    <img src={require('../../images/P.png')} alt="pic here"/>
                                    <h5>Jane Banba</h5>
                                    <p></p>
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
                                <div className="col s12 m12 patient-table">
                                    <ul
                                        ref={Tabs => {
                                            this.Tabs = Tabs;
                                        }}
                                        id="tabs-swipe-demo"
                                        className="tabs"
                                    >
                                        <li className="tab col s3">
                                            <a href="#test-swipe-1">
                                                Appointments
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-2">
                                                Prescriptions
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-3">
                                                Medical Records
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-4">
                                                Bills
                                            </a>
                                        </li>
                                    </ul>

                                        <div id="test-swipe-1">
                                            <table className="striped border-bottom">
                                                <thead>
                                                  <tr>
                                                      <th>Doctor</th>
                                                      <th>Appointment Date</th>
                                                      <th>Booking Date</th>
                                                      <th>Follow Up</th>
                                                      <th>Amount</th>
                                                      <th>Status</th>
                                                  </tr>
                                                </thead>

                                                <tbody>
                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td className="doctor-infor">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>14, May 2018</td>
                                                    <td>13, May 2018</td>
                                                    <td>$100</td>
                                                    <td>Confirmed</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    <div id="test-swipe-2">
                                        <table className="striped border-bottom">
                                            <thead>
                                                <tr>
                                                    <th>Created By</th>
                                                    <th>Created On</th>
                                                    <th>ID</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div id="test-swipe-3">
                                        <table className="striped border-bottom">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Created By</th>
                                                    <th>Date</th>
                                                    <th>Description</th>
                                                    <th>Prescription ID</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>OH - 0001</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Bob James</p>
                                                    </td>
                                                    <td>13, May 2018</td>
                                                    <td>General Check up.</td>
                                                    <td className="centered">P2344</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div id="test-swipe-4">
                                        <table className="striped border-bottom">
                                            <thead>
                                                <tr>
                                                    <th>Receipt ID</th>
                                                    <th>Paid On</th>
                                                    <th>Paid To</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>RT5665</td>
                                                    <td>13, May 2018</td>
                                                    <td className="doctor-infor-created">
                                                        <img src={require('../../images/D2.png')} alt="pic here"/>
                                                        <p>Dr. Frank Leopard</p>
                                                    </td>
                                                    <td>$150</td>
                                                    <td className="table-actions">
                                                        <a href="#!"><i className="material-icons">print</i></a>
                                                        <a href="#!"><i className="material-icons">visibility</i></a>
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

export default Customer