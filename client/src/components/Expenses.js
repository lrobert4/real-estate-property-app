/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class Expenses extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    //Setup state to target elements. keep track of changes
    state = {
        expenses:[],
        
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        axios.get('/api/expenses')
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
                <h2>Rental Portfolio Expense Database</h2>
                <Link to={"/newexpense"}><button type="button" className="btn btn-secondary btn-lg btn-block button-ov">Create New Property Expense Report</button></Link>
                    <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Address</th>
                                <th scope="col">Tenant Name</th>
                                <th scope="col">View Expense Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>247 Red Robin Lane, Atlanta, GA, 30080</td>
                                <td>Otto Johnson</td>
                                <td><Link to={"/individualexpense"}><button class="btn btn-primary"> View Expense Report</button></Link></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>123 Shady Shoals, Atlanta, GA, 30060</td>
                                <td>John Gurly</td>
                                <td><Link to={"/individualexpense"}><button class="btn btn-primary"> View Expense Report</button></Link></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>7681 MLK Dr, Atlanta, GA, 30080</td>
                                <td>Angelica Mendez</td>
                                <td><Link to={"/individualexpense"}><button class="btn btn-primary"> View Expense Report</button></Link></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
