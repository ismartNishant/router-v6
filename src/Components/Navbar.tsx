import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon } from 'lucide-react';
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(true);
    const HanldeNav = () => {
        setNav(!nav);
    };

    const menuItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
        },
        {
            name: 'Conatct Us',
            path: '/contact',
        },
        {
            name: 'GitHub',
            path: '/github',
        },

    ]


    return (
        <nav className="flex min-h-[70px] items-center lg:justify-center justify-between navbar md:px-4  z-10 shadow w-full px-4 bg-white">
            <div>
                <NavLink to='/' className="text-2xl flex items-center font-bold uppercase" >
                    Your <span className="text-indigo-500 ps-2"> Logo</span>
                </NavLink>

            </div>

            <div className="hidden lg:flex  justify-between  ">
                <ol className=" flex md:px-32  justify-center  ">
                    {menuItems.map((item) => (
                        <li className="nav-item text-[16px] font-medium" key={item.name}>
                            <NavLink className={({ isActive }) => `${isActive ? "text-indigo-500" : "text-black"}`} to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}

                </ol>
                <div className="flex  items-center  gap-2">
                   
                    <NavLink to='/' className={`btn rounded-sm hover:bg-indigo-800 hover:border-indigo-500 hover:text-white`}> Log in</NavLink>
                    <NavLink to='/' className={`btn bg-indigo-500 rounded-sm   hover:bg-indigo-800 text-white`}> Get Started</NavLink>
                    <div className=" cursor-pointer ">
                        {theme ? <SunIcon size={38} className="p-2 bg-yellow-300 rounded-full" onClick={() => setTheme(!theme)} /> :
                            <MoonIcon size={38} className="p-2 bg-sky-300 rounded-full" onClick={() => setTheme(!theme)} />}
                    </div>
                </div>
            </div>

            {/* hamburger icon */}
            <div className="lg:hidden z-10" onClick={HanldeNav}>
                {!nav ? (
                    <FaBars
                        size={30}
                        className="cursor-pointer hover:text-indigo-500 active:text-indigo-500"
                    />
                ) : (
                    <CgClose
                        size={30}
                        className="hover:rotate-6  hover:text-indigo-500  cursor-pointer"
                    />
                )}
            </div>

            {/* mobile menu */}
            <div
                onClick={HanldeNav}
                className={
                    nav
                        ? "w-full overflow-y-hidden lg:hidden ease-in duration-300 absolute  left-0 top-0 h-screen bg-white px-4 py-7"
                        : "absolute top-0 left-[-100%] h-screen ease-in duration-500"
                }
            >
                <div className="h-full w-full text-center pt-12 ">
                    <ol >
                        {menuItems.map((item) => (
                            <li className="nav-item text-[16px] font-medium" key={item.name}>
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ol>
                    <div className="gap-3 mt-8 flex justify-center items-center">
                        <div className=" cursor-pointer ">
                            {theme ? <SunIcon size={38} className="p-2 bg-yellow-300 rounded-full" onClick={() => setTheme(!theme)} /> :
                                <MoonIcon size={38} className="p-2 bg-sky-300 rounded-full" onClick={() => setTheme(!theme)} />}
                        </div>
                        <NavLink to='/' className={`btn rounded-sm hover:bg-indigo-800 hover:border-indigo-500 hover:text-white`}> Log in</NavLink>
                        <NavLink to='/' className={`btn bg-indigo-500 rounded-sm   hover:bg-indigo-800 text-white`}> Get Started</NavLink>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
