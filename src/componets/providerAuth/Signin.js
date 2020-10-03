import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/signin';
import { Link, Redirect } from 'react-router-dom';
import * as firebase from 'firebase';

const Signin = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [clinic, setClinic] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [category, setCategory] = useState("");
    const [routeRedirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const createUserAction = (email, password) => dispatch(createUser(email, password));

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (firstName !=="" && email !== "" && phone !=="" && username !=="" && password !== "" && category !=="" && department !=="" && licenseNumber !=="" && clinic !=="") {

            firebase.database().ref("Consultants")
            .push({
                profilePic: fileUrl,
                fullName: firstName,
                phone: phone,
                username: username,
                email: email,
                department: department,
                clinic: clinic,
                licenseNumber: licenseNumber,
                category: category,
                endTime: "00:00",
                startTime: "00:00",
                status: "Available",
                price: "00.00",
                location: "No Location",
                sessionDuration: "0",
                dayAvailable: "Not Yet Set"
            });

            await createUserAction(email, password);
            setRedirect(true);
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


    const redirectTo = routeRedirect;
    if (redirectTo) {
        return <Redirect to={'/doctorDashboard/' + email}/>
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
                                            name="fullName"
                                            onChange={(e) => setFirstName(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="email"
                                            placeholder="Enter your email*"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="firstName">
                                            <input
                                            type="text"
                                            placeholder="Enter your phone number*"
                                            name="phone"
                                            onChange={(e) => setPhone(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Enter your license number*"
                                            name="licenseNumber"
                                            onChange={(e) => setLicenseNumber(e.target.value)}/>
                                        </div>

                                        <div className="firstName">
                                            <input
                                            type="text"
                                            placeholder="Category*"
                                            name="category"
                                            onChange={(e) => setCategory(e.target.value)}/>
                                        </div>

                                        <div className="lastName">
                                            <input
                                            type="text"
                                            placeholder="Clinic name*"
                                            name="clinic"
                                            onChange={(e) => setClinic(e.target.value)}/>
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="text"
                                            placeholder="Enter your department*"
                                            name="department"
                                            onChange={(e) => setDepartment(e.target.value)}/>
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="text"
                                            placeholder="Enter your username*"
                                            name="username"
                                            onChange={(e) => setUsername(e.target.value)}/>
                                        </div>

                                        <div className="password_again">
                                            <input
                                            type="password"
                                            placeholder="Enter your password*"
                                            name="password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <div className="createAccount">
                                            <button>Sign Up</button>
                                            <small>Don't have an account? <Link className="FormTitle__Link" to='/providerSignin'>Log In</Link></small>
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

export default Signin