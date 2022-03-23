import React, { Component } from 'react';

class Home extends Component{
    
    render(){
        return(
            <div className='container'>
                <div>
                    <h2>Hero Banner</h2>
                    <button onClick={() => this.props.history.push(`/Donate`)}>Donate to Us</button>
                </div>

                <div>
                    <h3>What do we do?</h3>
                    <p>This sections explains what we do</p>
                </div>

                <div>
                    <h3>Do you want to be a food hero?</h3>
                    <p>This sections explains how they can become a food hero, by being a caregiver, donor, partner or volunteer</p>
                </div>

                <div>
                    <h3>What food do we provide?</h3>
                    <button onClick={() => this.props.history.push(`/FoodMenu`)}>Click to Food Menu Options</button>
                </div>

                <div>
                    <h3>Want to recieve a food help?</h3>
                    <button onClick={() => this.props.history.push(`/Member`)}>Become a member</button>
                    <button onClick={() => this.props.history.push(`/CareGiver`)}>Become a Caregiver</button>
                </div>

                <div>
                    <h3>Do you want to be our partner?</h3>
                    <button onClick={() => this.props.history.push(`/FoodPartner`)}>Become a Food Partner</button>
                    <button onClick={() => this.props.history.push(`/DeliveryPartner`)}>Become a Delivery Partner</button>
                </div>

                <div>
                    <h3>List of Partners</h3>
                </div>

                <div>
                    <h3>How safe is our food?</h3>
                    <button onClick={() => this.props.history.push(`/FoodSafety`)}>Click for Food Safety Procedure</button>
                </div>
            </div>
            
        )
    }
}

export default Home ;