import React from 'react';
import { useNavigate } from 'react-router-dom'
import {Button, Checkbox, Upload} from "antd";
import '../styles/Form.css'

function Caregiver(){
    const navigate = useNavigate();

const thankyou = (e) => {
    navigate('/thankyoucaregiver')
}
    
        return(
            <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Caregiver Registration</div>
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
                                <input type="date" min="1922-01-01" max="1962-12-31" required/>
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
                                <span className='details'>State the Relation</span>
                                <input type="text" placeholder='Relationship with your Member' required minLength="3"/>
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

export default Caregiver;
