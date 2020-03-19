import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PayHistory from './components/PayHistory.js'
import Expenses from './components/Expenses.js'
import Details from './components/Details.js'
import Nav from './components/Nav.js'
import newDetails from './components/propertyDetails/newDetails.js'
import Footer from './components/Footer.js'
import newExpense from './components/propertyExpenses/newExpense.js'
import newPayHistory from './components/payHistory/newPayHistory.js'
import Homepage from './components/Homepage.js'


function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/pay-history" component={PayHistory}/>
          <Route exact path="/property-portfolio" component={Details}/>
          <Route exact path="/property-expenses" component={Expenses}/>
          <Route exact path="/newdetails" component={newDetails}/>
          <Route exact path="/newexpense" component={newExpense}/>
          <Route exact path="/newpayhistory" component={newPayHistory}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
