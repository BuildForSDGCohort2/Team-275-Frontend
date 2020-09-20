import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import '../src/App.css';
import NavBar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Provider from './components/pages/Provider'
import Payment from './components/pages/Payment'
import Contact from './components/pages/Contact'
import Receipts from './components/pages/Receipts'
import Results from './components/pages/Results'
import News from './components/pages/News'
import Patient from './components/dashboard/patients/Patient'
import PatientResults from './components/pages/PatientResults'
import Profile from './components/pages/Profile'
import Doctor from './components/dashboard/indiviuals/indiviuals'
import DoctorAppointment from './components/pages/DoctorAppointment'
import DoctorPatients from './components/pages/DoctorPatients'
import DoctorSchedule from './components/pages/DoctorSchedule'
import DoctorPayments from './components/pages/DoctorPayments'
import providerSignIn from './components/providerAuth/SignIn'
import providerSignUp from './components/providerAuth/SignUp'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Footer from './components/layout/Footer';

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/provider' component={Provider}  />
              <Route path='/contact' component={Contact}  />
              <Route path='/payment' component={Payment}  />
              <Route path='/receipts' component={Receipts}  />
              <Route path='/results' component={Results}  />
              <Route path='/news' component={News}  />
              <Route path='/userDashboard' component={Patient}  />
              <Route path='/userResults' component={PatientResults} />
              <Route path='/doctorDashboard' component={Doctor}  />
              <Route path='/doctorAppoinments' component={DoctorAppointment} />
              <Route path='/doctorPatients' component={DoctorPatients} />
              <Route path='/doctorSchedule' component={DoctorSchedule} />
              <Route path='/doctorPayments' component={DoctorPayments} />
              <Route path='/profile' component={Profile} />
              <Route path='/providerSignin' component={providerSignIn}  />
              <Route path='/providerSignup' component={providerSignUp}  />
              <Route path='/signin' component={SignIn}  />
              <Route path='/signup' component={SignUp}  />
            </Switch>
            <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
