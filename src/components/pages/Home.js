import React from 'react'

const Home = () => {

    return (
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
                                                <input type="text" placeholder="Enter Location" id="autocomplete-input" />
                                              </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col m12">
                                            <div className="row entery">
                                              <div className="input-field col s12">
                                                <i className="material-icons">search</i>
                                                <input type="text" placeholder="Enter doctor or clinic" id="autocomplete-input" />
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="waves-effect waves-light btn" href="/">Search</a>
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
                                               <i class="fas fa-user-md"></i>
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

                <section>
                    <div className="category">
                        <div className="container">
                           <div className="row">
                               <div className="col m12 m4">
                                    <h1>Top Doctors</h1>
                                    <hr></hr>
                               </div>
                            </div> 

                            <div className="row">
                               <div className="col m4">
                                    <div className="card">
                                        <div className="overflow">
                                            <div className="card-image">
                                                <img src={require('../images/cat.jpg')} alt="pic here"/>
                                                <span className="card-title">Frank Leopard</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="rating-title">
                                                <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology. <i className="small material-icons">check_circle</i></p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">timer</i>
                                                <p>Avaliable Sat, 24 April</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">local_atm</i>
                                                <p>K23.00 - K45.00</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>

                               <div className="col m4">
                               <div className="card">
                                        <div className="overflow">
                                            <div className="card-image">
                                                <img src={require('../images/cat.jpg')} alt="pic here"/>
                                                <span className="card-title">Frank Leopard</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="rating-title">
                                                <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology. <i className="small material-icons">check_circle</i></p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">timer</i>
                                                <p>Avaliable Sat, 24 April</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">local_atm</i>
                                                <p>K23.00 - K45.00</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>

                               <div className="col m4">
                               <div className="card">
                                        <div className="overflow">
                                            <div className="card-image">
                                                <img src={require('../images/cat.jpg')} alt="pic here"/>
                                                <span className="card-title">Frank Leopard</span>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="rating-title">
                                                <p>BBS, MD, DR - Ophthalmology, MCH - Ophthalmology. <i className="small material-icons">check_circle</i></p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">timer</i>
                                                <p>Avaliable Sat, 24 April</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">local_atm</i>
                                                <p>K23.00 - K45.00</p>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                            </div> 
                        </div>
                    </div>
                </section>

                <section>
                    <div className="top-category">
                        <div className="container">
                           <div className="row">
                               <div className="col m12 m4">
                                    <h1>Clinics</h1>
                                    <hr></hr>
                               </div>
                            </div> 

                            <div className="row">
                               <div className="col m4">
                                    <div className="category-item">
                                        <div className="category-image">
                                            <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                        </div>
                                        <div className="category-infor">
                                            <h1>Clinic Name</h1>
                                            <div className="rating text-center">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                        <div className="category-amount">
                                            <a href="/item" className="waves-effect waves-light btn">Book Now</a>
                                        </div>
                                    </div>
                               </div>

                               <div className="col m4">
                               <div className="category-item">
                                        <div className="category-image">
                                            <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                        </div>
                                        <div className="category-infor">
                                            <h1>Clinic Name</h1>
                                            <div className="rating text-center">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                        <div className="category-amount">
                                            <a href="/item" className="waves-effect waves-light btn">Book Now</a>
                                        </div>
                                    </div>
                               </div>

                               <div className="col m4">
                               <div className="category-item">
                                        <div className="category-image">
                                            <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                        </div>
                                        <div className="category-infor">
                                            <h1>Clinic Name</h1>
                                            <div className="rating text-center">
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <i className="small material-icons">star_border</i>
                                                <p>(4.5)</p>
                                            </div>
                                            <div className="rating">
                                                <i className="small material-icons">location_on</i>
                                                <p>Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                        <div className="category-amount">
                                            <a href="/item" className="waves-effect waves-light btn">Book Now</a>
                                        </div>
                                    </div>
                               </div>
                            </div> 
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="blog">
                        <div>
                           <div className="row">
                               <div className="col m12 m4">
                                    <h1>From The Blog</h1>
                                    <hr></hr>
                               </div>
                            </div> 

                            <div className="row">
                                <div className="col m4">
                                   <div className="blog-item">
                                       <div className="blog-image">
                                           <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                       </div>
                                       <div className="blog-author">
                                            <p><i className="small material-icons">date_range</i>May 4,2019 <span>By Admin</span> </p>
                                        </div>
                                        <div className="card-content">
                                           <span className="card-title"><a href="/">Blog Title</a></span>
                                           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                       <div></div>
                                   </div>
                               </div>

                               <div className="col m4">
                                   <div className="blog-item">
                                       <div className="blog-image">
                                           <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                       </div>
                                       <div className="blog-author">
                                            <p><i className="small material-icons">date_range</i>May 4,2019 <span>By Admin</span> </p>
                                        </div>
                                        <div className="card-content">
                                           <span className="card-title"><a href="/">Blog Title</a></span>
                                           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                       <div></div>
                                   </div>
                               </div>

                               <div className="col m4">
                                   <div className="blog-item">
                                       <div className="blog-image">
                                           <img src={require('../images/cat.jpg')} className="responsive-img" alt="pic here"/>
                                       </div>
                                       <div className="blog-author">
                                            <p><i className="small material-icons">date_range</i>May 4,2019 <span>By Admin</span> </p>
                                        </div>
                                        <div className="card-content">
                                           <span className="card-title"><a href="/">Blog Title</a></span>
                                           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                        </div>
                                       <div></div>
                                   </div>
                               </div>

                            </div> 
                        </div>
                    </div>
                </section>

        </div>
    );
}

export default Home