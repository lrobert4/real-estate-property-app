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


    getExpenses = () => {
        axios.get('/api/expenses').then((response) => {
            const foundExpenses = response.data;
            this.setState({
                expenses: foundExpenses,
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
    this.getExpenses();
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
                
                
                {/* Accessing the value of message from the state object 
                <h1>{this.state.message}</h1>
                */}
                <h2>Rental Portfolio Expense Database</h2>
                <Link to={"/newexpense"}><button type="button" className="btn btn-secondary btn-lg btn-block button-ov">Create New expenses Expense Report</button></Link>
                {
                    this.state.expenses.map((expenses, e) => {
                        return (
                            <div key={ e }>

                    <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Address</th>
                                <th scope="col">Property Tax</th>
                                <th scope="col">Mortgage</th>
                                <th scope="col">Landscaping Fee</th>
                                <th scope="col">Insurance</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                
                                <td>{expenses.address}, {expenses.city}, {expenses.state}, {expenses.zipCode}</td>
                                <td>{expenses.propertyTax}</td>
                                <td>{expenses.mortgage}</td>
                                <td>{expenses.landscapingFee}</td>
                                <td>{expenses.insurance}</td>
                                <td><Link to={"/individualexpense"}><button class="btn btn-primary"> Delete</button></Link></td>
                                </tr>
                                
                                
                            </tbody>
                    </table>
                    </div>
                        )
                })
                }
                
            </div>

        )
    }
}
