// Footer Component (Footer.js)
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        
        {/* Footer Left - Name and Copyright */}
        <div className= " text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-indigo-500">Kaitb Ansari</h2>
          <p className="text-gray-400">© {new Date().getFullYear()} Kaitb Ansari. All rights reserved.</p>
        </div>

        {/* Footer Right - Social Media Links */}
        <div className="flex justify-center items-center gap-2">
              <NavLink to="#">
                <li className="list-none"><i className="fa-brands fa-linkedin text-2xl"></i></li>
              </NavLink>
              <NavLink to="#">
                <li className="list-none"><i className="fa-brands fa-instagram text-2xl"></i></li>
              </NavLink>
              <NavLink to="#">
                <li className="list-none"><i className="fa-brands fa-square-x-twitter text-2xl"></i></li>
              </NavLink>
              <NavLink to="#">
                <li className="list-none"><i className="fa-brands fa-github text-2xl"></i></li>
              </NavLink>
            </div>

      </div>
    </footer>
  );
}

export default Footer;
