import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HeroImage from './../images/helping-needy-people.jpg'
import member from './../images/member.jpg';
import caregiver from './../images/caregiver.jpg';
import Foodpartner from './../images/Foodpartner-img.jpg';
import Deliveryrider from './../images/Delivery-rider.webp';
import Food from './../images/Food.jpg';
import '../styles/Home.css'
import '../styles/Form.css'

class Home extends Component{
    
    render(){
        return(
            
            <div className='home'>
                <div className='form-body'>
        <div className='form-container'>
            <div className='content'>
            <div className='hero-banner'>
                    <img src={HeroImage} alt="hero banner"/>
                </div>
            </div>
           
        </div>
        </div>       

                <div className='form-body'>
        <div className='form-container'>
            <div className='title'>Want to Recieve Food Help?</div>
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                      <div class="card">
                      <img src={member} className="Background" alt='member'/>
                      <br></br>
                       <h3><b>Member</b></h3>
                       <p>To be a member, the user has to go through a registration process to be a member. </p>
                       <p> First, the members have to fill-in the require details for member registration.</p> 
                       <p>Members need to fill the details such as first name, last name, gender and DOB. </p> 
                       <p> The member must be a senior citizen that is 60 years and above.</p> 
                       <p>Members can choose the type of disease that they are affected. (Diabetes, Fatty Liver, Chronic kidney) </p> 
                       
                       <Link to="/member" className='btn btn-warning shadow'>Become a Member</Link>
                      </div>
                    </div>

                    <div className='column'>
                      <div class="card">
                      <img src={caregiver} className="Background" alt='caregiver' style={{height:"auto", width:"auto"}}/>
                      <br></br>
                       <h3><b>CareGiver</b></h3>
                       <p>Care givers will register on behalf of the person who needs help becoming a member and requesting for food. </p>
                       <p>Care givers need to fill-in their details such as First name, last name, Contact number and Email.</p> 
                       <p>Care givers have to state what are the relationship between them and the members. </p> 
                       <p>Care givers will fill-in all the required information for the members that they are recommending</p> 
                       <p>Care givers will help to choose the meal type that the member wish to have. </p> 
                       <Link to="/caregiver" className='btn btn-warning shadow'>Become a caregiver</Link>
                      </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>

        <div className='form-body'>
        <div className='form-container'>
            <div className='title'>Do You Want To Be Our Partner?</div>
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                      <div class="card">
                      <img src={Foodpartner} className="Background" alt='Food Partner' />
                      <br></br>
                       <h3><b>Food Partner</b></h3>
                       <p>Come join us to be our food provider and help the needy people who are in need</p>
                       <p>Food Partners need to select the types of meals they are providing. (Religious, vegetarian or dietary)</p> 
                       <p>Food Partners need to describe what food service they are providing </p> 
                       <p>Food Partners need to describe how many meals they are providing</p> 
                       <p>Food Partners need to upload the documents of Food Safety Manual, Company Registration, Halal Certificate for verification purposes </p> 
                       
                       <Link to="/foodpartner" className='btn btn-warning shadow'>Become a Food Partner</Link>
                      </div>
                    </div>

                    <div className='column'>
                      <div class="card">
                      <img src={Deliveryrider} className="Background" alt='Delivery Partner' style={{height:"168px", width:"auto"}} />
                      <br></br>
                       <h3><b>Delivery Partner</b></h3>
                       <p>Come join us to be our delivery service provider and help the needy people who are in need </p>
                       <p>Delivery Service Providers also have to fill-in the required details for partnership</p> 
                       <p>Delivery Service Providers need to choose the preferred location they wish to provide the delivery service </p> 
                     
                       <Link to="/deliverypartner" className='btn btn-warning shadow'>Become a Delivery Partner</Link>
                      </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>

                <div className='form-body'>
        <div className='form-container'>
            <div className='title'>How Safe is Our Food?</div>
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                      <div class="card">
                      <img src={Food} className="Background" alt='Food Safety' />
                      <br></br>
                       <h3><b>Food Safety Management</b></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, 
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       
                       <Link to="/foodsafety" className='btn btn-warning shadow'>Food Safety Procedure</Link>
                      </div>
                    </div>

                </div>
            </div>
           
        </div>
        </div>
            </div>
            
        )
    }
}

export default Home ;