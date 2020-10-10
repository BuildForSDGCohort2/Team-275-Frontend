import React, { useState } from 'react';
import * as firebase from 'firebase';

const DoctorScheduleUpdate = () => {
    const [startDate, setStartDay] = useState("");
    const [endDate, setEndDay] = useState("");
    const [day, setDay] = useState("");
    const [duration, setDuration] = useState("");
    const [clinic, setClinic] = useState("");
    const [clinicLocation, setClinicLocation] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (startDate !== "" && endDate !== "" && day !== "" && duration !== "" && clinic !== "" && clinicLocation !== "") {

            firebase.database().ref("DoctorsSchedule")
            .push({
                date: "12th Jan,2020",
                email: "Mwansa@gmail.com",
                fullNames: "Mwansa kampapa Chungu",
                clinicPic: "https://firebasestorage.googleapis.com/v0/b/chaka-21fbb.appspot.com/o/H3.png?alt=media&token=12f06c73-a412-41f3",
                sessionStartDate: startDate,
                sessionEndDate: endDate,
                dayAvaible: day,
                duration: duration,
                clinic: clinic,
                clinicLocation: clinicLocation
            });
        } else {
            console.log("need to fill the details");
        }

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s4">
                        <input id="from_time" type="text" className="validate" name="startDate"
                               onChange={(e) => setStartDay(e.target.value)}/>
                        <label htmlFor="from_time">From what time?</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="to_time" type="text" className="validate" name="endDate" 
                               onChange={(e) => setEndDay(e.target.value)}/>
                        <label htmlFor="to_time">To what time?</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="days" 
                               type="text" 
                               className="validate" 
                               name="day" 
                               onChange={(e) => setDay(e.target.value)}/>
                        <label htmlFor="days">Day of the week</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <input id="time_slat" type="text" className="validate" name="duration" 
                               onChange={(e) => setDuration(e.target.value)}/>
                        <label htmlFor="time_slat">Session's Duration</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="clinic_name" 
                               type="text" 
                               className="validate"
                               name="clinic"
                               onChange={(e) => setClinic(e.target.value)}/>
                        <label htmlFor="clinic_name">Clinic Name</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="clinic_name" 
                               type="text" 
                               className="validate"
                               name="clinicLocation"
                               onChange={(e) => setClinicLocation(e.target.value)}/>
                        <label htmlFor="clinic_name">Clinic's location</label>
                    </div>
                </div>
                <button  className="waves-effect waves-dark btn" value>Add</button>
            </form>
        </React.Fragment>
    );
}

export default DoctorScheduleUpdate;