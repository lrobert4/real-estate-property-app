import React, { Component } from 'react'

export default class editExpense extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Edit Rental Property Expense Report</h2>

                <form>
                    <div className="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="First name"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Phone Number"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Email Address"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Address"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="City"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="State"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Zip Code"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Property Tax"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Landscaping Fee"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Insurance"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Mortgage"></input>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" type="submit">Save Changes Now</button>
                </form>

                </div>

                
                
            </div>
        )
    }
}
