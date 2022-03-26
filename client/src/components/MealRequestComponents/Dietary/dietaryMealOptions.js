import React, { useEffect, useState } from 'react'
import './dietaryMealOptions.css'
export const DietaryMealOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        let arr = [
            { label: "Diabetic Meal", description: "A diabetes diet is a healthy-eating plan that's naturally rich in nutrients and low in fat and calories. Key elements are fruits, vegetables and whole grains." },
            { label: "Low Fat Meal", description: "Low fat foods are those that have 30% of their calories or less from fats." },
            { label: "Low Salt Meal", description: "Fresh, frozen or dried fruits: Berries, apples, bananas, pears, etc. Grains and beans: Dried beans, brown rice, farro, quinoa and whole wheat pasta. Starchy vegetables: Potatoes, sweet potatoes, butternut squash and parsnips." },
        ]
        setOptions(arr)
    }, [])
    return (
            <div className='grid grid-cols-12'>
                <div className='col-span-7 flex flex-col gap-y-4'>
                    <h1 className='underline font-bold text-2xl'>Dietary Meal Options</h1>
                    {options.map((data, ind) => (
                        <div className='grid grid-cols-12 items-start'>
                            <div className='flex items-center gap-x-2 col-span-4'>
                                <input type="checkbox" />
                                <label className='text-lg'>{data.label}</label>
                            </div>
                            <div className='col-span-8'>
                                <p className='text-md'>{data.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='col-span-5 flex justify-end'>
                    {/*<img src='./../../../images//apple.png' className='w-52 h-40' />*/}
                    <div className='dietary-img w-96 h-60 object-fit bg-center bg-contain bg-no-repeat'></div>
                </div>
            </div>
    )
}