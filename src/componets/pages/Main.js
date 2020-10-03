import React from 'react';
import MainConsultants from '../subItems/mainConsultants';
import MainClinics from '../subItems/mainClinic';
import MainBlogs from '../subItems/mainBlogs';

const Main = () => {

    return(
        <React.Fragment>
            <div className="Home">
            <section className="home" id="home">
                    <div className="welcome container">
                        <div>
                            <h1>Search Doctors, Clinic, Pharmacy, Book your appoinyment.</h1>
                            <p>Get access to qulified doctors and equipped clinics on our platform.</p>
                            <div className="nav-wrapper">
                                <form>
                                    <div className="row">
                                        <div className="col m12">
                                            <div className="row">
                                              <div className="input-field col s12">
                                                <i className="material-icons">location_on</i>
                                                <input type="text" placeholder="Enter Location" id="location" />
                                              </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col m12">
                                            <div className="row entery">
                                              <div className="input-field col s12">
                                                <i className="material-icons">search</i>
                                                <input type="text" placeholder="Enter doctor or clinic" id="input_data" />
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="waves-effect waves-light btn" href="/results">Search</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="whyUs">
                        <div className="container">
                           <div className="row">
                               <div className="col m12 m4">
                                    <h1>We Want You To Experience</h1>
                                    <hr></hr>
                               </div>
                            </div> 

                            <div className="row">
                               <div className="col s12 m6">
                                   <div className="row">
                                       <div className="col s12 m12 reason">
                                           <div>
                                                <i className="Large material-icons">access_time</i>
                                           </div>
                                           <div>
                                               <h5>Flexible Hours</h5>
                                               <p>Provide High-quality care from anywhere at anytime.</p>
                                           </div>
                                       </div>
                                   </div>

                                   <div className="row">
                                       <div className="col s12 m12 reason">
                                           <div>
                                                <i className="Medium material-icons">trending_up</i>
                                           </div>
                                           <div>
                                               <h5>Training and Professional Growth</h5>
                                               <p>Receive continued training as you work as a consultant on our platform.</p>
                                           </div>
                                       </div>
                                   </div>

                                   <div className="row">
                                       <div className="col s12 m12 reason">
                                           <div>
                                                <i className="Medium material-icons">wc</i>
                                           </div>
                                           <div>
                                               <h5>No Overhead, No Operations</h5>
                                               <p>No more overcrowed visit to the clinic and overloads of work.</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="col s12 m6">
                                    <div className="row">
                                       <div className="col s12 m12 reason">
                                           <div>
                                                <i className="Medium material-icons">favorite_border</i>
                                           </div>
                                           <div>
                                               <h5>Reliable Income</h5>
                                               <p>Earn additional income doing what you love.</p>
                                           </div>
                                       </div>
                                   </div>

                                   <div className="row">
                                        <div className="col s12 m12 reason">
                                           <div>
                                               <i className="fas fa-users"></i>
                                           </div>
                                           <div>
                                               <h5>Dynamic, Supportive Community</h5>
                                               <p>Join a vibrant community of thousands of talanted clinicians and physicans.</p>
                                           </div>
                                       </div>
                                   </div>

                                   <div className="row">
                                       <div className="col s12 m12 reason">
                                           <div>
                                               <i className="fas fa-user-md"></i>
                                           </div>
                                           <div>
                                               <h5>Freelancing</h5>
                                               <p>Through the help of the platform you offer consultations.</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            </div> 
                        </div>
                    </div>
                </section>

                <MainConsultants />

                <MainClinics />
                
                <MainBlogs />

        </div>
        </React.Fragment>
    );
}

export default Main;