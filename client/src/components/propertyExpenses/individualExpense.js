import React, { Component } from 'react'
import PropertyOne from '../images/property-one.png'
import { Link } from 'react-router-dom'

export default class individualExpense extends Component {
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
                        <h2>Property One Expense Report</h2>
                        <p>Address: 247 Red Robin Lane, Atlanta, GA, 30080</p>
                        <p>Tenants: Lauren Poole, Jay Cutler</p>
                        <p>Phone Number: 678-213-0987</p>
                        <Link to={"/editexpense"}><button className="btn btn-primary btn-lg">Edit Property Expense Report</button></Link>
                        
                    </div>
                    <div className="clearfix"></div>

                        <h2>Expense Breakdown</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                        
                                        <td>Property Tax: $1200/mo.</td>
                                        <td>Landscaping Fee: 1st of the month</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>Insurance: 1980</td>
                                        <td>Mortgage: 4/23/2018</td>
                                        
                                        </tr>
                                        
                                    
                                    </tbody>
                                </table>
                            </div>

                </div>
            </div>
        )
    }
}
