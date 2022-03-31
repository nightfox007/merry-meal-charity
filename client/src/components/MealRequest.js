import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import {DietaryMealOptions} from "../components/MealRequestComponents/Dietary/dietaryMealOptions.js";
import { ReligiousMealOptions } from "../components/MealRequestComponents/Religious/religiousMealOptions";
import { VegetarianMealOptions } from "../components/MealRequestComponents/Vegetarian/vegetarianMealOptions.js"
import '../styles/Form.css'


function MealRequest () {
    const [tab, setTab] = useState(0)
    const navigate = useNavigate();

const thankyou = (e) => {
    navigate('/thankyou(member)')
}
    return (
        <div className='form-body' style={{paddingBottom:"40px"}}>
            <div className='form-container'>
                <div className='title'>Choose your Meal</div>
                <div className='content'>
                    <form action='#'>
                        <div className='user-details'>
                        <div>
                        <button onClick={() => { setTab(0) }} className={`${tab === 0 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2`}>Religious</button>
                        <button onClick={() => { setTab(1) }} className={`${tab === 1 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2`}>Vegetarian</button>
                        <button onClick={() => { setTab(2) }} className={`${tab === 2 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2 border-r-2`}>Dietary</button>
                    </div>
                    <div className='border-2 p-4'>
                        {tab === 0 ? <ReligiousMealOptions></ReligiousMealOptions> : null}
                        {tab === 1 ? <VegetarianMealOptions></VegetarianMealOptions> : null}
                        {tab === 2 ? <DietaryMealOptions></DietaryMealOptions> : null}
                    </div>
                             
                          <input className="button" type="submit" value="Confirm Meal" onClick={thankyou}/>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
    )
}

export default MealRequest

