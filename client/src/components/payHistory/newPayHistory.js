import React, { Component } from 'react';
import axios from 'axios';


export default class newPayHistory extends Component {

    //Setup state to target elements. keep track of changes
    state = {
        history:[],
        newHistory: {
            
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            amountPaid: '',
            datePaid: '',
            
        }
    }

    handleChange = (event) => {
        console.log('handleChange')
        //Using setState to update the target form elements.
        const newHistory = { ...this.state.newHistory }
        newHistory[event.target.name] = event.target.value
        this.setState({
            newHistory
            
        })
    }

    // Upon form submission send data to api. Some info will be past to Details component.
    handleSubmit = (event) => {
        
        event.preventDefault();
        axios.post(`/api/payhistory`, this.state.newHistory)
            .then((response) => {
                const postHistory = response.data;
                console.log(postHistory)
                this.setState({
                    history: postHistory,
                })
                
            })

            
            
    }


    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Create New Property Payment History Profile</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                        <label>First Name:</label>
                        <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Last Name:</label>
                        <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Phone Number:</label>
                        <input type="text" className="form-control" name="phoneNum" placeholder="Phone Number" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Email Address:</label>
                        <input type="text" className="form-control" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Address:</label>
                        <input type="text" className="form-control" name="address" placeholder="Address" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>City:</label>
                        <input type="text" className="form-control" name="city" placeholder="City" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>State:</label>
                        <input type="text" className="form-control" name="state" placeholder="State" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Zip Code:</label>
                        <input type="text" className="form-control" name="zipCode" placeholder="Zip Code" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Amount Paid:</label>
                        <input type="text" className="form-control" name="amountPaid" placeholder="Amount Paid" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Date Paid:</label>
                        <input type="date" className="form-control" name="datePaid" placeholder="Date Paid" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    
                    
                    <button className="btn btn-primary" type="submit">Create New Property Payment History Now</button>
                </form>

                </div>

                
                
            </div>
        )
    }
}
