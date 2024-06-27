import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { VscColorMode } from "react-icons/vsc";
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
                    <Link to="/" className="hidden items-center p-4 text-base text-grayText font-primary leading-normal" key={item.id}>
                        <span className="mr-1">{item.title}</span>
                        <FontAwesomeIcon className="self-center" icon={faCaretDown} color="white" />
                    </Link>
                );
            case "menu.menu-link":
                return (
                    <Link to={item.url} className="hidden items-center p-4 text-base text-grayText font-primary leading-normal" key={item.id}>
                        {iconUrl && <img src={iconUrl} alt={`${item.title} icon`} className="mr-2 w-5 h-5" />}
                        {item.title}
                    </Link>
                );
            case "menu.menu-btn":
                return (
                    <Link to={item.url} 
                    className={`${
                    item.type === 'primary' 
                    ? 'hidden sm:flex' 
                    : 'btn-secondary'
                    
                    }`} 
                    key={item.id}>
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

            <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center p-4 text-base text-grayText font-primary leading-normal">
                        <span className="mr-1">Menu</span>
                        <FontAwesomeIcon className="self-center" icon={faCaretDown} color="white" />
                    </Link>

                    <div className="p-[9px]">
                        <button className="text-base py-2.5 px-2.5">
                            <GrSearch color="#ddd" fontSize={16} />
                        </button>
                    </div>
                    
                    <div className="p-[9px]">
                        <button className="text-base py-2.5 px-2">
                            <VscColorMode color="#ddd" fontSize={16} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center">
                    {menuItems.map(renderMenuItem)}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
