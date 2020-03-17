import React, { Component } from 'react';
import axios from 'axios';
export default class newDetails extends Component {
    //Setup state to target elements. keep track of changes
    state = {
        newDetails: {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            yrBuilt: '',
            rent: '',
            dueDate: '',
            kitchenUpdate: '',
            roofUpdate: '',
            bathroomUpdate: ''
        }
    }
    handleChange = (event) => {
        console.log('handleChange')
        //Using setState to update the target form elements.
        const newDetails = { ...this.state.newDetails }
        newDetails[event.target.name] = event.target.value
        this.setState({
            newDetails
            
        })
    }
    // Upon form submission send data to api. Some info will be pasted to Details component.
    handleSubmit = (event) => {
        console.log('handleSubmit!')
        event.preventDefault();
        axios.post(`/api/details`, { ...this.state })
            .then(() => {
            })
    }
    render() {
       
        return (
            <div className="container">
                <div className="container inner-container">
                    <h2>Create New Rental Property Profile</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="firstName" placeholder="First name" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="phoneNum" placeholder="Phone Number" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="address" placeholder="Address" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="city" placeholder="City" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="state" placeholder="State" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="zipCode" placeholder="Zip Code" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="yrBuilt" placeholder="Year Built" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" name="rent" placeholder="Current Rent" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="date" className="form-control" name="dueDate" placeholder="Rent Due Date" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" name="kitchenUpdate" placeholder="Last Kitchen Update" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="date" className="form-control" name="roofUpdate" placeholder="Last Roof Upgrade" onChange={this.handleChange}></input>
                            </div>
                            <div className="col">
                                <input type="date" className="form-control" name="bathroomUpdate" placeholder="Last Bathroom Upgrade" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Notes</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="notes" rows="3" onChange={this.handleChange}></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Create Profile Now</button>
                    </form>
                </div>
            </div>
        )
    }
}

