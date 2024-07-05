import React from 'react'
import { Link } from 'react-router-dom'

export const ServiceBox = ({name, desc}) => {
    return (
        <Link className='flex flex-grow bg-[#3e404a] hover:bg-black hover:text-white p-2.5'>
            <div className='py-4 px-4'>
                <h2 className='text-xl text-yellow mb-3'>{name}</h2>
                <p className='text-sm font-primary'>{desc}</p>
            </div>
        </Link>
    )
}
