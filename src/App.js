import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
// import * as firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ReactGA from 'react-ga';


import Home from './pages/Home';
import Team from './pages/Team';
import Pet from './pages/Pet';
import SignUp from './pages/SignUp';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path='/team/:id' component={Team}/>
      <Route path='/pet' component={Pet}/>
      <Route path='/signup' component={SignUp} />
    </div>
  );
}

export default App;