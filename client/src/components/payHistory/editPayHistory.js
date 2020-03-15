import React, { Component } from 'react'

export default class editPayHistory extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Edit Rental Property One Profile</h2>

                <form>
                    <div className="row">
                        <div className="col">
                        <input type="date" className="form-control" placeholder="Date Paid"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Amount Paid"></input>
                        </div>
                    </div>
                   
                    <button class="btn btn-primary" type="submit">Save Changes Now</button>
                </form>

                </div>

                
                
            </div>
        )
    }
}
