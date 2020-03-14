import React, { Component } from 'react'

export default class newDetails extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="container inner-container">
                <h2>Create New Rental Property Profile</h2>

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
                        <input type="text" className="form-control" placeholder="Year Built"></input>
                        </div>
                        <div className="col">
                        <input type="text" className="form-control" placeholder="Current Rent"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="date" className="form-control" placeholder="Rent Due Date"></input>
                        </div>
                        <div className="col">
                        <input type="date" className="form-control" placeholder="Last Kitchen Update"></input>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col">
                        <input type="date" className="form-control" placeholder="Last Roof Upgrade"></input>
                        </div>
                        <div className="col">
                        <input type="date" className="form-control" placeholder="Last Bathroom Upgrade"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Notes</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Create Profile Now</button>
                </form>

                </div>
                
            </div>
        )
    }
}
