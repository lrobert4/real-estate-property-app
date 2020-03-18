/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class PayHistory extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    //Setup state to target elements. keep track of changes
    state = {
        history:[],
        redirect: false,
        
    }


    getHistory = () => {
        axios.get('/api/payhistory').then((response) => {
            const foundHistory = response.data;
            this.setState({
                history: foundHistory,
            });
        });
    }

    clickDelete = (id) => {
        
        axios.delete('/api/payhistory/' + id).then(() => {
            this.getHistory();
        });
    }


    componentDidMount() {
        this.getHistory();
    }


    render() {

        return (
            <div>
                
                <div className="container">
                
                
                <h2>Property Pay History Database</h2>
                <Link to={"/newpayhistory"}><button type="button" className="btn btn-secondary btn-lg btn-block button-ov">Create New Pay History Report</button></Link>
                    
                {
                    this.state.history.map((history, e) => {
                        return (
                            <div key={ e }>

                    <table className="table table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Address</th>
                                <th scope="col">Tenant Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Amount Paid</th>
                                <th scope="col">Date Paid</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{history.address}, {history.city}, {history.state}, {history.zipCode}</td>
                                <td>{history.firstName} {history.lastName}</td>
                                <td>{history.phoneNum}</td>
                                <td>{history.amountPaid}</td>
                                <td>{history.datePaid}</td>
                                <td><button onClick={ () => this.clickDelete(history._id) } className="btn btn-primary"> Delete</button></td>
                                </tr>
                            
                                
                            </tbody>
                    </table>
                </div>
                
                )
        })
        }
            

            </div>
            </div>
        )
    }
}
