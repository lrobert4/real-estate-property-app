import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


export default class Homepage extends Component {
    render() {
        return (
            <div className="full-screen">
                <div className="vertical-aligner">
                
                    <h1 className="home-styles">Welcome to Real Property Solutions Property Management App!</h1>
                    <Button href="/property-portfolio" variant="primary" size="lg">
                        Create New Profile
                    </Button>
                </div>
                

            </div>
        )
    }
}
