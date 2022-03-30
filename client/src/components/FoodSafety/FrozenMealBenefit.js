import React, { Component } from 'react';
import FrozenMealBenefits from '../../images/FrozenMealBenefit.jpg'
import { Link } from 'react-router-dom';

class FrozenMealBenefit extends Component{
    render(){
        return(
            <div className='form-body'>
            <div className='form-container'>
            <div className='title'>Frozen Meal Benefit</div>
            <br></br>
            <div className='content'>
            <img src={FrozenMealBenefits} className="Background" alt='Foodprep 1'/>
            <br></br>
            <Link to="/FrozenMeal" className='btn btn-warning bg-danger'>Click Here to go Back</Link>
            </div> 
            </div>
            </div>   
            
        );
    }
}

export default FrozenMealBenefit;