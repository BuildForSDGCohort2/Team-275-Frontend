import React, {useState} from 'react';
import * as firebase from 'firebase';

const ClinicSigIn = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [clinicName, setClinicName] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (clinicName !== "" && location !=="") {

            firebase.database().ref("Clinics")
            .push({
                profilePic: fileUrl,
                createdBy: "admin",
                date: "12th Jan,2020",
                clinicName: clinicName,
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
                                            placeholder="Enter your first name*"
                                            name="clinicName"
                                            onChange={(e) => setClinicName(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Enter your email*"
                                            name="location"
                                            onChange={(e) => setLocation(e.target.value)} />
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

export default ClinicSigIn;