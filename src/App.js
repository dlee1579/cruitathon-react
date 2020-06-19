import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
// import * as firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ReactGA from 'react-ga';


import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path='/team/:id' component={Team}/>
    </div>
  );
}

export default App;