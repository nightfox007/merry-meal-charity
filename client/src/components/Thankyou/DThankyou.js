import React from 'react';
import {Button} from 'react-bootstrap'
// import '../CSS/Thankyou.css'
import '../../styles/Thankyou.css'

function DThankyou(){
        return(
            <div className='thankyou-body'>
            <div className='thankyou-container'>
                <div className='title'>Thanks for Donating</div>
                <div className='content'>
                    <div className='user-details'>
                    <h3>The registration process is complete!!</h3>
                    <h3>We will evalute the volunteer registration if it is successful we will send a confirmation email or call.</h3> 
                    <h3>To let you know you are a volunteer and welcome you to the MerryMeal family </h3>
                    <h3>Thank you and stay safe.</h3>  
                    </div>       
                    <Button className='thankyou-button' href='/' >Return to Home Page</Button>
                </div>      
            </div>
            </div>
        )
    }


export default DThankyou;