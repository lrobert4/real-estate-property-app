import React, { Component } from 'react'

export default class newPayHistory extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Create New Property Payment History Profile</h2>

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
                    
                    
                    <button class="btn btn-primary" type="submit">Create New Property Payment History Now</button>
                </form>

                </div>

                
                
            </div>
        )
    }
}
