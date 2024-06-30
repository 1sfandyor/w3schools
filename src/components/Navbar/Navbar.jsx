import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faCircleHalfStroke, faClose, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GrSearch } from "react-icons/gr";
import { VscColorMode } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import logo from '../../assets/logo.svg';
import { getMenu } from "../../services/navbar";
import style from './navbar.module.css';

const htmlTag = document.documentElement;

const Navbar = () => {
    const [leftItems, setLeftItems] = useState([]);
    const [rightItems, setRightItems] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [dark, setDark] = useState(false);


    useEffect(() => {
        const fetchMenu = async () => {
            const data = await getMenu();
            const left = [];
            const right = [];
            data.data.attributes.MainMenuItems.forEach(item => {
                if (item.__component === "menu.dropdown") {
                    left.push(item);
                } else if (item.__component === "menu.menu-link") {
                    right.push(item);
                }
            });

            setLeftItems(left);
            setRightItems(right);
        };

        fetchMenu();
    }, []);
    const handleStyle = useRef()

    // HANDLE HAMBURGER MENU
    const handleMenu = () => {
        setShowMenu(!showMenu);
        handleStyle.current.classList.toggle('active');
        showMenu ? handleStyle.current.style.color = dark ? '#ddd' : 'black' : handleStyle.current.style.color = dark ? 'white' : 'white'
    };

    // HANDLE SEARCH INPUT
    const handleSearch = () => {
        setShowSearch(!showSearch)
        console.log(showSearch);
    }

    // HANDLE DARK MODE
    const handleMode = () => {
        const newMode = !dark;
        setDark(newMode)
        localStorage.setItem('mode', `${newMode ? 'dark' : 'light'}`);
    }


    useEffect(() => {
        if (localStorage.getItem('mode') === 'dark') {
            htmlTag.classList.add('dark');
            if (!dark) {
                setDark(prev => !prev)
            }
        } else {
            htmlTag.classList.remove('dark');
        }
    }, [dark]);
    
    const renderNavbarItem = (item) => {
        switch (item.__component) {
            case "menu.dropdown":
                return (
                    <Link to="/" 
                        className={`hidden smd:flex items-center smd:p-4 2xl:py-6 2xl:px-6 smd:text-base 2xl:text-xl hover:bg-green  ${dark ? 'text-grayText ' : 'text-black'} hover:!text-white font-primary 
                            ${
                                item.id === 3 ? 'smd:hidden xslp:flex' : ''
                            }`}
                        key={item.id}>
                        <span className="mr-1">{item.title}</span>
                        <FontAwesomeIcon className="self-center text-lg" icon={faCaretDown} color={dark ? 'text-gray' : 'text-black'} />
                    </Link>
                );
            case "menu.menu-link":
                return (
                    <Link to={item.url}
                        className={`hidden text-nowrap ${dark ? 'hover:bg-white/10' : 'hover:bg-black/5'} rounded-full before:relative  ${
                            item.id == 3 ? 'relative xs:flex lt:hidden xlt:flex smd:hidden lmd:flex mmd:hidden before:mr-3 xl:before:mr-5 xmd:flex xslp:hidden llp:flex before:content-karzinka before:w-4 before:h-4 ' :
                            item.id == 2 ? 'mlp:flex before:content-code before:w-4 before:h-4 xlp:before:mr-3 mlp:before:mr-2 ' :
                            'xlp:flex before:content-magic before:w-4 before:h-4 xlp:before:mr-3 lg:before:bottom-2.5 xlp:before:bottom-2 '
                        } items-center py-2.5 xl:px-3 mlp:px-2 px-4 text-base ${dark ? 'text-grayText' : 'text-black'} font-primary leading-normal`}
                        key={item.id}>
                        {item.title}
                    </Link>
                );
            default:
                return null;
        }
    };

    const renderMenuItem = (item) => {
        switch (item.__component) {
            case "menu.dropdown":
                return (
                    <Link to="/" 
                        className={`flex items-center justify-between text-xl text-white border-b border-solid border-line font-primary py-5 px-8`}
                        key={item.id}>
                        <span className="mr-1">{item.title}</span>
                        <FontAwesomeIcon className="self-center" icon={faCaretDown} color="white" fontSize={27}/>
                    </Link>
                );
            case "menu.menu-link":
                return (
                    <Link to={item.url}
                        className={`flex justify-between text-nowrap text-xl text-white border-b border-solid border-line after:w-4 after:h-4 py-5 px-8 ${
                            item.id == 3 ? 'after:content-karzinka':
                            item.id == 2 ? 'after:content-code':
                            'after:content-magic'
                        } items-center py-4 px-3 text-base text-grayText font-primary leading-normal`}
                        key={item.id}>
                        {item.title}
                    </Link>
                );
            default:
                return null;
        }
    };



    return (
        <>
            <nav className={`flex items-center justify-between  ${dark ? '' : 'bg-white text-black'} w-full`}>
                <Link to="/" className={`${showSearch ? 'hidden' : 'flex'}  2xl:pt-[0.525rem] 2xl:pb-[0.625rem] px-4 2xl:pl-6 shrink-0`}>
                    <img className="flex w-9 2xl:w-[52px] h-10 2xl:h-14 " src={logo} alt="logo" width={'38.34px'}/>
                </Link>
{/*  */}
                {/* MAIN WRAPPER WITHOUT LOGIN */}
                <div className={`flex items-center w-full justify-between xmd:justify-start llp:justify-between ${dark ? '' : 'text-black'}`}>
                    <div className={`${showSearch ? 'w-full' : ''} flex items-center`}>

                        {/* Left items in main navbar */}
                        <div className={`${showSearch ? 'hidden' : 'flex'} items-center`}>
                            {leftItems.map(renderNavbarItem)}
                        </div>

                        {/* Search and toggle 369mode buttons */}
                        <div className={`${showSearch ? 'w-full' : ''} flex items-center`}>
                            {/* HAMBURGER MENU BUTTON */}
                            <button 
                                className={`${showSearch ? 'hidden' : 'flex'} ${dark ? 'text-grayText' : 'text-dark'} smd:hidden items-center p-4 text-base xtext-xl lt:mr-7 font-primary leading-normal`}
                                onClick={handleMenu}
                                ref={handleStyle}
                                >
                                <span className="mr-1">Menu</span>
                                <FontAwesomeIcon className="self-center " icon={showMenu ? faCaretUp : faCaretDown} color={dark ? 'text-textGray' : 'text-black'} />
                            </button>

                            {/* Search input */}
                            <div className={`${showSearch ? 'w-full' : ''} p-[9px] pl-0 lg:mr-2.5 relative`}>
                                {/* LUPA ICON */}
                                <button className={`${showSearch ? 'hidden' : 'flex text-base py-2.5 px-2.5 lt:hidden smd:flex mmd:hidden '}`}
                                        onClick={handleSearch}>
                                    <GrSearch color={dark ? '#ddd' : 'text-black'} className="text-lg 2xl:text-3xl" />
                                </button>

                                <div className={`${showSearch ? 'flex w-full items-center' : 'hidden lt:flex smd:hidden mmd:flex'} `}>
                                    <input type="text"
                                        className={`${showSearch ? 'w-full' : ''} ${style.inputPlaceholder} lt:w-44 2xl:w-[14.5rem] lt:flex lt:py-[4px] 2xl:py-[9px] pl-4 pr-10 placeholder-slate-500 italic  ${dark ? 'border-none' : 'border border-black/25'} rounded-3xl text-lg text-darkgray focus:ring-[3px] focus:ring-green focus:outline-none`}
                                        placeholder="Qidiruv... " required />
                                    <button 
                                        type="button" 
                                        className={`absolute inset-y-0 end-0 hover:bg-black/5 p-2 rounded-full self-center lt:flex items-center ${showSearch ? "right-9" : 'right-3'}  !text-black`}>
                                        <GrSearch color="#ddd" fontSize={16} className="w-5 h-5 2xl:w-[26px] 2xl:h-[26px] !text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
                                    </button>
    
                                    <FontAwesomeIcon onClick={handleSearch} 
                                                    className={`${showSearch ? 'flex z-50' : 'hidden'} ml-2.5 cursor-pointer`} 
                                                    icon={faClose}/>
                                </div>
                            </div>

                            {/* Change color mode */}
                            <div className={`p-[9px] ${showSearch ? 'hidden' : 'flex'}`}>
                                <button className={`text-base p-2 rounded-full ${dark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`} px-2  onClick={handleMode}>
                                    {dark 
                                    ? <VscColorMode color="#ddd" className="text-lg lx:text-3xl" /> 
                                    : <VscColorMode color="#000" className="text-lg lx:text-3xl" /> }
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right items in main navbar */}
                    <div className={`${showSearch ? 'hidden' : 'flex'} items-center `}>
                        {rightItems.map(renderNavbarItem)}
                    </div>
                </div>

                <Link to="" className={`${showSearch ? 'hidden' : 'flex'} items-center text-base ${dark ? 'text-grayText hover:bg-white hover:text-black ' : 'text-black hover:bg-black/5 hover:text-black'}  rounded-full py-2.5 px-4 xmd:px-3 mlp:px-2 xl:px-4 xl:py-1.5 font-primary text-nowrap`} >
                    <span className="sm:mr-3 xmd:mr-2">Log in</span>
                    <CiUser className="hidden sm:flex text-xl font-bold" size={26}/>
                </Link>
            </nav>

            {/* Modal */}
            {showMenu && (
                <div className="smd:hidden fixed inset-0 top-14 bg-grayer flex flex-col items-center justify-start z-50 py-4 overflow-auto">
                    <button className="self-end text-white py-2 px-6"
                        onClick={handleMenu}>
                        <FontAwesomeIcon icon={faTimes} size="2x" />
                    </button>
                    <div className="flex flex-col items-start w-full mt-4 z-40">
                        {/* Left items in modal */}
                        {leftItems.map((item) => (
                            <div className="w-full" key={item.id}>
                                {renderMenuItem(item)}
                            </div>
                        ))}

                        {/* Right items in modal */}
                        {rightItems.map((item) => (
                            <div className="w-full" key={item.id}>
                                {renderMenuItem(item)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
