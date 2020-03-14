import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PayHistory from './components/PayHistory.js'
import Expenses from './components/Expenses.js'
import Details from './components/Details.js'
import Nav from './components/Nav.js'
import newDetails from './components/propertyDetails/newDetails.js'
import individualDetails from './components/propertyDetails/individualDetails.js'
import editDetails from './components/propertyDetails/editDetails.js'


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/pay-history" component={PayHistory}/>
          <Route exact path="/property-portfolio" component={Details}/>
          <Route exact path="/property-expenses" component={Expenses}/>
          <Route exact path="/newdetails" component={newDetails}/>
          <Route exact path="/individualdetails" component={individualDetails}/>
          <Route exact path="/editdetails" component={editDetails}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
