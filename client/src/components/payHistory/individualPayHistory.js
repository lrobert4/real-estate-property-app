import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropertyOne from '../images/property-one.png'

export default class individualPayHistory extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                {/* Accessing the value of message from the state object 
                <h1>{this.state.message}</h1>
                */}
            
                    <div className=".col-6 .col-md-4">
                        <img src={PropertyOne} className="rounded float-left img-size" alt="Rental Property"></img>
                    </div>

                    
                    <div className="col-md-8 prop-list-text">
                        <h2>Rental Property One</h2>
                        <p>Address: 247 Red Robin Lane, Atlanta, GA, 30080</p>
                        <p>Tenants: Lauren Poole, Jay Cutler</p>
                        <p>Phone Number: 678-213-0987</p>
                        <Link to={"/logpayhistory"}><button className="btn btn-primary btn-lg">Log New Payment</button></Link>
                        
                    </div>

                    <h3>Rental Property One Pay History</h3>

                    <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount Paid</th>
                                <th scope="col">Edit Payment Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>1-1-2020</td>
                                <td>$1200</td>
                                <td><Link to={"/editpayhistory"}><button className="btn btn-primary">Edit Logged Payment</button></Link></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>2-1-2020</td>
                                <td>$1200</td>
                                <td><Link to={"/editpayhistory"}><button className="btn btn-primary">Edit Logged Payment</button></Link></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>3-1-2020</td>
                                <td>$1200</td>
                                <td><Link to={"/editpayhistory"}><button className="btn btn-primary">Edit Logged Payment</button></Link></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
