import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

const MainClinics = () => {
    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebase.database().ref("Clinics");

        getDoctors.orderByChild("clinicName").limitToFirst(3).on('value', (snapshot) => {
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
            <section>
                    <div className="top-category">
                        <div className="container">
                           <div className="row">
                               <div className="col s12 m12">
                                    <h1>Clinics</h1>
                                    <hr></hr>
                               </div>
                            </div> 
                            <div className="row" name="doctorsList">
                                {doctorsList ? doctorsList.map((doc) => (
                               <div className="col m4">
                               <div className="category-item" key={doc.id}>
                                   <div className="category-image">
                                       <img src={doc.profilePic} className="responsive-img" alt="pic here"/>
                                   </div>
                                   <div className="category-infor">
                                       <h1>{doc.clinicName}</h1>
                                       <div className="rating text-center">
                                           <i className="small material-icons">star</i>
                                           <i className="small material-icons">star</i>
                                           <i className="small material-icons">star</i>
                                           <i className="small material-icons">star_half</i>
                                           <i className="small material-icons">star_border</i>
                                           <p>(4.5) rating</p>
                                       </div>
                                       <div className="rating-timer">
                                           <i className="small material-icons">location_on</i>
                                           <p>{doc.location}</p>
                                       </div>
                                   </div>
                                   <div className="category-amount">
                                       <a href="/signin" className="waves-effect waves-light btn">Book Now</a>
                                   </div>
                               </div>
                          </div>)) : ''}
                            </div> 
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
}

export default MainClinics;