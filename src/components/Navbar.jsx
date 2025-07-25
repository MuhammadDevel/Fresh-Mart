import { FaCaretDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
];

const DropdownLinks = [
    { id: 1, name: "Vegetables", link: "/vegetables" },
    { id: 2, name: "Fruits", link: "/fruits" },
    { id: 3, name: "Grains", link: "/grains" },
];

const Navbar = ({ HandlePopup }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div data-aos="fade" className="bg-pink-500 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 relative">
                {/* Logo */}
                <div className="font-bold text-2xl sm:text-3xl text-white">
                    <Link to="/">Fresh & Healthy</Link>
                </div>

                {/* Hamburger */}
                <div className="sm:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <HiX /> : <HiMenu />}
                </div>

                {/* Nav Links */}
                <ul className={`absolute sm:static top-[70px] left-0 w-full sm:w-auto bg-pink-500 sm:bg-transparent flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8 px-4 py-4 sm:p-0 transition-all duration-300 z-50 ${menuOpen ? 'block' : 'hidden'} sm:flex`}>

                    {NavLinks.map(({ id, name, link }) => (
                        <li key={id}>
                            <Link
                                to={link}
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-lg font-semibold block hover:text-pink-300"
                            >
                                {name}
                            </Link>
                        </li>
                    ))}

                    {/* Dropdown — Mobile Toggle + Desktop Hover */}
                    <li className="w-full sm:w-auto relative">
                        {/* Mobile Toggle / Desktop Label */}
                        <div
                            className="flex items-center justify-between sm:justify-start gap-2 text-white text-lg font-semibold cursor-pointer hover:text-pink-300"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            Products
                            <FaCaretDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Dropdown Menu */}
                        <div
                            className={`${
                                dropdownOpen ? 'block' : 'hidden'
                            } sm:absolute left-0 top-full w-full sm:w-[200px] bg-white text-pink-600 shadow-md p-2 rounded-md z-50`}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <ul className="flex flex-col">
                                {DropdownLinks.map(({ id, name, link }) => (
                                    <li key={id}>
                                        <Link
                                            to={link}
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                            className="block w-full text-base px-4 py-2 hover:bg-pink-100 hover:text-pink-500 rounded-md"
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>

                    {/* Login */}
                    <li className="w-full sm:w-auto">
                        <button
                            onClick={() => {
                                HandlePopup();
                                setMenuOpen(false);
                            }}
                            className="flex items-center gap-2 bg-white text-pink-600 text-base md:text-lg px-4 py-2 rounded-md hover:scale-105 duration-300 shadow-md w-full sm:w-auto"
                        >
                            <FaUser />
                            My Account
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
