import { Link } from "react-router-dom";

import { GrSearch } from "react-icons/gr";
import { VscColorMode } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";

import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getMenu } from "../../services/navbar";


const Navbar = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await getMenu();
            setMenuItems(data.data.attributes.MainMenuItems);
        };

        fetchMenu();
    }, []);

    const renderMenuItem = (item) => {
        const iconUrl = item.icon?.data?.attributes?.url;
        switch (item.__component) {
            case "menu.dropdown":
                return (
                    <Link to="/" 
                        className={`hidden smd:flex items-center p-4 text-base text-grayText font-primary leading-normal 
                            ${
                            item.id === 3
                            ? 'smd:hidden'
                            : ''
                            }
                        `} 
                        key={item.id}>
                        <span className="mr-1">{item.title}</span>
                        <FontAwesomeIcon className="self-center" icon={faCaretDown} color="white" />
                    </Link>
                );
            case "menu.menu-link":
                return (
                    <Link to={item.url} 
                        className={`hidden text-nowrap 
                        ${
                        item.id == 3 
                        ? `relative xs:flex lt:hidden xlt:flex smd:hidden lmd:flex mmd:hidden xmd:flex xslp:hidden llp:flex before:content-karzinka before:w-4 before:h-4 before:mr-2`
                        : item.id == 2
                        ? 'mlp:flex'
                        : 'xlp:flex'
                        } items-center p-4 text-base text-grayText font-primary leading-normal`}
                        key={item.id}>
                        {iconUrl && <img src={iconUrl} alt={`${item.title} icon`} className="mr-2 w-5 h-5" />}
                        {item.title}
                    </Link>
                );
            default:
                return null;
        }
    };


    return (
        <nav className="flex items-center justify-start bg-darkgray">
            <Link to="/" className="flex py-2 px-4 shrink-0">
                <img className="flex max-w-[38px] w-[38.34px] h-9 shrink-0" src={logo} alt="logo" width={'38.34px'} height={36}/>
            </Link>


            {/* MENU / INPUT / MODE */}
            <div className="flex items-center w-full justify-between smd:justify-start">
                <div className="flex items-center smd:order-1">

                    {/* MENU */}
                    <Link to="/" className="flex smd:hidden items-center p-4 text-base text-grayText font-primary leading-normal">
                        <span className="mr-1">Menu</span>
                        <FontAwesomeIcon className="self-center" icon={faCaretDown} color="white" />
                    </Link>

                    {/* INPUT SEARCH */}
                    <div className="p-[9px] relative">
                        <button className="text-base py-2.5 px-2.5 lt:hidden smd:flex">
                            <GrSearch color="#ddd" fontSize={16} />
                        </button>
                        <div className="smd:hidden">
                            <input 
                                type="text" 
                                className="w-44 hidden lt:flex py-1 pl-4 pr-10 border-none rounded-3xl text-lg text-darkgray focus:ring-[3px] focus:ring-green focus:outline-none" 
                                placeholder="Qidiruv" required/>
                            <button type="button" className="absolute hidden inset-y-0 end-0 lt:flex items-center right-5 !text-black">
                                <GrSearch color="#ddd" fontSize={16} className="w-[18px] h-[18px] !text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
                            </button>
                        </div>
                    </div>
                    

                    {/* CHANGE COLOR MODE */}
                    <div className="p-[9px]">
                        <button className="text-base py-2.5 px-2">
                            <VscColorMode color="#ddd" fontSize={18} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center">
                    {menuItems.map(renderMenuItem)}
                </div>
            </div>

            <Link to="" className={`flex items-center text-base text-grayText py-2 px-4 font-primary text-nowrap`} >
                    <span>Log in</span>
                    <CiUser className="hidden sm:flex ml-4 text-xl font-bold"/>
            </Link>
        </nav>
    );
}

export default Navbar;
