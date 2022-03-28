import React, {useState} from "react";
import {DietaryMealOptions} from "../components/MealRequestComponents/Dietary/dietaryMealOptions.js";
import { ReligiousMealOptions } from "../components/MealRequestComponents/Religious/religiousMealOptions";
import { VegetarianMealOptions } from "../components/MealRequestComponents/Vegetarian/vegetarianMealOptions.js"
import {Button} from "antd";

const MealRequest = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className="p-20"> 
            <p className='text-lg  my-4'>You’re also assured that your meals are prepared to suit your needs. Whether it is for religious, dietary or allergy reasons, all you need to do is make a request from our list of Special Meals.</p>
            <div className='mt-20'>
                <h1 className='underline font-bold text-3xl'>Request Meal</h1>
                <div className='mt-10'>
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
                </div>

                <div>
                    <Button block type='primary' htmlType='submit' style={{"width":"200px"}}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default MealRequest

