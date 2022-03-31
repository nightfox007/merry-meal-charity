import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from 'antd'
import '../styles/Form.css'
import axios from 'axios'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
  dob: '',
  gender: '',
  employment_status:'',
  availability_for_part_time_workers:'',
  volunteer_role:'',
  reasons_for_getting_involved:'',
  street_address: '',
  city: '',
  state: '',
  zip_code: '',
  country: '',
}

function Volunteer (){
  const navigate = useNavigate();

    const thankyou = (e) => {
        navigate('/thankyou(volunteer)')
    }

    const [states,setState] = useState(initialState)

    const {
      first_name,
      last_name,
      email,
      contact_number,
      dob,
      gender,
      employment_status,
      availability_for_part_time_workers,
      volunteer_role,
      reasons_for_getting_involved,
      street_address,
      city,
      state,
      zip_code,
      country,
    } = states

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/volunteers/post',{
        first_name,
        last_name,
        email,
        contact_number,
        dob,
        gender,
        employment_status,
        availability_for_part_time_workers,
        volunteer_role,
        reasons_for_getting_involved,
        street_address,
        city,
        state,
        zip_code,
        country
      }).then(() => {
        setState({
          first_name:'',
          last_name:'',
          email:'',
          contact_number:'',
          dob:'',
          gender:'',
          employment_status:'',
          availability_for_part_time_workers:'',
          volunteer_role:'',
          reasons_for_getting_involved:'',
          street_address:'',
          city:'',
          state:'',
          zip_code:'',
          country:''
        })
      })
    }

    const handleInputChange = (e) =>{
      const {name,value} =e.target
      setState({...state, [name]:value})
    }

    return (
      <div className='form-body'>
        <div className='form-container'>
          <div className='title'>Volunteer Registration</div>
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

                <div class='input-box'>
                  <span class='details'>Email</span>
                  <input type='email' placeholder='Enter your email' required 
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleInputChange}/>
                </div>

                <div class='input-box'>
                  <span class='details'>Contact Number</span>
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
                <div class='input-box'>
                  <span class='details'>Date of birth</span>
                  <input type='date' min='1960-1-1' max='2002-12-31' required 
                  id='dob'
                  name='dob'
                  value={dob}
                  onChange={handleInputChange}/>
                </div>

                <div class='input-box'>
                  <span class='details'>Gender</span>
                  <select className='dropdown' id='gender' required>
                    <option disabled selected hidden 
                    id='gender'
                    name='gender'
                    value={gender}
                    onChange={handleInputChange}>
                      Choose your Gender
                    </option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                </div>

                <div class='input-box'>
                  <span class='details'>Employment Status</span>
                  <select className='dropdown' id='employmentStatus' required>
                    <option disabled selected hidden
                    id='employment_status'
                    name='employment_status'
                    value={employment_status}
                    onChange={handleInputChange}>
                      Choose your Employment Status
                    </option>
                    <option value='fullTime'>Full-Time</option>
                    <option value='partTime'>Part-Time</option>
                  </select>
                </div>

                <div class='input-box'>
                  <span class='details'>
                    Availability for Part-time workers
                  </span>
                  <select className='dropdown' id='employmentStatus' required>
                    <option disabled selected hidden
                    id='availability_for_part_time_workers'
                    name='availability_for_part_time_workers'
                    value={availability_for_part_time_workers}
                    onChange={handleInputChange}>
                      Choose your Availability
                    </option>
                    <option value='aWeek'>Once a week</option>
                    <option value='twoWeek'>2 Times a week</option>
                    <option value='threeWeek'>3 Times a week</option>
                    <option value='Weekends'>On Weekends</option>
                  </select>
                </div>

                <div class='input-box'>
                  <span class='details'>Volunteer Role</span>
                  <select className='dropdown' id='employmentStatus' required>
                    <option disabled selected hidden
                     id='volunteer_role'
                     name='volunteer_role'
                     value={volunteer_role}
                     onChange={handleInputChange}>
                      Choose Volunteer Role
                    </option>
                    <option value='packgaing'>Packgaing</option>
                    <option value='cook'>Cook</option>
                    <option value='serving'>Serving</option>
                    <option value='safetyInspection'>Safety Inspection</option>
                    <option value='eventManagement'>Event Management</option>
                    <option value='adminstration'>Adminstration</option>
                    <option value='warehouseTeam'>Warehouse Team</option>
                  </select>
                </div>

                <div className='input-box'>
                  <span className='details'>Reasons for getting involved</span>
                  <input
                    type='text'
                    placeholder='Describe your Reasons'
                    required
                    minLength='3'
                    id='reasons_for_getting_involved'
                    name='reasons_for_getting_involved'
                    value={reasons_for_getting_involved}
                    onChange={handleInputChange}
                  />
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
                  <input type='text' placeholder='Enter your city' required 
                   id='city'
                   name='city'
                   value={city}
                   onChange={handleInputChange}/>
                </div>
                <div className='input-box'>
                  <span className='details'>State</span>
                  <input type='text' placeholder='Enter your State' required 
                  id='state'
                  name='state'
                  value={state}
                  onChange={handleInputChange}/>
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
                   onChange={handleInputChange}/>
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
                      I agree to the <a href='# '>Terms of Service/Policy</a>
                    </h1>
                  </Checkbox>
                </div>

                <input className="button" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

export default Volunteer
