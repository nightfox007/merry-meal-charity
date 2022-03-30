import React, {useState} from "react";
import {DietaryMealOptions} from "../components/MealRequestComponents/Dietary/dietaryMealOptions.js";
import { ReligiousMealOptions } from "../components/MealRequestComponents/Religious/religiousMealOptions";
import { VegetarianMealOptions } from "../components/MealRequestComponents/Vegetarian/vegetarianMealOptions.js"
import '../styles/Form.css'

const MealRequest = () => {
    const [tab, setTab] = useState(0)
    return (
<<<<<<< HEAD
        <div className='form-body' style={{paddingBottom:"40px"}}>
            <div className='form-container'>
                <div className='title'>Choose your Meal</div>
                <div className='content'>
                    <form action='#'>
                        <div className='user-details'>
                        <div>
=======
        <div className="p-20"> 
            <p className='text-lg  my-4'>You’re also assured that your meals are prepared to suit your needs. Whether it is for religious, dietary or allergy reasons, all you need to do is make a request from our list of Special Meals.</p>
            <div className='mt-20'>
                <h1 className='underline font-bold text-3xl'>Request Meal</h1>
                <div className='mt-10'>
                    <div>
>>>>>>> 3c5e6cb8acac811c0cb54f367912d9452a40fc2d
                        <button onClick={() => { setTab(0) }} className={`${tab === 0 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2`}>Religious</button>
                        <button onClick={() => { setTab(1) }} className={`${tab === 1 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2`}>Vegetarian</button>
                        <button onClick={() => { setTab(2) }} className={`${tab === 2 ? "bg-gray_100" : null} px-6 py-2 border-t-2 border-l-2 border-r-2`}>Dietary</button>
                    </div>
                    <div className='border-2 p-4'>
                        {tab === 0 ? <ReligiousMealOptions></ReligiousMealOptions> : null}
                        {tab === 1 ? <VegetarianMealOptions></VegetarianMealOptions> : null}
                        {tab === 2 ? <DietaryMealOptions></DietaryMealOptions> : null}
                    </div>
                             
                          <input className="button" type="submit" value="Confirm Meal"/>
                        </div>
                    </form>
                </div>
               
            </div>
            </div>
    )
}

export default MealRequest

