import React, { useEffect, useState } from 'react'
import './religiousMealOptions.css'

export const ReligiousMealOptions = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        let arr = [
            { label: "Halal", description: "Halal food is that which adheres to Islamic law, as defined in the Koran. The Islamic form of slaughtering animals" },
            { label: "Hindu Vegetarian", description: "This meal is prepared according to the requirements of the Hindu religion." },
        ]
        setOptions(arr)
    }, [])
    return (
            <div className='grid grid-cols-12'>
                <div className='col-span-7 flex flex-col gap-y-4'>
                    <h1 className='underline font-bold text-2xl'>Religious Meal Options</h1>
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
                    <div className='religious-img w-96 h-60 object-fit bg-center bg-contain bg-no-repeat'></div>
                </div>
            </div>
    )
}