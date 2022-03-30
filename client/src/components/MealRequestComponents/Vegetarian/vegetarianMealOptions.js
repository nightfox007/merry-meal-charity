import React, { useEffect, useState } from 'react'
import './vegetarianMealOptions.css'
export const VegetarianMealOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        let arr = [
            { label: "Vegetarian Indian Meal", description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." },
            { label: "Vegetarian Vegan Meal", description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." },
        ]
        setOptions(arr)
    }, [])

    const [isChecked, setIsChecked] = useState("");

    const handleChange = (val) => {
        if (isChecked === val) {
            setIsChecked("");
        }
        else {
            setIsChecked(val)
        }
    }
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-7 flex flex-col gap-y-4'>
                <h1 className='underline font-bold text-2xl'>Vegetarian Meal Options</h1>
                {options.map((data, ind) => (
                    <div className='grid grid-cols-12 items-start'>
                        <div className='flex items-center gap-x-2 col-span-4'>
                            <input type="checkbox" checked={isChecked === data.label} onChange={() => { handleChange(data.label) }} />
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
                <div className='veg-img w-60 h-60 object-fit bg-center bg-contain bg-no-repeat'></div>
            </div>
        </div>
    )
}