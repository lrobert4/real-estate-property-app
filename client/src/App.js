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
          
          <Route exact path="/" component={Details}/>
          <Route exact path="/" component={PayHistory}/>
          <Route exact path="/" component={Expenses}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
