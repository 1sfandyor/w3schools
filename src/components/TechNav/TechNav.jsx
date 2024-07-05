import React, { useEffect, useState } from 'react'
import { getMenu } from '../../hook/GET';
import { Link } from 'react-router-dom';

export const TechNav = () => {


    const [loading, setLoading] = useState();
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchMenu = async () => {
            setLoading(true);
            const data = await getMenu('http://localhost:1337/api/main-menu?populate=TechnologiesBar');

            setData(data.data.attributes.TechnologiesBar)
            setLoading(false); // Set loading to false once data is fetched
        };

        fetchMenu();
    }, []);

    
    return (
        <ul className='flex overflow-x-scroll hidden-scrollbar items-center text-nowrap bg-grayer scroll'>
            {
                data && data.map(item => {
                    return(
                        <li className='py-[5px] px-[15px] hover:bg-black cursor-pointer'>
                            <Link className='text-[15px] font-primary' to={item.url}>{item.name.toUpperCase()}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}
