import React, { useEffect, useState } from 'react'
import './religiousMealOptions.css'
export const ReligiousMealOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        let arr = [
            { label: "Halal", description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." },
            { label: "Hindu Vegetarian", description: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content." },
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
                <div className='col-span-8 flex flex-col gap-y-4'>
                    <h1 className='underline font-bold text-2xl'>Religious Meal Options</h1>
                    {options.map((data, ind) => (
                        <div className='grid grid-cols-12 items-start gap-x-4'>
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
                <div className='col-span-4 flex justify-end'>
                    <div className='religious-img w-60 h-60 object-fit bg-center bg-contain bg-no-repeat'></div>
                </div>
            </div>
    )
}