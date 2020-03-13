import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PayHistory from './components/PayHistory.js'
import Expenses from './components/Expenses.js'
import Details from './components/Details.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path="/pay-history" component={PayHistory}/>
          <Route exact path="/property-portfolio" component={Details}/>
          <Route exact path="/property-expenses" component={Expenses}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
