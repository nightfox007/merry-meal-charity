import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Foodpreparation1 from '../../images/FoodSafety.jpg';

class FrozenMeal extends Component{
    render(){
        return(
            <div className='form-body'>
            <div className='form-container'>
            <div className='title'>Frozen Meal</div>
            <div className='content'>
            <img src={Foodpreparation1} className="Background" alt='Foodprep 1'/>
            <br></br>
            <Link to="/FrozenMealBenefit" className='btn btn-warning shadow'>Click Here to see Benefit</Link>
            <Link to="/FoodSafety" className='btn btn-warning bg-danger'>Click Here to go Back</Link>
            </div> 
            </div>
            </div>   
        );
    }
}

export default FrozenMeal;