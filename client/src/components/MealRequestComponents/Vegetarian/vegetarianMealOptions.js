import React, { useEffect, useState } from 'react'
import './vegetarianMealOptions.css'
export const VegetarianMealOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        let arr = [
            { label: "Vegetarian Indian Meal", description: "A typical modern urban Hindu lacto-vegetarian meal is based on a combination of grains such as rice and wheat, legumes, green vegetables, and dairy products. " },
            { label: "Vegetarian Vegan Meal", description: "A vegan diet excludes all meat and animal products (meat, poultry, fish, seafood, dairy and eggs)" },
        ]
        setOptions(arr)
    }, [])
    return (
            <div className='grid grid-cols-12'>
                <div className='col-span-7 flex flex-col gap-y-4'>
                    <h1 className='underline font-bold text-2xl'>Vegetarian Meal Options</h1>
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
                    <div className='veg-img w-96 h-60 object-fit bg-center bg-contain bg-no-repeat'></div>
                </div>
            </div>
    )
}