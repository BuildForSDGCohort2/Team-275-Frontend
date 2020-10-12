import React, {useState} from 'react';
import firebase from '../../firebase/firebase';

const PatientScheduleCreate = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [fullNames, setFullNames] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (date !== "" && fullNames !=="" && email !== "" && phone !=="" && location !=="") {

            firebase.database().ref("DoctorAppointments")
            .push({
                profilePic: fileUrl,
                createdOn: "12th Jan,2020",
                scheduledDate: date,
                doctorEmail: "Mwansa@gmail.com",
                doctorFullNames: "Mwansa kampapa Chungu",
                name: fullNames,
                email: email,
                phone: phone,
                status: "Pending",
                location: location

            });
        } else {
            console.log("need to fill the details");
        }

    }

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    }

    return (
        <React.Fragment>
            <div>
        <section className="background-img-provider">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 offset-m1">
                        <div className="wrapper">
                            <div className="form-wrapper">
                                <h1>Create An account</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="password_again">
                                            <label htmlFor="cover" className="cover">Profile Picture</label>
                                            <input
                                            type="file"
                                            onChange={onFileChange}/>
                                        </div>

                                        <div className="firstName">
                                            <input
                                            type="text"
                                            placeholder="Enter your names*"
                                            name="fullNames"
                                            onChange={(e) => setFullNames(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Enter your email*"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="firstName">
                                            <input
                                            type="text"
                                            placeholder="Enter your phone*"
                                            name="phone"
                                            onChange={(e) => setPhone(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Enter your location*"
                                            name="location"
                                            onChange={(e) => setLocation(e.target.value)} />
                                        </div>

                                        <div className="password">
                                            <input
                                            type="text"
                                            placeholder="Enter the time you want to see the doctor*"
                                            name="date"
                                            onChange={(e) => setDate(e.target.value)} />
                                        </div>

                                        <div className="createAccount">
                                            <button>Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </React.Fragment>
    )
}

export default PatientScheduleCreate;