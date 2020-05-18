import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  // useEffect(() => {
  //   fetch('/')
  //     .then(response => {
  //       return response.json();
  //     });
  // }, []);

  return (
    <div>
      <Route path='/home' component={Home}/>
      <Route path='/team/:id' component={Team}/>
    </div>
  );
}

export default App;