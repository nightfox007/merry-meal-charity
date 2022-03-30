import React, { Component } from 'react';
import '../styles/Form.css'

class ContactUs extends Component{
    render(){
        return(
            <div className='form-body'>
            <div className='contact'>
            <div class="address details">
               <div class="topic"><b>Address</b></div>
               <div class="text-one">Office Location</div>
              <div class="text-two">Kuala Lumpur,Selangaor</div>
            </div>
            <br></br>
           <div class="phone details">
              <div class="topic"><b>Phone</b></div>
              <div class="text-one">+0012 3445 6678</div>
              <div class="text-two">+0096 3434 5678</div>
           </div>
           <br></br>
         <div class="email details">
             <div class="topic"><b>Email</b></div>
             <div class="text-one">Merrymeal@gmail.com</div>
             <div class="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        
        <div className='form-container'>
            <div className='title'>Contact Us</div>
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
                      
                       </div>

                       <div class="input-box">
                            <span class="details">Message</span>
                            <textarea type="text" placeholder="Enter your message" />
                       </div>
                           
                        <div class="button">
                           <input type="submit" value="Send"/>
                        </div>
                    </div>
                </form>
            </div>
           
        </div>
        </div>
        )
    }
}

export default ContactUs;