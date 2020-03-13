/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropertyOne from './images/property-one.png'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Details extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        properties: [],
        firstName: '',
        lastName: '',
        phoneNum: '',

    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get('/api/details')
            .then((res) => {
                this.setState({message: res.data})
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                    {/* Accessing the value of message from the state object 
                    <h1>{this.state.message}</h1>
                    */}
                    <h1>All Properties</h1>
                    <Link to={"/propertyDetails/newDetails"}><button type="button" className="btn btn-secondary btn-lg btn-block button-ov">Add New Property</button></Link>

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
