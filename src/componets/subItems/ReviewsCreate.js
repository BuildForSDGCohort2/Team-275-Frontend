import React, { useState} from 'react';
import * as firebase from 'firebase';

const ReviewCreate = (props) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (name !== "" && message !=="") {

            firebase.database().ref("DoctorReview")
            .push({
                createdBy: name,
                date: "12th Jan,2020",
                dotoctorName: 'mwansa chungu',
                content: message
            });
        } else {
            console.log("need to fill the details");
        }

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Write your review</h3>
                <div className="rating">
                    <a href="#!"><i className="small material-icons">star_border</i></a>
                    <a href="#!"><i className="small material-icons">star_border</i></a>
                    <a href="#!"><i className="small material-icons">star_border</i></a>
                    <a href="#!"><i className="small material-icons">star_border</i></a>
                    <a href="#!"><i className="small material-icons">star_border</i></a>
                </div>
                <p name="doctorName">{props.to}</p>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="holder_name" 
                        type="text" 
                        name="name"
                        className="validate" 
                        onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="holder_name">Reviewer's Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="body" 
                                  placeholder="Message" 
                                  type="text" 
                                  className="validate" 
                                  name="message"
                                  onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                </div>

                <p>
                    <label>
                        <input type="checkbox" />
                            <span>I read and accepted all the T's of the Online Health Therapy Platform.</span>
                    </label>
                </p>
                <div className="confrim-btn">
                    <button className="waves-effect waves-light btn">Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default ReviewCreate;