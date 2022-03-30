import React, { useState } from 'react'
import {Checkbox} from "antd";
import { PayPalButton } from "react-paypal-button-v2";

const Donation = () => {
  
  return (
    <div className='form-body'>
            <div className='form-container'>
                <div className='title'>Donation</div>
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
                           
                            <div className='input-box'>
                                <span className='details'>Country</span>
                                <input type="text" placeholder='Enter your Country' required/>
                            </div>

                            <div className='input-box'>
                              <span className='details'>Donation Amount</span>
                              <input type="text" placeholder='Enter your Donation Amount' required/>
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
                             
                            <input className="button" type="submit" value="Donate"/>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
  )
}

export default Donation
