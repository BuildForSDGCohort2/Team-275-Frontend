import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';
import '../src/App.css';
import NavBar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Provider from './components/pages/Provider'
import Item from './components/pages/Item'
import News from './components/pages/News'
import Appointment from './components/pages/Appointment'
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
              <Route path='/item' component={Item}  />
              <Route path='/news' component={News}  />
              <Route path='/appointment' component={Appointment}  />
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
