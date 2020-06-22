import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const Navi = () => (

      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //     <Link className="navbar-brand" to="/">Real Property Solutions</Link>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNav">
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/property-portfolio">Portfolio <span className="sr-only">(current)</span></Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/property-expenses">Expenses</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/pay-history">Payment History</Link>
      //         </li>
              
      //       </ul>
      //     </div>
      // </nav>
      
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Real Property Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/property-portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/property-expenses">Expenses</Nav.Link>
          <Nav.Link href="/pay-history">Pay History</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>


)


export default withRouter(Navi);