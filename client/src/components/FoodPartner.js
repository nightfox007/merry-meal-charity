import React from 'react';
import { useNavigate } from 'react-router-dom'
import {Button, Checkbox, Upload} from "antd";
import '../styles/Form.css'

function FoodPartner (){
    const navigate = useNavigate();

    const thankyou = (e) => {
        navigate('/thankyou(FoodPartner)')
    }
    
        return(
            <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Food Service Partner Registration</div>
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
                           
                           <div className='input-box'>
                                <span className='details'>Food Description</span>
                                <input type="text"  placeholder='Describe the food provided' required />
                            </div>
                           
                           <div class="input-box">
                                <span class="details">The Meals you are Providing</span>
                                <select className='dropdown' id='disease'>
                                  <option value="" disabled selected hidden>Choose the Type of meal</option>
                                  <option value="HNVM">Hindu Non-Vegeterian Meal</option>    
                                  <option value="AVML">Vegetarian Indian Meal</option>    
                                  <option value="VGML">Vegetarian Vegan Meal</option>    
                                  <option value="DBML">Diabetic Meal</option>    
                                  <option value="LFML">Low Fat Meal</option>    
                                  <option value="LSML">Low Salt Meal</option>    
                                </select> 
                           </div>

                           <div class="input-box">
                                <span class="details">Amount of Meals Provided</span>
                                <select className='dropdown' id="gender" required>
                                 <option value="" disabled selected hidden>Choose the Amount</option>
                                 <option value="10">10</option>  
                                 <option value="20">20</option>  
                                 <option value="50">50</option>  
                                 <option value="100">100</option>
                                </select>
                           </div>

                           <div className='input-box'>
                                <span className='details'>Company Registration</span>
                                <Upload listType='picture' action={"http://localhost:3000/Member"} accept=".png,.jpeg,.jpg,.pdf,.doc" >
                                <Button 
                                style={{width:"292px", borderRadius:"5px", height:"45px",}}>
                                    Click to Upload Document
                                </Button>
                                </Upload>
                            </div>

                            <div className='input-box'>
                                <span className='details'>Halal Certifications</span>
                                <Upload listType='picture' action={"http://localhost:3000/Member"} accept=".png,.jpeg,.jpg,.pdf,.doc" >
                                <Button 
                                style={{width:"292px", borderRadius:"5px", height:"45px",}}>
                                    Click to Upload Document
                                </Button>
                                </Upload>
                            </div>

                            <div className='input-box'>
                                <span className='details'>Food Safety Manual</span>
                                <Upload listType='picture' action={"http://localhost:3000/Member"} accept=".png,.jpeg,.jpg,.pdf,.doc" >
                                <Button 
                                style={{width:"292px", borderRadius:"5px", height:"45px",}}>
                                    Click to Upload Document
                                </Button>
                                </Upload>
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
                                <input type="text" placeholder='Enter the company zip code' required/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Country</span>
                                <input type="text" placeholder='Enter the company Country' required/>
                            </div>

                            <div className='input-box'>
                                
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

export default FoodPartner;