import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

const Reviews = () => {
    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebase.database().ref("DoctorReviews");

        getDoctors.limitToFirst(3).on('value', (snapshot) => {
            const doctors = snapshot.val();
            let doctorArray = [];
            
            for (let id in doctors) {
                doctorArray.push(doctors[id]);
            }
            console.log(doctorArray);
            setDoctorList(doctorArray);
        });
    }, []);

    return (
        <React.Fragment>
            <div className="row" name="doctorsList">
                {doctorsList ? doctorsList.map((doc) => (
                    <div className="data-doctor">
                        <div className="left-side">
                            <img src={doc.profilePic} alt="pic here"/>
                        </div>
                        <div className="right-side">
                            <div className="review-heading">
                                <h5>Jane Banda</h5>
                                <div className="review-icons">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                </div>
                            </div>
                            <div className="rating-title">
                                <p>3 days ago.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit illo fuga commodi aspernatur ducimus? Rerum placeat eveniet sint vitae, 
                                   consectetur debitis doloremque recusandae nostrum, nobis neque voluptate ducimus, porro distinctio.</p>
                            </div>
                            <div className="rating-timer">
                                <i className="small material-icons">reply</i>
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                )) : ''}
            </div> 
            <div className="review-btn">
                <a href="/item" className="waves-effect waves-light btn">Show all feedbacks(100)</a>
            </div>
        </React.Fragment>
    );
}

export default Reviews;