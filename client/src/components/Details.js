/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropertyOne from './images/property-one.png';



export default class Details extends Component {


    state = {
        properties: [],
        

    }


    getProperties = () => {
        axios.get('/api/details').then((response) => {
            const foundProperties = response.data;
            this.setState({
                properties: foundProperties,
            });
        });
    }

    clickDelete = (id) => {
        
        axios.delete('/api/details/' + id).then(() => {
            this.getProperties();
        });
    }

    
    componentDidMount() {
        this.getProperties();
    }


    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                

                    <h1>All Properties</h1>
                    <Link to={"/newdetails"}><button type="button" className="btn btn-secondary btn-lg btn-block button-ov">Add New Property</button></Link>

                    {
                        this.state.properties.map((property, i) => {
                            return (

                                <div key={ i }>
                                    <div className="col-6 col-md-4 col-sm-12 prop-img">
                                        <img src={PropertyOne} className="rounded float-left img-size" alt="Rental Property"></img>
                                    </div>
                                    <div className="col-md-8 prop-list-text col-sm-12">
                                        <h2>Rental Property Information</h2>
                                        <p><strong>Address:</strong> {property.address}, {property.city}, {property.state}, {property.zipCode}</p>
                                        <p><strong>Tenants:</strong> {property.firstName} {property.lastName} <strong>|</strong> <strong>Phone Number:</strong> {property.phoneNum}</p>
                                        <button onClick={ () => this.clickDelete(property._id) } className="btn btn-primary btn-lg inline-spacing">Delete</button>
                                        <Link to={"/property-expenses"}><button className="btn btn-primary btn-lg inline-spacing">Create Expense Report</button></Link>
                                        <Link to={"/pay-history"}><button className="btn btn-primary btn-lg">Pay History</button></Link>
                                    </div>
                                    <div className="clearfix extra-space"></div>
                                </div>
                            )
                        })
                    }

                    

                    
                    
                </div>
                    
            </div>
                
            
        )
    }
}
