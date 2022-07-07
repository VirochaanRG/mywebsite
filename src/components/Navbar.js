import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {HashLink as Link} from "react-router-hash-link";

const pages = [
  { name: 'Home', 
    tag: '#Home',
  },
  {
    name: 'About',
    tag: '#About',
  },
  {
    name: 'Skills',
    tag: '#Skills',
  },
  {
    name: 'Projects',
    tag: '#Projects',
  },
  {
    name: 'Contact',
    tag: '#Contact',
  }];

const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };


  return (
    <AppBar position="sticky" sx={{width: "100vw", backgroundColor: '#212529', display: "flex", flexDirection: "column"}}>
      <Container>
        <Toolbar disableGutters >
          <LightbulbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'#ffb742'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffb742',
              textDecoration: 'none',
            }}
          >
            VIRO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center', width: "100vw" }}>
            {pages.map((page) => (
              <Link to={page.tag} smooth>
                <Button
                  key={page.name}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <LightbulbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color:'#ffb742', visibility: 'hidden' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#ffb742',
              textDecoration: 'none',
              visibility: 'hidden'
            }}
          >
            VIRO
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
