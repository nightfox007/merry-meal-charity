import React from 'react';
import {Button} from 'react-bootstrap'
// import '../CSS/Thankyou.css'
import '../../styles/Thankyou.css'

function FPThankyou(){
        return(
            <div className='thankyou-body'>
            <div className='thankyou-container'>
                <div className='title'>Thanks for Appyling to be a Partner</div>
                <div className='content'>
                    <div className='user-details'>
                    <h3>The partnership registration process is complete!!</h3>
                    <h3> We will evalute the partnership if it is a fit we will send a confirmation email or call to you.</h3> 
                    <h3>To let you know the partnership is successful and be part of the MerryMeal family.</h3>
                    <h3>Thank you and stay safe.</h3>  
                    </div>       
                    <Button className='thankyou-button' href='/' >Return to Home Page</Button>
                </div>      
            </div>
            </div>
        )
    }


export default FPThankyou;