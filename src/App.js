import React from 'react';
import '../src/App.css';
import Routes from './routes';
import Nav from './componets/layout/Nav';
import Footer from './componets/layout/Footer';
import Store from './store/store';
import { Provider } from 'react-redux';

function App() {

  return (
      <Provider store={Store} >
        <div className="App">
          <Nav />
          <Routes />
          <Footer />
        </div>
      </Provider>
  );
}

export default App
