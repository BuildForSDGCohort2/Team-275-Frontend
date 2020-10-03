import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

const Results =() => {

    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebase.database().ref("Consultants");

        getDoctors.orderByKey().on('value', (snapshot) => {
            const doctors = snapshot.val();
            
            let doctorArray = [];
            
            for (let id in doctors) {
                doctorArray.push(doctors[id]);
            }
            setDoctorList(doctorArray);
        });
    }, []);

    //render() {

        return (
            <React.Fragment>
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
                    <div className="results-right-display" name="doctorsList">
                        <div>
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="holder_name" 
                                               type="text" 
                                               name="inputFliterData"
                                               className="validate"/>
                                        <label htmlFor="holder_name">Search name, location and clinic name...</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {doctorsList ? doctorsList.map((doc) => (
                        <div className="data-doctor" key={doc.id}>
                            <div className="left-side">
                                <img src={doc.profilePic} alt="pic here"/>
                            </div>
                            <div className="right-side">
                                <h5>{doc.fullName} <i className="small material-icons">check_circle</i></h5>
                                <div className="rating-title">
                                    <p>{doc.department}</p>
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
                                    <i className="small material-icons">chat</i>
                                    <p>{doc.email}</p>
                                </div>
                                <div className="rating-timer">
                                    <i className="small material-icons">timer</i>
                                    <p>{doc.dayAvailable}</p>
                                </div>
                                <div className="rating-timer">
                                    <i className="small material-icons">location_on</i>
                                    <p>{doc.location}</p>
                                </div> 
                                <div className="rating-timer">
                                    <i className="small material-icons">local_atm</i>
                                    <p>{doc.price}</p>
                                </div>
                                <div className="results-btn">
                                    <Link to={'/profile/' + doc.email} className="waves-effect waves-dark btn">Profile</Link>
                                    <a href="/signin" className="waves-effect waves-dark btn">Book An Appointment</a>
                                </div>
                            </div>
                        </div>)) : ''}

                        
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
            </React.Fragment>
        );
    //}
}

export default Results