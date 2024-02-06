import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const HanldeNav = () => {
        setNav(!nav);
    };
    return (
        <nav className="flex min-h-[70px] items-center lg:justify-center justify-between navbar md:px-4 fixed z-10 shadow w-full px-4">
            <div>
                <NavLink className={({isActive}) => `text-2xl flex items-center font-bold uppercase ${isActive ? "text-hotpink":"text-black"}`} > 
                   Your <span className="text-hotpink ps-2"> Logo</span>
                </NavLink>

            </div>

            <div className="hidden lg:flex  justify-between  ">
                <ol className=" flex  md:px-28  justify-center  ">
                    <li className="nav-item  text-[16px] font-medium">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-item text-[16px] font-medium">
                        <a href="#about-us">About US</a>
                    </li>
                    <li className="nav-item text-[16px] font-medium">
                        <a href="#deals">Contact</a>
                    </li>
                    <li className="nav-item text-[16px] font-medium">
                        <a href="#contact-us">GitHub</a>
                    </li>
                </ol>
                <div className="flex  items-center  gap-3">
                    <a href="/" className="btn rounded-md hover:bg-tiffanyblue hover:border-tiffanyblue">Log in</a>
                    <a href="/" className="btn bg-hotpink rounded-md   hover:bg-tiffanyblue ">Get Started</a>
                </div>
            </div>

            {/* hamburger icon */}
            <div className="lg:hidden z-10" onClick={HanldeNav}>
                {!nav ? (
                    <FaBars
                        size={30}
                        className="cursor-pointer hover:text-hotpink active:text-hotpink"
                    />
                ) : (
                    <CgClose
                        size={30}
                        className="hover:rotate-6  hover:text-sky-500  cursor-pointer"
                    />
                )}
            </div>

            {/* mobile menu */}
            <div
                onClick={HanldeNav}
                className={
                    nav
                        ? "w-full overflow-y-hidden lg:hidden ease-in duration-300 absolute  left-0 top-0 h-screen bg-mint px-4 py-7"
                        : "absolute top-0 left-[-100%] h-screen ease-in duration-500"
                }
            >
                <div className="h-full w-full text-center pt-12">
                    <ol >
                        <li className="nav-item  text-2xl">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item text-2xl">
                            <a href="#about-us">About US</a>
                        </li>
                        <li className="nav-item text-2xl">
                            <a href="#deals">Contact</a>
                        </li>
                        <li className="nav-item text-2xl">
                            <a href="#contact-us">GitHub</a>
                        </li>
                    </ol>
                    <div className="gap-3 mt-8 flex justify-center items-center">
                        <button className="border-[3px] border-white rounded-sm hover:bg-white">Log in</button>
                        <button className="bg-white rounded-sm hover:bg-transparent border-[3px] border-white">Sign Up</button>
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;
