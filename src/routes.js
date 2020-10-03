import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './componets/pages/Main';
import Signin from './componets/patientAuth/Signin';
import Login from './componets/patientAuth/Login';
import ClinicSigIn from './componets/clinicAuth/siginin';
import BlogCreate from './componets/pages/BlogCreate';
import Patient from './componets/dashboard/patients/Patient';
import Doctor from './componets/dashboard/indiviuals/indiviuals';
import providerSignIn from './componets/providerAuth/Login';
import providerSignUp from './componets/providerAuth/Signin';
import Payment from './componets/pages/Payment';
import Contact from './componets/pages/Contact';
import Receipts from './componets/pages/Receipts';
import Results from './componets/pages/Results';
import DoctorAppointment from './componets/pages/DoctorAppointment';
import DoctorPatients from './componets/pages/DoctorPatients';
import DoctorSchedule from './componets/pages/DoctorSchedule';
import DoctorPayments from './componets/pages/DoctorPayments';
import PatientResults from './componets/pages/PatientResults';
import Profile from './componets/pages/Profile';
import Auth from './componets/mainAuth/auth';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={Signin} />
        <Route path='/login' component={Login} />
        <Route path='/blogCreate/:id' component={BlogCreate}  />
        <Route path='/clinicSignin' component={ClinicSigIn}  />
        <Route path='/providerSignin' component={providerSignIn}  />
        <Route path='/providerSignup' component={providerSignUp}  />
        <Route path='/contact' component={Contact}  />
        <Route path='/payment' component={Payment}  />
        <Route path='/receipts' component={Receipts}  />
        <Route path='/results' component={Results}  />
        <Route path='/userDashboard/:user_id' component={Patient}  />
        <Route path='/userResults' component={PatientResults} />
        <Route path='/profile/:profile_id' component={Profile} />
        <Route path='/doctorDashboard/:user_id' component={Doctor}  />
        <Route path='/results' component={Results}  />
        <Route path='/doctorAppoinments' component={DoctorAppointment} />
        <Route path='/doctorPatients' component={DoctorPatients} />
        <Route path='/doctorSchedule' component={Auth(DoctorSchedule)} />
        <Route path='/doctorPayments' component={DoctorPayments} />
    </Switch>
)

export default  Routes