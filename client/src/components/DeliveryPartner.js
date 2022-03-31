import React from 'react';
import { useNavigate } from 'react-router-dom'
import {Checkbox} from "antd";
import '../styles/Form.css'

function DeliveryPartner (){
    const navigate = useNavigate();

    const thankyou = (e) => {
        navigate('/thankyou(DeliveryPartner)')
    }
    
        return(
            <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Delivery Service Partner Registration</div>
                <div className='content'>
                    <form action='#'>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>Company Name</span>
                                <input type="text" placeholder='Enter your Company Name' required minLength="3"/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Contact Name</span>
                                <input type="text" placeholder='Enter your Contact Name' required minLength="3"/>
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
                                <span class="details">Prefer Location you like to deliver</span>
                                <select className='dropdown' id='disease'>
                                  <option value="" disabled selected hidden>Choose the location</option>
                                  <option value="pj">Petaling Jaya</option>  
                                 <option value="kl">Kuala Lumpur</option>
                                 <option value="pg">Penang</option>
                                 <option value="mumbai">Mumbai</option>
                                 <option value="chennai">Chennai</option>    
                                </select> 
                           </div>
                            
                           <div className='input-box'>
                                <span className='details'>Street Address</span>
                                <input type="text" placeholder='Enter the company street address' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>City</span>
                                <input type="text" placeholder='Enter the company city' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>State</span>
                                <input type="text" placeholder='Enter the company State' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Zip code</span>
                                <input type="text" placeholder='Enter the zip code' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Country</span>
                                <input type="text" placeholder='Enter the company Country' required/>
                            </div>

                            

                            <div className='input-box'>
                            <Checkbox>
                                 <h1 style={{fontSize:"12px"}}>I agree to the <a href='# '>Terms of Service/Policy</a></h1>
                             </Checkbox> 
                            </div>
                             
                            <input className="button" type="submit" value="Register" onClick={thankyou}/>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
        )
    }


export default DeliveryPartner;