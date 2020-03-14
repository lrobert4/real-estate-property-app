import React, { Component } from 'react'
import PropertyOne from '../images/property-one.png'

export default class individualDetails extends Component {
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
                        <button className="btn btn-primary btn-lg">View Property Full Details</button>
                        
                    </div>
                    
                </div>
                    
            </div>
        )
    }
}
