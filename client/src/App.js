import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PayHistory from './components/PayHistory.js'
import Expenses from './components/Expenses.js'
import Details from './components/Details.js'
import Nav from './components/Nav.js'
import newDetails from './components/propertyDetails/newDetails.js'
import individualDetails from './components/propertyDetails/individualDetails.js'
import editDetails from './components/propertyDetails/editDetails.js'
import Footer from './components/Footer.js'
import individualExpense from './components/propertyExpenses/individualExpense.js'
import editExpense from './components/propertyExpenses/editExpense.js'
import newExpense from './components/propertyExpenses/newExpense.js'
import individualPayHistory from './components/payHistory/individualPayHistory.js'
import editPayHistory from './components/payHistory/editPayHistory.js'
import logPayHistory from './components/payHistory/logPayHistory.js'
import newPayHistory from './components/payHistory/newPayHistory.js'


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
          <Route exact path="/individualexpense" component={individualExpense}/>
          <Route exact path="/editexpense" component={editExpense}/>
          <Route exact path="/newexpense" component={newExpense}/>
          <Route exact path="/individualpayhistory" component={individualPayHistory}/>
          <Route exact path="/editpayhistory" component={editPayHistory}/>
          <Route exact path="/logpayhistory" component={logPayHistory}/>
          <Route exact path="/newpayhistory" component={newPayHistory}/>
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
