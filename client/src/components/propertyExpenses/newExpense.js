import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class newExpense extends Component {
    
    //Setup state to target elements. keep track of changes
    state = {
        expenses:[],
        redirect: false,
        newExpenses: {
            
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            propertyTax: '',
            landscapingFee: '',
            insurance: '',
            mortgage: '',
            
        }
    }

    handleChange = (event) => {
        console.log('handleChange')
        //Using setState to update the target form elements.
        const newExpenses = { ...this.state.newExpenses }
        newExpenses[event.target.name] = event.target.value
        this.setState({
            newExpenses
            
        })
    }
    // Upon form submission send data to api. Some info will be past to Details component.
    handleSubmit = (event) => {
        console.log('handleSubmit!')
        event.preventDefault();
        axios.post(`/api/expenses`, this.state.newExpenses)
            .then((response) => {
                const postExpense = response.data;
                console.log(postExpense)
                this.setState({
                    expenses: postExpense,
                })
                this.setRedirect()
            })
            
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
    
    renderRedirect = () => {
        
          return <Redirect to='/property-expenses' />
        
      }


    render() {
        if(this.state.redirect){
            return <Redirect to='/property-expenses' />
        }
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Create New Rental Property Expense Report</h2>

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
                    <div class="row">
                        <div className="col">
                        <label>Phone Number:</label> 
                        <input type="text" className="form-control" name="phoneNum" placeholder="Phone Number" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Email Address:</label> 
                        <input type="text" className="form-control" name="email" placeholder="Email Address" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <label>Address:</label> 
                        <input type="text" className="form-control" name="address" placeholder="Address" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>City:</label> 
                        <input type="text" className="form-control" name="city" placeholder="City" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <label>State:</label> 
                        <input type="text" className="form-control" name="state" placeholder="State" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Zip Code:</label> 
                        <input type="text" className="form-control" name="zipCode" placeholder="Zip Code" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <label>Property Tax:</label> 
                        <input type="text" className="form-control" name="propertyTax" placeholder="Property Tax" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Landscaping Fee:</label> 
                        <input type="text" className="form-control" name="landscapingFee" placeholder="Landscaping Fee" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <label>Insurance:</label> 
                        <input type="text" className="form-control" name="insurance" placeholder="Insurance" onChange={this.handleChange}></input>
                        </div>
                        <div className="col">
                        <label>Mortgage:</label> 
                        <input type="text" className="form-control" name="mortgage" placeholder="Mortgage" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" type="submit">Create New Expense Report Now</button>
                </form>

                </div>

                
                
            </div>
        )
    }
}
