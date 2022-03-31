import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Checkbox} from "antd";
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios'

const initialState ={
  first_name: '',
  last_name: '',
  email: '',
  contact_number: '',
  country: '',
  donation_amout:''
}

function Donation (){
  const [state,setState] = useState(initialState)

  const navigate = useNavigate()

  const thankyou = (e) => {
    navigate('/thankyou(donors)')
}

  const {
    first_name,
    last_name,
    email,
    contact_number,
    country,
    donation_amout
  } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/donors/post',{
      first_name,
      last_name,
      email,
      contact_number,
      country,
      donation_amout
    }).then(() => {
      setState({
        first_name: '',
        last_name:'',
        email:'',
        contact_number:'',
        country:'',
        donation_amout:''
      })
    })
  }

  const handleInputChange = (e) => {
    const { name, value} = e.target
    setState({ ...state, [name]:value })
  }
  
  return (
    <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Donation</div>
                <div className='content'>
                    <form onSubmit={handleSubmit}>
                        <div className='user-details'>
                            <div className='input-box'>
                                <span className='details'>First Name</span>
                                <input type="text" 
                                placeholder='Enter your First Name' 
                                required minLength="3"
                                id="first_name"
                                name='first_name'
                                value={first_name}
                                onChange={handleInputChange}/>
                            </div>
                            <div className='input-box'>
                                <span className='details'>Last Name</span>
                                <input type="text" 
                                placeholder='Enter your Last Name' 
                                required minLength="3"
                                id="last_name"
                                name='last_name'
                                value={last_name}
                                onChange={handleInputChange}/>
                            </div>
                            <div class="input-box">
                                <span class="details">Email</span>
                                <input type="email" placeholder="Enter your email" 
                                id="email"
                                name='email'
                                value={email}
                                onChange={handleInputChange}/>
                           </div>
                           <div class="input-box">
                                <span class="details">Contact Number</span>
                                <input type="text" 
                                placeholder="Enter your contact number" 
                                required maxLength="12"
                                id="contact_number"
                                name='contact_number'
                                value={contact_number}
                                onChange={handleInputChange}/>
                           </div>
                           
                            <div className='input-box'>
                                <span className='details'>Country</span>
                                <input type="text" 
                                placeholder='Enter your Country' 
                                required
                                id="country"
                                name='country'
                                value={country}
                                onChange={handleInputChange}/>
                            </div>

                            <div className='input-box'>
                              <span className='details'>Donation Amount</span>
                              <input type="text" 
                              placeholder='Enter your Donation Amount' 
                              required
                              id="donation_amout"
                              name='donation_amout'
                              value={donation_amout}
                              onChange={handleInputChange}/>
                            </div>

                            <div className='input-box'>
                            <Checkbox>
                                 <h1 style={{fontSize:"12px"}}>I agree to the <a href='# '>Terms of Service/Policy</a></h1>
                             </Checkbox> 
                            </div>

                            <div className='input-box'>
                            <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
                            </div>
                             
                            <input className="button" type="submit" value="Donate" />
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
  )
}

export default Donation
