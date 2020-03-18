import React from 'react';
import {Link, withRouter} from 'react-router-dom';

export const Nav = () => (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">Real Property Solutions</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/property-portfolio">Portfolio <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/property-expenses">Expenses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pay-history">Payment History</Link>
              </li>
              
            </ul>
          </div>
      </nav>


)


export default withRouter(Nav);