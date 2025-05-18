// Footer Component (Footer.js)
import React from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import { GITHUB, LINKEDIN_URL, TWITTER_URL } from "../constants/constants";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t-2 border-gray-700 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
        
        {/* Footer Left - Name and Copyright */}
        <div className= " text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-indigo-500">Katib Ansari</h2>
          <p className="text-gray-400">© {new Date().getFullYear()} Katib Ansari. All rights reserved.</p>
        </div>

        {/* Footer Right - Social Media Links */}
        <div className="flex justify-center items-center gap-2">
              <NavLink to={LINKEDIN_URL}>
                <li className="list-none"><LinkedInIcon sx={{color:"#3559E0"}} /></li>
              </NavLink>
              <NavLink to={TWITTER_URL}>
                <li className="list-none"><TwitterIcon sx={{color:"#4CB9E7"}} /></li>
              </NavLink>
              <NavLink to={GITHUB}>
                <li className="list-none"><GitHubIcon sx={{color:""}} /></li>
              </NavLink>
            </div>

      </div>
    </footer>
  );
}

export default Footer;
