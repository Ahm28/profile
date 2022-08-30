import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';

// const pages = ['home', 'about', 'contact', 'portoflios', 'journey', 'blog' ];
const pages = [
  {id: 1, page: 'home', path: '/'},
  {id: 2, page: 'about', path: '/about'},
  {id: 3, page: 'contact', path: '/contact'},
  {id: 4, page: 'portfolios', path: '/portfolios'},
  // {id: 5, page: 'journey', path: '/journey'},
  {id: 6, page: 'blog', path: '/blog'}
];

const ResponsiveAppBar = ({active}) => {

  console.log('active', active);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='transparent'>
      <Container>
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: 'white'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={item.id} onClick={() => {
                  handleCloseNavMenu();
                  navigate(item.path)
                }}>
                  <Typography textAlign="center" sx={{ textTransform: 'capitalize', fontWeight: 700, borderBottom: active === item.page ?   '1px solid #FDB827' : 'none', color: active === item.page ?  '#FDB827' : 'black'}}>{item.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {pages.map((item) => (
              <Button
                key={item.id}
                onClick={() => {
                  handleCloseNavMenu()
                  navigate(item.path)
                }}
                sx={{
                  my: 2, 
                  color: active === item.page ?  '#FDB827' : 'white',
                  display: 'block', 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 700, 
                  textTransform: "capitalize", 
                  fontSize: '14px', 
                  '&:hover': { color: '#FDB827'}
                }}
              >
                {item.page}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
