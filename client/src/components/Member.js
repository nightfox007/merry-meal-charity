import React, { useState, useEffect } from 'react';
import {Button, Checkbox, Upload} from "antd";
import '../components/CSS/Form.css'

function Member(){
        return(
            <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Member Registration</div>
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
                                <input type="email" placeholder="Enter your email" />
                           </div>
                           <div class="input-box">
                                <span class="details">Contact Number</span>
                                <input type="text" placeholder="Enter your contact number" required maxLength="12"/>
                           </div>
                           <div class="input-box">
                                <span class="details">Date of birth</span>
                                <input type="date" min="1922-01-01" max="1962-12-31" required/>
                           </div>
                           <div className='input-box'>
                                <span className='details'>Disability</span>
                                <input type="text" placeholder='Describe your Disability' />
                            </div>
                           
                           <div class="input-box">
                                <span class="details">Disease Type</span>
                                <select className='dropdown' id='disease'>
                                  <option value="" disabled selected hidden>Choose your Disease Type</option>
                                  <option value="diabetes">Diabetes</option>    
                                  <option value="fattyLiver">Fatty Liver</option>    
                                  <option value="chronicKidney">Chronic Kidney</option>    
                                </select> 
                           </div>

                           <div class="input-box">
                                <span class="details">Gender</span>
                                <select className='dropdown' id="gender" required>
                                 <option value="" disabled selected hidden>Choose your Gender</option>
                                 <option value="Male">Male</option>  
                                 <option value="Female">Female</option>  
                                </select>
                           </div>

                           <div className='input-box'>
                                <span className='details'>Identity Card</span>
                                <Upload listType='picture' action={"http://localhost:3000/Member"} accept=".png,.jpeg,.jpg" >
                                <Button 
                                style={{width:"292px", borderRadius:"5px", height:"45px",}}>
                                    Click to Upload Picture
                                </Button>
                                </Upload>
                            </div>
                            
                            <div class="input-box">
                                <span class="details">location</span>
                                <select className='dropdown' id="location" required>
                                 <option value="" disabled selected hidden>Available Location within 10km radius</option>
                                 <option value="pj">Petaling Jaya</option>  
                                 <option value="kl">Kuala Lumpur</option>
                                 <option value="pg">Penang</option>
                                 <option value="mumbai">Mumbai</option>
                                 <option value="chennai">Chennai</option>
                                </select>
                                <p style={{"color":"blue"}}>*If your location is not within this area you will recieve the frozen food</p>
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


export default Member;