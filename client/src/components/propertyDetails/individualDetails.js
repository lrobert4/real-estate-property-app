import React, { Component } from 'react'
import PropertyOne from '../images/property-one.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class individualDetails extends Component {
    state = {
        properties: [],
    
    }

    getCreatures = () => {
        axios.get('/api/details').then((response) => {
            const foundProperties = response.data;
            this.setState({
                properties: foundProperties,
            });
        });
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getCreatures();
    }


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
                        <Link to={"/editDetails"}><button className="btn btn-primary btn-lg">Edit Property Profile Details</button></Link>
                        
                    </div>
                    <div className="clearfix"></div>
                        <h2>Property Details</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                        
                                        <td>Current Rent: $1200/mo.</td>
                                        <td>Rent Due Date: 1st of the month</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>Year Built: 1980</td>
                                        <td>Last Kitchen Upgrade: 4/23/2018</td>
                                        
                                        </tr>
                                        <tr>
                                        
                                        <td>Last Bathroom Upgrade: 3/12/2018</td>
                                        <td>Last Roof Upgrade: 6/10/2018</td>
                                        
                                        </tr>
                                    
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h2>Notes</h2>
                                <p> Per contract agreement the renter will be responsible for up
                                    the landscape of the property and all utilities.</p>
                            </div>
                    
                    
                </div>
                 
            </div>

            
        )
    }
}
