import { FaCaretDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // 👈 Import Link

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
    return (
        <div data-aos="fade" className="bg-pink-500 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                {/* Logo Section */}
                <div className="font-bold text-3xl text-white">
                    <Link to="/">Fresh & Healthy</Link>
                </div>

                {/* NavLinks Section */}
                <div>
                    <ul className="flex items-center gap-6 sm:gap-10">
                        {NavLinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <Link
                                    to={link}
                                    className="hidden sm:inline-block hover:text-pink-300 text-white text-lg font-semibold"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}

                        {/* Dropdown Section */}
                        <li className="hidden md:block cursor-pointer group relative">
                            <div className="flex items-center gap-2 py-2 text-white text-lg font-semibold hover:text-pink-300">
                                Dropdown <FaCaretDown className="group-hover:rotate-180 duration-300" />
                            </div>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 z-50 hidden group-hover:block w-[200px] bg-white text-pink-600 shadow-md p-2 rounded-md">
                                <ul>
                                    {DropdownLinks.map(({ id, name, link }) => (
                                        <li key={id}>
                                            <Link
                                                to={link}
                                                className="block w-full text-base px-4 py-2 hover:bg-pink-100 hover:text-pink-500 rounded-md"
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        {/* Login Button */}
                        <li>
                            <button
                                onClick={HandlePopup}
                                className="flex items-center gap-2 bg-white text-pink-600 text-base md:text-lg px-4 py-2 rounded-md hover:scale-105 duration-300 shadow-md"
                            >
                                <FaUser />
                                My Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
