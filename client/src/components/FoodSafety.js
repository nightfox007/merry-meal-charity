import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Foodpreparation1 from '../images/Foodpreparation1.jpg'
import Foodsafety from '../images/FoodSafety.jpg'
import '../styles/FoodSafety.css'

class FoodSafety extends Component{
    render(){
        return(
        <div className='form-body'>
        <div className='form-container'>
            <div className='title'>Food Preparation</div>
            <div className='content'>
                <div className='row'>
                    <div className='column'>
                      <div class="card">
                      <img src={Foodpreparation1} className="Background" alt='Foodprep 1'/>
                      <br></br>
                       <h3><b>Know Your Food</b></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                          labore et dolore magna aliqua. Ut enim ad minim veniam, 
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       <Link to="/KnowYourFood" className='btn btn-warning shadow'>Detail Description</Link>
                      </div>
                    </div>

                    <div className='column'>
                      <div class="card">
                      <img src={Foodsafety} className="Background" alt='Foodprep 1'/>
                      <br></br>
                       <h3><b>Frozen Meal</b></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                       <Link to="/FrozenMeal" className='btn btn-warning shadow'>Frozen Meal</Link>
                      </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
        )
    }
}

export default FoodSafety;
