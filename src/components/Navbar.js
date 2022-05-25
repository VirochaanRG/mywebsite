import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };


  return (
    <AppBar position="sticky" sx={{backgroundColor: '#212529', display: "flex", flexDirection: "column"}}>
      <Container maxWidth="xl" >
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
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
