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
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PageviewIcon from "@mui/icons-material/Pageview";
//import HomeIcon from '@mui/icons-material/Home';
import {
  Link
} from "react-router-dom";
//color pallete used from
//https://flatuicolors.com/palette/ru
import LoginIcon from '@mui/icons-material/Login';
import { Tooltip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import LogoImage from './LogoImage';
import GroupAdd from '@mui/icons-material/GroupAdd';
import ListItemButton from '@mui/material/ListItemButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import "./NavBarStyles/NavBarStyles.css";
import docCookies from 'doc-cookies';

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
          <ListItemButton component="a" href="/loggedInHome">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Accounts" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/items">
            <ListItemIcon>
              <PageviewIcon />
            </ListItemIcon>
            <ListItemText primary="View All Items" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/addnew">
            <ListItemIcon>
              <PageviewIcon />
            </ListItemIcon>
            <ListItemText primary="Add New" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <PageviewIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
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
        <Toolbar className="headToolBar">
          {[""].map((anchor) => (
            <React.Fragment key={anchor}>
              <div className="toolBar">
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
            <Link
              to={{ pathname: "/loggedInHome", state: { loggedIn: true } }}
              style={{ textDecoration: "none" , color: "black"}}
            >
              <LogoImage />
            </Link>
          </Box>

          <div className="NavBarButtons">
            <Tooltip title="Go Home">
              <Button color="inherit" sx={{ ml: "auto", mr: "1em" }}>
                <Link
                  to={{ pathname: "/loggedInHome", state: { loggedIn: true } }}
                  style={{ textDecoration: "none" , color: "black"}}
                >
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

            <Tooltip title="My Account">
              <Button color="inherit" sx={{ mr: "1em" }}>
                <Link
                  to={{
                    pathname: "/Account",
                    state: {
                      loggedIn: true,
                      isAdmin: docCookies.getItem("isAdmin"),
                    },
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid container direction="row" alignItems="center">
                    <AccountCircleIcon
                      style={{ color: "black" }}
                      size="large"
                    ></AccountCircleIcon>
                    My Account
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="Manage Accounts">
              <Button color="inherit" sx={{ mr: "1em" }}>
                <Link
                  to={{
                    pathname: "/AccountList",
                    state: {
                      loggedIn: true,
                      isAdmin: docCookies.getItem("isAdmin"),
                    },
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid container direction="row" alignItems="center">
                    <AccountCircleIcon
                      style={{ color: "black" }}
                      size="large"
                    ></AccountCircleIcon>
                    Manage Accounts
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="View All Items">
              <Button color="inherit" sx={{ mr: "1em" }}>
                <Link to="/items" style={{ textDecoration: "none", color: "black" }}>
                  <Grid container direction="row" alignItems="center">
                    <PageviewIcon
                      style={{ color: "black" }}
                      size="large"
                    ></PageviewIcon>
                    View Items
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="Add New">
              <Button color="inherit" sx={{ mr: "1em" }}>
                <Link to="/addnew" style={{ textDecoration: "none" , color: "black"}}>
                  <Grid container direction="row" alignItems="center">
                    <AddCircleIcon
                      style={{ color: "black" }}
                      size="large"
                    ></AddCircleIcon>
                    Add New
                  </Grid>
                </Link>
              </Button>
            </Tooltip>

            <Tooltip title="Logout">
              <Button color="inherit" sx={{ mr: "1em" }}>
                <Link to="/logout" style={{ textDecoration: "none" , color: "black" }}>
                  <Grid container direction="row" alignItems="center">
                    <LoginIcon
                      style={{ color: "black" }}
                      size="large"
                    ></LoginIcon>
                    Logout
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