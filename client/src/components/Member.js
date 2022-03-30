<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { Button, Checkbox, Upload } from 'antd'
import '../styles/Form.css'
import axios from 'axios'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
  dob: '',
  disability: '',
  disease_type: '',
  gender: '',
  location: '',
  street_address: '',
  city: '',
  state: '',
  zip_code: '',
  country: '',
}

function Member() {
  const [states, setState] = useState(initialState)

  const {
    first_name,
    last_name,
    email,
    contact_number,
    dob,
    disability,
    disease_type,
    gender,
    location,
    street_address,
    city,
    state,
    zip_code,
    country,
  } = states

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/members/post', {
        first_name,
        last_name,
        email,
        contact_number,
        dob,
        disability,
        disease_type,
        gender,
        location,
        street_address,
        city,
        state,
        zip_code,
        country,
      })
      .then(() => {
        setState({
          first_name: '',
          last_name: '',
          email: '',
          contact_number: '',
          dob: '',
          disability: '',
          disease_type: '',
          gender: '',
          location: '',
          street_address: '',
          city: '',
          state: '',
          zip_code: '',
          country: '',
        })
        setTimeout(() => navigate.push('/'), 500)
      })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  return (
    <div className='form-body'>
      <div className='form-container'>
        <div className='title'>Member Registration</div>
        <div className='content'>
          <form onSubmit={handleSubmit}>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>First Name</span>
                <input
                  type='text'
                  placeholder='Enter your First Name'
                  required
                  minLength='3'
                  id='first_name'
                  name='first_name'
                  value={first_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>Last Name</span>
                <input
                  type='text'
                  placeholder='Enter your Last Name'
                  required
                  minLength='3'
                  id='last_name'
                  name='last_name'
                  value={last_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>Email</span>
                <input
                  type='email'
                  placeholder='Enter your email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>Contact Number</span>
                <input
                  type='text'
                  placeholder='Enter your contact number'
                  required
                  maxLength='12'
                  id='contact_number'
                  name='contact_number'
                  value={contact_number}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>Date of birth</span>
                <input
                  type='date'
                  min='1922-01-01'
                  max='1962-12-31'
                  required
                  id='dob'
                  name='dob'
                  value={dob}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>Disability</span>
                <input
                  type='text'
                  placeholder='Describe your Disability'
                  id='disability'
                  name='disability'
                  value={disability}
                  onChange={handleInputChange}
                />
              </div>

              <div className='input-box'>
                <span className='details'>Disease Type</span>
                <select className='dropdown' id='disease'>
                  <option value='' disabled selected hidden>
                    Choose your Disease Type
                  </option>
                  <option value='diabetes'>Diabetes</option>
                  <option value='fattyLiver'>Fatty Liver</option>
                  <option value='chronicKidney'>Chronic Kidney</option>
                </select>
              </div>
=======
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
>>>>>>> 3c5e6cb8acac811c0cb54f367912d9452a40fc2d

              <div className='input-box'>
                <span className='details'>Gender</span>
                <select className='dropdown' id='gender' required>
                  <option value='' disabled selected hidden>
                    Choose your Gender
                  </option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>

              <div className='input-box'>
                <span className='details'>Identity Card</span>
                <Upload
                  listType='picture'
                  action={'http://localhost:3000/Member'}
                  accept='.png,.jpeg,.jpg'
                >
                  <Button
                    style={{
                      width: '292px',
                      borderRadius: '5px',
                      height: '45px',
                    }}
                  >
                    Click to Upload Picture
                  </Button>
                </Upload>
              </div>

              <div className='input-box'>
                <span className='details'>location</span>
                <select className='dropdown' id='location' required>
                  <option value='' disabled selected hidden>
                    Available Location within 10km radius
                  </option>
                  <option value='pj'>Petaling Jaya</option>
                  <option value='kl'>Kuala Lumpur</option>
                  <option value='pg'>Penang</option>
                  <option value='mumbai'>Mumbai</option>
                  <option value='chennai'>Chennai</option>
                </select>
                <p style={{ color: 'blue' }}>
                  *If your location is not within this area you will recieve the
                  frozen food
                </p>
              </div>

              <div className='input-box'>
                <span className='details'>Street Address</span>
                <input
                  type='text'
                  placeholder='Enter your street address'
                  required
                  id='street_address'
                  name='street_address'
                  value={street_address}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>City</span>
                <input
                  type='text'
                  placeholder='Enter your city'
                  required
                  id='city'
                  name='city'
                  value={city}
                  onChange={handleInputChange}
                />
              </div>
              <div className='input-box'>
                <span className='details'>State</span>
                <input
                  type='text'
                  placeholder='Enter your State'
                  required
                  id='state'
                  name='state'
                  value={state}
                  onChange={handleInputChange}
                />
              </div>

              <div className='input-box'>
                <span className='details'>Zip code</span>
                <input
                  type='text'
                  placeholder='Enter your zip code'
                  required
                  id='zip_code'
                  name='zip_code'
                  value={zip_code}
                  onChange={handleInputChange}
                />
              </div>

              <div className='input-box'>
                <span className='details'>Country</span>
                <input
                  type='text'
                  placeholder='Enter your Country'
                  required
                  id='country'
                  name='country'
                  value={country}
                  onChange={handleInputChange}
                />
              </div>

              <div className='input-box'></div>

              <div className='input-box'>
                <Checkbox>
                  <h1 style={{ fontSize: '12px' }}>
                    I agree to the <a href='/#'>Terms of Service/Policy</a>
                  </h1>
                </Checkbox>
              </div>

              <input className='button' type='submit' value='Register' />
              {/* <button className='button'>Register</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Member
