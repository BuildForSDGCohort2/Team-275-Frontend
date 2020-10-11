import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

const Reviews = () => {
    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebase.database().ref("DoctorReview");

        getDoctors.orderByChild("dotoctorName").startAt("mwansa chungu").on('value', (snapshot) => {
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
                            <img src={require('../images/P.png')} alt="pic here"/>
                        </div>
                        <div className="right-side">
                            <div className="review-heading">
                                <h5>{doc.createdBy}</h5>
                                <div className="review-icons">
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star</i>
                                    <i className="small material-icons">star_half</i>
                                    <i className="small material-icons">star_border</i>
                                </div>
                            </div>
                            <div className="rating-title">
                                <p>{doc.date}</p>
                                <p>{doc.content}</p>
                            </div>
                            <div className="rating-timer" hidden>
                                <i className="small material-icons">reply</i>
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                )) : ''}
            </div> 
        </React.Fragment>
    );
}

export default Reviews;