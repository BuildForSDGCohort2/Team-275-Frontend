import React, { Component, useState } from 'react';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import * as firebase from 'firebase';
import ReviewCreate from '../subItems/ReviewsCreate';
import Reviews from '../subItems/profileReviews';
import { Link } from 'react-router-dom';


class Profile extends Component {

    state = {
        id: []
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
    }

    render() {

        return (
            <div className="profile">
                <section className="payment grey darken-3">
                    <div>
                        <p>Home / Doctor Profile</p>
                        <h2>Doctor Profile</h2>
                    </div>
                </section>

                <section>
                   {this.state.id.map(doc => (
                    <div className="container" key={doc.id}>
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="profile-body">
                                    <div className="profile-left-side">
                                        <div className="data-doctor">
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
                                                    <i className="small material-icons">location_on</i>
                                                    <p>{doc.location}</p>
                                                </div>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">email</i>
                                                    <p>{doc.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="profile-right-side">
                                        <div className="data-doctor">
                                            <div className="right-side">
                                                <div className="rating-timer">
                                                    <i className="small material-icons">timer</i>
                                                    <p>{doc.dayAvailable}</p>
                                                </div>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">local_atm</i>
                                                    <p>{doc.price}</p>
                                                </div>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">thumb_up</i>
                                                    <p>90% response time</p>
                                                </div>
                                                <div className="rating-timer">
                                                    <i className="small material-icons">chat</i>
                                                    <p>{doc.liveSessions} live sessions</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="marketing-accounts">
                                            <Link to={'/chat/' + doc.email}><i className="small material-icons">call</i></Link>
                                            <Link to={'/chat/' + doc.email}><i className="small material-icons">chat</i></Link>
                                            <Link to={'/chat/' + doc.email}><i className="small material-icons">videocam</i></Link>
                                        </div>

                                        <div className="results-btn">
                                            <a className="waves-effect waves-light btn modal-trigger" href="/login">Book An Appoinment</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="profile-tabs">
                                    <ul
                                    ref={Tabs => {
                                        this.Tabs = Tabs;
                                    }}
                                    id="tabs-swipe-demo"
                                    className="tabs"
                                    >
                                        <li className="tab col s3">
                                            <a href="#test-swipe-1">
                                                Overview
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-2">
                                                Location
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-3">
                                                Reviews
                                            </a>
                                        </li>
                                        <li className="tab col s3">
                                            <a href="#test-swipe-4">
                                                Business Hours
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <div id="test-swipe-1">
                                        <section className="about-me">
                                            <h3>About Me</h3>
                                            <p>I am a very simple card. I am good at containing small bits of information. 
                                                I am convenient because I require little markup to use effectively.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo fuga commodi aspernatur ducimus? Rerum placeat eveniet sint vitae, 
                                                consectetur debitis doloremque recusandae nostrum, nobis neque voluptate ducimus, porro distinctio.</p>
                                        </section>

                                        <section className="education">
                                            <h3>Education</h3>
                                            <ul>
                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Unveristy of Lagos</h5>
                                                        <p>BDS</p>
                                                        <p>1845 - 1860</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Unveristy of Lagos</h5>
                                                        <p>MDS</p>
                                                        <p>1845 - 1860</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>

                                        <section className="education">
                                            <h3>Work Experience</h3>
                                            <ul>
                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Favourite Family Clinic</h5>
                                                        <p>2016 - 2018</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Mum's Clinic</h5>
                                                        <p>2018 - present</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>

                                        <section className="education">
                                            <h3>Awards</h3><ul>
                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Best Stuff of The Year</h5>
                                                        <p>September, 2018</p>
                                                        <p>I am a very simple card. I am good at containing small bits of information. 
                                                           I am convenient because I require little markup to use effectively.</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="education-icon">
                                                        <i className="small material-icons">check_circle</i>
                                                    </div>
                                                    <div className="education-data">
                                                        <h5>Humanitiran Award</h5>
                                                        <p>October, 2018</p>
                                                        <p>I am a very simple card. I am good at containing small bits of information. 
                                                           I am convenient because I require little markup to use effectively.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </section>

                                        <section className="profile-service">
                                            <h3>Serivces</h3>
                                            <ul>
                                                <li>Service 1</li>
                                                <li>Service 2</li>
                                                <li>Service 3</li>
                                                <li>Service 4</li>
                                                <li>Service 5</li>
                                            </ul>
                                        </section>
                                    </div>

                                    <div id="test-swipe-2" className="maps-here">
                                        <div className="row">
                                            <div className="col s5 m5">
                                                <div className="right-side">
                                                    <h5>Optic Clinic</h5>
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
                                                        <i className="small material-icons">location_on</i>
                                                        <p>Lagos, Nigeria</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s4 m4">
                                                <h3>Mon - Sat</h3>
                                                <p>10:00AM - 2:00AM</p>
                                                <p>4:00PM - 9:00PM</p>

                                                <h3>Sun</h3>
                                                <p>10:00AM - 2:00AM</p>
                                            </div>
                                            <div className="col s3 m3">
                                                <p className="time-ava"><span>Price: </span>$150</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col s5 m5">
                                                <div className="right-side">
                                                    <h5>Mum's Health Clinic</h5>
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
                                                        <i className="small material-icons">location_on</i>
                                                        <p>Lagos, Nigeria</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s4 m4">
                                                <h3>Mon - Sat</h3>
                                                <p>10:00AM - 2:00AM</p>
                                                <p>4:00PM - 9:00PM</p>

                                                <h3>Sun</h3>
                                                <p>10:00AM - 2:00AM</p>
                                            </div>
                                            <div className="col s3 m3">
                                                <p className="time-ava"><span>Price: </span>$150</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div id="test-swipe-3" className="test-swipe-3">
                                        <Reviews />

                                        <div className="row">
                                            <ReviewCreate />
                                        </div>
                                    </div>

                                    <div id="test-swipe-4" className="test-swipe-4">
                                        <div className="row">
                                            <div className="col s6 m6">
                                                <h1>Today</h1>
                                                <p>24 April 2013</p>
                                                <p>Monday</p>
                                                <p>Tuesday</p>
                                                <p>Wednesday</p>
                                                <p>Thursday</p>
                                                <p>Friday</p>
                                                <p>Saturday</p>
                                                <p>Sunday</p>
                                            </div>
                                            <div className="col s6 m6">
                                                <p>Open Noow</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>7:00AM - 9:00PM</p>
                                                <p>Closed</p>
                                            </div>
                                        </div>
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

export default Profile