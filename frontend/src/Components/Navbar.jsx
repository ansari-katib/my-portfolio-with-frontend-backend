import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar, Toolbar, IconButton, Box,
  Typography, Menu, MenuItem, Button, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../Routes/Home.css";
import { GITHUB, LINKEDIN_URL, TWITTER_URL } from '../constants/constants';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    <Box className=" flex justify-center items-center mt-4 md:mt-10" sx={{ px: 2, py: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderRadius: 3,
          backgroundColor: "rgba(46, 35, 108, 0.6)",
          width: '100%',
          backdropFilter: "blur(10px)",
          maxWidth: { xs: '95%', sm: '85%', md: '75%', lg: '65%' },
          mx: 'auto',
          boxShadow: "2px 2px 32px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem' , lg:'2rem' },
              backgroundImage: 'linear-gradient(90deg, orange, yellow, pink)',
              backgroundSize: '200% 100%',
              backgroundPosition: 'right top',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'moveGradient 2s linear infinite',
            }}
          >
            <Link to='/' >
            Hey It's Katib
            </Link>
          </Typography>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map(({ to, label }) => (
              <Button
                key={to}
                component={NavLink}
                to={to}
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1rem', md: '1rem' , lg:'1rem'},
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

          {/* Social Icons */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton component="a" href={LINKEDIN_URL} target="_blank" sx={{ color: '#3559E0' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton component="a" href={TWITTER_URL} target="_blank" sx={{ color: '#4CB9E7' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton component="a" href={GITHUB} target="_blank" sx={{ color: 'white' }}>
                <GitHubIcon />
              </IconButton>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1, gap: 2 }}>
            <IconButton component="a" href={LINKEDIN_URL} target="_blank" sx={{ color: '#3559E0' }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href={TWITTER_URL} target="_blank" sx={{ color: '#4CB9E7' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton component="a" href={GITHUB} target="_blank" sx={{ color: 'black' }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Menu>
      </AppBar>
    </Box>
  );
}

export default Navbar;
