import React, { Component } from 'react';
import axios from 'axios';
export default class newDetails extends Component {
    //Setup state to target elements. keep track of changes
    state = {
        properties:[],
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
    // Upon form submission send data to api. Some info will be past to Details component.
    handleSubmit = (event) => {
        console.log('handleSubmit!')
        event.preventDefault();
        axios.post(`/api/details`, this.state.newDetails)
            .then((response) => {
                const postProperty = response.data;
                console.log(postProperty)
                this.setState({
                    properties: postProperty,
                })
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
                        <button className="btn btn-primary" type="submit">Create Profile Now</button>
                    </form>
                </div>
            </div>
        )
    }
}

