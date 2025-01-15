import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../Routes/Home.css";


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null); // Mobile menu state

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/education", label: "Education" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='bg-black flex justify-center items-center' >
      <AppBar
        position="static"
        sx={{
          borderRadius: 5,
          backgroundColor: "#2E236C",
          maxWidth: "70%",
          display: "flex",
          boxShadow: "2px 2px 32px rgba(255, 255, 255, 0.5)"
        }}>
        <Toolbar>
          <Typography
            varient="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'transparent', 
              backgroundImage: 'linear-gradient(90deg, orange, yellow, pink)', // Define the gradient colors
              backgroundSize: '200% 100%', 
              backgroundPosition: 'right top', 
              backgroundClip: 'text', 
              WebkitBackgroundClip: 'text', // For Safari and Chrome support
              transition: 'background-position 1s ease', // Add a transition effect for smoothness
              animation: 'moveGradient 2s linear infinite', // Apply continuous animation
            }}
          >
            Hey It's Katib
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 4 }}>
            {navLinks.map(({ to, label }) => (
              <Button
                key={to}
                component={NavLink}
                to={to}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&.active': { color: '#15F5BA' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/katib-ansari-95ab96252/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: '#3559E0' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/KatibAnsari3"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: '#4CB9E7' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/ansari-katib"
              target="_blank"
              aria-label="GitHub"
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>

          {/* Hamburger Menu Icon for Mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {navLinks.map(({ to, label }) => (
            <MenuItem key={to} onClick={handleCloseNavMenu}>
              <Typography
                component={NavLink}
                to={to}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                  '&.active': { color: '#4CAF50' },
                }}
              >
                {label}
              </Typography>
            </MenuItem>
          ))}
          {/* Social Icons in Mobile Menu */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/katib-ansari-95ab96252/"
              target="_blank"
              aria-label="LinkedIn"
              sx={{ color: '#3559E0' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://x.com/KatibAnsari3"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: '#4CB9E7' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/ansari-katib"
              target="_blank"
              aria-label="GitHub"
              sx={{ color: 'black' }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Menu>
      </AppBar>
    </div>
  );
}

export default Navbar;
