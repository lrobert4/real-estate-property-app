import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PayHistory from './components/PayHistory.js'
import Expenses from './components/Expenses.js'
import Details from './components/Details.js'
import Nav from './components/Nav.js'
import newDetails from './components/propertyDetails/newDetails'
import individualDetails from './components/propertyDetails/individualDetails'


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          
          <Route exact path="/pay-history" component={PayHistory}/>
          <Route exact path="/property-portfolio" component={Details}/>
          <Route exact path="/property-expenses" component={Expenses}/>
          <Route exact path="/propertyDetails/newDetails" component={newDetails}/>
          <Route exact path="/propertyDetails/individualDetails" component={individualDetails}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
