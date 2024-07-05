import { faClose, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceBox } from '../ServiceBox/ServiceBox';
import { ShortCard } from '../ShortCard/ShortCard';
// import  socials  from '../../constants/navItems';



export const Dropdown = ({ handleMenu, dropTitle, handleSearch, dropDownItems }) => {

    const [search, setSearch] = useState('');    
    const handleClose = () => {

    }

    return (
        <div className="hidden smd:flex fixed bottom-0 translate-y-14 inset-0 bg-grayer flex-col items-center justify-start z-50 overflow-auto">
            <button className="self-end text-white py-1.5 px-6" onClick={handleMenu}>
                <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>

            <div className='flex flex-col w-full px-7 mlp:mx-auto mlp:max-w-[1070px]'>
                <div className='flex !w-full justify-start items-center mb-9'>
                    <div className='w-[38%] px-2'>
                        <h1 className='text-[32px] text-yellow'>{dropTitle}</h1>
                    </div>
                    <div className='flex items-center relative'>
                        <input
                            className='w-80 py-2 pl-5 pr-10 rounded-3xl bg-placeholder border placeholder:text-white placeholder:font-medium placeholder:text-base border-yellow/20 focus:ring-[3px] focus:ring-green focus:outline-none'
                            type="text"
                            placeholder='Qidiruv...'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon onClick={handleClose} className='ml-2.5 cursor-pointer absolute right-0 -translate-x-5' icon={faClose} />
                    </div>
                </div>

                <p className={dropTitle == 'Xizmatlar' 
                    ? 'flex px-3 mb-5 font-primary text-[17px]' 
                    : 'hidden' }>
                    W3Schools yangi boshlovchilar va professionallar uchun har kuni millionlab odamlarga yangi ko'nikmalarni <br/>
                    o'rganish va o'zlashtirishda yordam beradigan keng turdagi xizmatlar va mahsulotlarni taklif etadi.
                </p>

                <div className='grid grid-cols-2 slp:grid-cols-3 w-full'>
                    {dropDownItems.map(item => {
                        if (item.title === dropTitle) {
                            return item.sections.data.filter(item => 
                                {return search.toLowerCase() === '' 
                                ? item 
                                : item.attributes.heading.includes(search) })
                                    .map((itemmm) => {
                                return (
                                    itemmm.attributes.heading === null 
                                    ? itemmm.attributes.links.map(item => 
                                        <div key={item.id} className='flex p-2.5'>
                                            <ServiceBox name={item.name} desc={item.Description}/>
                                        </div>
                                        )
                                        
                                    : <div key={itemmm.id}
                                        className={`relative mx-1 my-1 px-2 
                                            ${
                                        itemmm.id == 1
                                        ? 'order-1'
                                        : itemmm.id == 2
                                        ? `order-2`
                                        : itemmm.id == 3
                                        ? `order-4 slp:order-3`
                                        : itemmm.id == 4
                                        ? 'order-3'
                                        : itemmm.id == 5
                                        ? 'order-5'
                                        : ''
                                        }
                                        ${item.id == 2 
                                            ? itemmm.id == 6
                                            ? 'order-1'
                                            : itemmm.id == 7
                                            ? `order-2`
                                            : itemmm.id == 8
                                            ? `order-4 slp:order-3`
                                            : itemmm.id == 10
                                            ? 'order-3'
                                            : ''
                                        : ''
                                        }
                                        ${item.id == 3
                                            ? itemmm.id == 9
                                            ? 'order-1'
                                            : itemmm.id == 11
                                            ? `order-2`
                                            : itemmm.id == 12
                                            ? `order-4 slp:order-3`
                                            : itemmm.id == 13
                                            ? 'order-3'
                                            : itemmm.id == 14
                                            ? 'order-5'
                                            : ''
                                        : ''
                                        }`}>
                                        
                                        <h2 className='text-yellow font-normal text-2xl pl-1.5 font-primary mb-2.5'>{itemmm.attributes.heading}</h2>
                                        
                                        {itemmm.attributes.heading === null 
                                        ? <></> 
                                        : <ul className={`flex flex-col items-center`}> 
                                            {itemmm.attributes.links.filter(item => 
                                                {return search.toLowerCase() === '' 
                                                ? item 
                                                : item.name.includes(search) })
                                                    .map(item => {
                                                    return (
                                                        <li key={item.id} className='flex items-center w-full'>
                                                            {item.Description 
                                                            ? <></> 
                                                            : <Link to={item.url} className={`font-primary flex items-start hover:rounded-md hover:bg-grayText focus:text-green 
                                                                    ${itemmm.id == 5 && 'grow hover:!text-black'}`} > 
                                                                <span className={`text-lg text-white py-0.5 px-1.5 hover:text-black self-start 
                                                                    ${itemmm.id == 5 && 'mr-2 flex items-center justify-center'}`}> {item.name} 
                                                                </span>
                                                                {item.name == 'Vebsayt yaratish' 
                                                                ? <span className='bg-darkRed leading-none rounded-2xl text-[11px] py-1 px-1.5 border border-black self-center text-grayText'>Zo'r</span> 
                                                                : item.name == 'Server yaratish' 
                                                                ? <span className='bg-green leading-none rounded-2xl text-[11px] py-1 px-1.5 border border-black self-center text-grayText'>Yangi</span>: null}</Link>}
                                                                {
                                                                item['Tutorial'] && 
                                                                <Link to={item.url} className='py-0.5 px-1.5 underline flex text-yellow font-semibold font-primary hover:rounded-md hover:bg-green hover:text-white'> <small className='text-xs leading-normal '>{item['Tutorial'].name}</small> </Link>
                                                                }
                                                                {
                                                                item['Reference'] &&
                                                                    <Link to={item.url} className='py-0.5 px-1.5 underline flex leading-normal text-yellow font-semibold font-primary hover:rounded-md hover:bg-green hover:text-white'>
                                                                        <small className='text-xs leading-normal'>{item['Reference'].name}</small>
                                                                    </Link>
                                                                }
                                                        </li>)
                                                    })}
                                            </ul>
                                        }
                                        {
                                            item.id == 2 
                                            ? itemmm.id == 10
                                                ? <div className='mt-9'>
                                                    <ShortCard name={'Mashq nima ?'}/>
                                                    <ShortCard name={'Viktorina nima ?'}/>
                                                </div>
                                                : ''
                                            : item.id == 3
                                            ? itemmm.id == 13
                                                ? <div className='mt-9'> <ShortCard name={'Sertifikat nima ?'}/> </div>
                                                : ''
                                            : ''
                                        }
                                    </div>
                                );
                            });
                        }
                        return null;
                    })}
                </div>
            </div>

            {
                dropTitle === 'Xizmatlar' && <div>
                    <ul className='flex mb-32 mt-20'>
                        {/* {
                            socials.map(item => {
                                return(
                                    <li className='mr-2.5 ' key={item.id}>
                                        <Link to={item.url} className='p-4 hover:bg-lightgray hover:text-black rounded-md'>
                                            <FontAwesomeIcon icon={item.icon} fontSize={24}/>
                                        </Link>
                                    </li>
                                )
                            })
                        } */}
                    </ul>
                </div>
            }
        </div>
    );
}

{/*  */}
