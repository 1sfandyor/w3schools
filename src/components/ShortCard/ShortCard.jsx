import React from 'react'
import { Link } from 'react-router-dom'

export const ShortCard = ({name}) => {
    return (
        <Link className='flex w-48 mb-5 font-primary text-center items-center justify-center rounded-md bg-[#21232c] text-white text-lg py-0.5 px-1.5 border border-grey'>
            {name}
        </Link>
    )
}
