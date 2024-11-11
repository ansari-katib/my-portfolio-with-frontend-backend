import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Manage menu toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu visibility
  };

  return (
    <>
      <div className="flex justify-center items-center bg-black  ">
        <nav className="w-1/2 flex justify-center items-center bg-gray-800 text-azure h-12 rounded-2xl p-2.5">

          {/* Navbar Links (hidden on smaller screens) */}
          <div className='flex justify-between items-center' >

            <div className="hidden m-6 sm:flex justify-center items-center gap-4 col-span-3">
              <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/">
                <li className="list-none text-lg font-semibold">Home</li>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/education">
                <li className="list-none text-lg font-semibold">Education</li>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/experience">
                <li className="list-none text-lg font-semibold">Experience</li>
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/Projects">
                <li className="list-none text-lg font-semibold">Projects</li>
              </NavLink>
            </div>

            <div className="flex justify-center items-center gap-2">
              <NavLink to="https://www.linkedin.com/in/katib-ansari-95ab96252/">
                <li className=" text-blue-600 list-none"><i className="fa-brands fa-linkedin text-2xl"></i></li>
              </NavLink>
              <NavLink to="#">
                <li className=" text-pink-600 list-none"><i className="fa-brands fa-instagram text-2xl"></i></li>
              </NavLink>
              <NavLink to="https://x.com/KatibAnsari3">
                <li className=" text-blue-400 list-none"><i className="fa-brands fa-square-x-twitter text-2xl"></i></li>
              </NavLink>
              <NavLink to="https://github.com/ansari-katib">
                <li className=" text-orange-400 list-none"><i className="fa-brands fa-github text-2xl"></i></li>
              </NavLink>
            </div>

          </div>

          {/* Mobile Hamburger Icon (positioned right) */}
          <div className="flex sm:hidden justify-start ">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <i className={` ${isOpen ? 'fa-sharp fa-regular fa-x' : 'fa-duotone fa-solid fa-bars'} ml-9 text-2xl text-white`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Toggle visibility based on isOpen state */}
        <div className={`absolute top-0 left-0 w-full h-30 mt-12 bg-gray-800  transition-all ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="flex flex-col items-center justify-between ">
            <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/" onClick={toggleMenu}>
              <li className=" flex justify-center items-center p-5 border-b border-b-gray-900 list-none text-lg font-semibold  ">Home</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/education" onClick={toggleMenu}>
              <li className=" flex justify-center items-center p-5 border-b border-b-gray-900 list-none text-lg font-semibold">Education</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/experience" onClick={toggleMenu}>
              <li className=" flex justify-center items-center p-5 border-b border-b-gray-900 list-none text-lg font-semibold">Experience</li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-indigo-500" : "text-white")} to="/projects" onClick={toggleMenu}>
              <li className=" flex justify-center items-center p-5 border-b border-b-gray-900 list-none text-lg font-semibold">Projects</li>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
