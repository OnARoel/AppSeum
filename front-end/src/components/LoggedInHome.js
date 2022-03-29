import "./Index.css";
import React from "react";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import HomeImage from "./HomeImage";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";
import Alert from '@mui/material/Alert';
import { Redirect } from 'react-router-dom';
import docCookies from 'doc-cookies';
import "./LoggedInHome.css";

function LoggedInHome(props) {
    if (props.location.state === null || props.location.state === undefined) {
        return (
            <>
                <Redirect to={{ pathname: "/" }} />
            </>
        );
    }

    else {
        console.log("logged in");
        let isAdmin = docCookies.getItem('isAdmin');
        let navBar;
        if(isAdmin === 'true'){
            navBar = <LoggedInNavBar_Admin></LoggedInNavBar_Admin>
        }else{
            navBar = <LoggedInNavBar></LoggedInNavBar>
        }
        return (
          <>
            <div className="MainContainer">
              {navBar}
              <main>
                <section>
                  <div className="loggedInContainer" >
                    <Typography variant="h4" component="h4">
                      Welcome to your museum archive home 
                      {/* <Alert
                        variant="outlined"
                        severity="success"
                        sx={{ mb: 2 }}
                      >
                      </Alert> */}
                    </Typography>
                    <HomeImage />
                  </div>
                </section>
              </main>
            </div>
            <Footer />
          </>
        );
    }
}

export default LoggedInHome