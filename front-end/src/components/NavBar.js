import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { ListItem } from '@mui/material';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
//import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Grid from '@mui/material/Grid';
import LogoImage from './LogoImage';
import "./NavBarStyles/NavBarStyles.css";
import GroupAdd from '@mui/icons-material/GroupAdd';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function NavBar() {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  //lots of placeholder text used
  //change whenever is needed
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton component="a" href="/createaccount">
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/login">
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>


      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 5 }}>
      <AppBar
        position="fixed"
        style={{ background: "white", color: "black", mt: -5 }}
        elevation={1}
      >
        <Toolbar className='headToolBar'>
          {[""].map((anchor) => (
            <React.Fragment key={anchor}>
              <div className='toolBar'>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={toggleDrawer(anchor, true)}
                >
                  {anchor} <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            </React.Fragment>
          ))}
          <Box>
            <Link to="/">
              <LogoImage className='LogoImage' />
            </Link>
          </Box>

          <div className='NavBarButtons'>
            <Tooltip title="Go Home">
              <Button color="inherit" sx={{ textAlign: "right" , mr: "1em"}}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <Grid container direction="row" alignItems="center">
                    <HomeIcon
                      style={{ color: "black" }}
                      size="large"
                    ></HomeIcon>
                    Home
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="Create Account">
              <Button color="inherit" sx={{ textAlign: "right" , mr: "1em"}}>
                <Link to="/createaccount" style={{ textDecoration: "none", color: "black" }}>
                  <Grid container direction="row" alignItems="center">
                    <GroupAddIcon
                      style={{ color: "black" }}
                      size="large"
                    ></GroupAddIcon>
                    Sign Up
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="Login">
              <Button color="inherit" sx={{ textAlign: "right" , mr: "1em"}}>
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                  <Grid container direction="row" alignItems="center">
                    <LoginIcon
                      style={{ color: "black" }}
                      size="large"
                    ></LoginIcon>
                    Login
                  </Grid>
                </Link>
              </Button>
            </Tooltip>
          </div>


        </Toolbar>
      </AppBar>
    </Box>
  );
}