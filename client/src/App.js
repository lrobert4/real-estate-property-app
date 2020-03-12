import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Property from './components/Property.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Property}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
