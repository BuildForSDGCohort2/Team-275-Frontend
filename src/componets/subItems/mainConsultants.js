import React, { useEffect, useState } from 'react';
import firebaseConfig from '../../firebase/firebase';

const MainConsultants = () => {
    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebaseConfig.database.ref("Consultants");

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
            <section>
                    <div className="category">
                        <div className="container">
                           <div className="row">
                               <div className="col s12 m12">
                                    <h1>Top Doctors</h1>
                                    <hr></hr>
                               </div>
                            </div> 
                            <div className="row" name="doctorsList">
                                {doctorsList ? doctorsList.map((doc, index) => (
                                <div className="col m4" key={index}>
                                    <div className="card" >
                                        <div className="overflow">
                                            <div className="card-image">
                                                <img src={doc.profilePic} alt="pic here"/>
                                                <span className="card-title">{doc.fullName}</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="rating-title">
                                                <p>{doc.department} <i className="small material-icons">check_circle</i></p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">star</i>
                                                <i className="small material-icons">star</i>
                                                <i className="small material-icons">star</i>
                                                <i className="small material-icons">star_half</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
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
                                            <div className="category-amount">
                                                <a href="/providerSignin" className="waves-effect waves-light btn">Make An Appointment</a>
                                            </div>
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

export default MainConsultants;