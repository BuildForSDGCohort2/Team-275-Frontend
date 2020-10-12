import React, { useEffect, useState } from 'react';
import firebaseConfig from '../../firebase/firebase';

const MainBlogs = () => {
    const [doctorsList, setDoctorList] = useState();

    useEffect(() => {
        const getDoctors = firebaseConfig.database.ref("Blogs");

        getDoctors.limitToFirst(3).on('value', (snapshot) => {
            const doctors = snapshot.val();
            let doctorArray = [];
            
            for (let id in doctors) {
                doctorArray.push(doctors[id]);
            }
            setDoctorList(doctorArray);
        });
    }, []);

    return (
        <React.Fragment>
            <section>
                <div className="blog">
                        <div>
                           <div className="row">
                               <div className="col m12 m4">
                                    <h1>From The Blog</h1>
                                    <hr></hr>
                               </div>
                            </div> 

                            <div className="row" name="doctorsList">
                                {doctorsList ? doctorsList.map((doc, index) => (
                                <div className="col m4" key={index}>
                                   <div className="blog-item">
                                       <div className="blog-image">
                                           <img src={doc.profilePic} className="responsive-img" alt="pic here"/>
                                       </div>
                                       <div className="blog-author">
                                            <p><i className="small material-icons">date_range</i>{doc.date} <span>By {doc.createdBy}</span> </p>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title"><a href="/">{doc.title}</a></span>
                                            <p>{doc.content}</p>
                                        </div>
                                       <div></div>
                                   </div>
                               </div>)) : ''}
                            </div> 
                        </div>
                    </div>
                </section>
        </React.Fragment>
    );
}

export default MainBlogs;