import React, { Component } from 'react';
import {Checkbox} from "antd";
import '../components/CSS/Member.css'

class Volunteer extends Component{
    render(){
        return(
            <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Volunteer Registration</div>
                <div className='content'>
                    <form action='#'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>First Name</span>
                                <input type="text" placeholder='Enter your First Name' required minLength="3"/>
                            </div>

                            <div className='input-box'>
                                <span className='details'>Last Name</span>
                                <input type="text" placeholder='Enter your Last Name' required minLength="3"/>
                            </div>

                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="email" placeholder="Enter your email" required/>
                           </div>

                           <div class="input-box">
                                <span class="details">Contact Number</span>
                                <input type="text" placeholder="Enter your contact number" required maxLength="12"/>
                           </div>
                           <div class="input-box">
                                <span class="details">Date of birth</span>
                                <input type="date" min="1960-1-1" max="2002-12-31" required/>
                           </div>
                           
                           <div class="input-box">
                                <span class="details">Gender</span>
                                <select className='dropdown' id="gender" required>
                                 <option value="" disabled selected hidden>Choose your Gender</option>
                                 <option value="Male">Male</option>  
                                 <option value="Female">Female</option>  
                                </select>
                           </div>

                            
                            <div class="input-box">
                                <span class="details">Employment Status</span>
                                <select className='dropdown' id="employmentStatus" required>
                                 <option value="" disabled selected hidden>Choose your Employment Status</option>
                                 <option value="fullTime">Full-Time</option>  
                                 <option value="partTime">Part-Time</option>
                                </select>
                           </div>

                           <div class="input-box">
                                <span class="details">Availability for Part-time workers</span>
                                <select className='dropdown' id="employmentStatus" required>
                                 <option value="" disabled selected hidden>Choose your Availability</option>
                                 <option value="aWeek">Once a week</option>  
                                 <option value="twoWeek">2 Times a week</option>
                                 <option value="threeWeek">3 Times a week</option>
                                 <option value="Weekends">On Weekends</option>
                                </select>
                           </div>

                           <div class="input-box">
                                <span class="details">Volunteer Role</span>
                                <select className='dropdown' id="employmentStatus" required>
                                 <option value="" disabled selected hidden>Choose Volunteer Role</option>
                                 <option value="packgaing">Packgaing</option>  
                                 <option value="cook">Cook</option>
                                 <option value="serving">Serving</option>
                                 <option value="safetyInspection">Safety Inspection</option>
                                 <option value="eventManagement">Event Management</option>
                                 <option value="adminstration">Adminstration</option>
                                 <option value="warehouseTeam">Warehouse Team</option>
                                </select>
                           </div>

                           <div className='input-box'>
                                <span className='details'>Reasons for getting involved</span>
                                <input type="text" placeholder='Describe your Reasons' required minLength="3"/>
                            </div>

                           <div className='input-box'>
                                <span className='details'>Street Address</span>
                                <input type="text" placeholder='Enter your street address' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>City</span>
                                <input type="text" placeholder='Enter your city' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>State</span>
                                <input type="text" placeholder='Enter your State' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Zip code</span>
                                <input type="text" placeholder='Enter your zip code' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Country</span>
                                <input type="text" placeholder='Enter your Country' required/>
                            </div>

                            <div className='input-box'>
                               
                            </div>

                            <div className='input-box'>
                            <Checkbox>
                                 <h1 style={{fontSize:"12px"}}>I agree to the <a href='# '>Terms of Service/Policy</a></h1>
                             </Checkbox> 
                            </div>
                             
                            <div class="button">
                               <input type="submit" value="Register"/>
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
        )
    }
}

export default Volunteer;