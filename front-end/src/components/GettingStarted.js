import "./Index.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Login.css";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";
import docCookies from "doc-cookies";

function GettingStarted() {
  let isAdmin = docCookies.getItem("isAdmin");
  let isLoggedIn = localStorage.getItem("loggedIn");
  if (isAdmin !== "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar> </LoggedInNavBar>
          <main>
            <section>
              <div className="LoginForm">
                <Box
                  component="form"
                  sx={{
                    border: "0.5px solid white",
                    p: 5,
                    backgroundColor: "white",
                    boxShadow: 5,
                    borderRadius: 2,
                    textAlign: "left",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <span>
                    <Typography variant="h6" component="h6">
                      Here are 4 tips for Getting Started
                    </Typography>
                    <br />
                    <Typography>
                      <b>1. Set your Privilege Level</b>
                      <br />
                      There are two parts to AppSeum. An admin portal where the
                      admin can manage all accounts created within the company
                      and a regular user account without admin access. We
                      recommend Admins are in charge of the admin account and
                      all other workers can have a regular account login. First,
                      go to the "Create a New Account" page and fill out the
                      necessary information. Once the account has been verified,
                      go to the login page and login with your credentials.
                    </Typography>
                    <br />
                    <Typography>
                      <b> 2. Archival Management </b>
                      <br />
                      Once logged in to the website, you will see in the menu an
                      "Add New" option which will allow you to add a new item to
                      your online database. You can insert the name, accession
                      id, donor information, location, date accessioned,
                      condition, size, details, and an image. After successfully
                      adding the item, you can navigate to the "View Items" page
                      and see all of the items that exist in your database. You
                      can easily add, delete, edit and search items once on the
                      Items page.
                      <br />
                      <br />
                      <b>3. Sharing to Social Media On the Items page</b>
                      <br />
                      There is an option to share a particular item to social
                      media. You can select which social media platform your
                      would like to share the item to and it will then generate
                      a post with the items photo and information. This is great
                      for letting an audience see what is available in your
                      collection as a sneak peek!
                      <br />
                      <br />
                      <b>4. Basic Admin Usability Tips</b>
                      <br />
                      As an admin managing the users and items within your
                      business, you have special privileges. You can edit all
                      users You can delete users You can create new users You
                      can see items from all users
                    </Typography>
                  </span>
                </Box>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
  if (isAdmin === "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar_Admin> </LoggedInNavBar_Admin>
          <main>
            <section>
              <div className="LoginForm">
                <Box
                  component="form"
                  sx={{
                    border: "0.5px solid white",
                    p: 5,
                    backgroundColor: "white",
                    boxShadow: 5,
                    borderRadius: 2,
                    textAlign: "left",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <span>
                    <Typography variant="h6" component="h6">
                      Here are 4 tips for Getting Started
                    </Typography>
                    <br />
                    <Typography>
                      <b>1. Set your Privilege Level</b>
                      <br />
                      There are two parts to AppSeum. An admin portal where the
                      admin can manage all accounts created within the company
                      and a regular user account without admin access. We
                      recommend Admins are in charge of the admin account and
                      all other workers can have a regular account login. First,
                      go to the "Create a New Account" page and fill out the
                      necessary information. Once the account has been verified,
                      go to the login page and login with your credentials.
                    </Typography>
                    <br />
                    <Typography>
                      <b> 2. Archival Management </b>
                      <br />
                      Once logged in to the website, you will see in the menu an
                      "Add New" option which will allow you to add a new item to
                      your online database. You can insert the name, accession
                      id, donor information, location, date accessioned,
                      condition, size, details, and an image. After successfully
                      adding the item, you can navigate to the "View Items" page
                      and see all of the items that exist in your database. You
                      can easily add, delete, edit and search items once on the
                      Items page.
                      <br />
                      <br />
                      <b>3. Sharing to Social Media On the Items page</b>
                      <br />
                      There is an option to share a particular item to social
                      media. You can select which social media platform your
                      would like to share the item to and it will then generate
                      a post with the items photo and information. This is great
                      for letting an audience see what is available in your
                      collection as a sneak peek!
                      <br />
                      <br />
                      <b>4. Basic Admin Usability Tips</b>
                      <br />
                      As an admin managing the users and items within your
                      business, you have special privileges. You can edit all
                      users You can delete users You can create new users You
                      can see items from all users
                    </Typography>
                  </span>
                </Box>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="MainContainer">
          <NavBar> </NavBar>
          <main>
            <section>
              <div className="LoginForm">
                <Box
                  component="form"
                  sx={{
                    border: "0.5px solid white",
                    p: 5,
                    backgroundColor: "white",
                    boxShadow: 5,
                    borderRadius: 2,
                    textAlign: "left",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <span>
                    <Typography variant="h6" component="h6">
                      Here are 4 tips for Getting Started
                    </Typography>
                    <br />
                    <Typography>
                      <b>1. Set your Privilege Level</b>
                      <br />
                      There are two parts to AppSeum. An admin portal where the
                      admin can manage all accounts created within the company
                      and a regular user account without admin access. We
                      recommend Admins are in charge of the admin account and
                      all other workers can have a regular account login. First,
                      go to the "Create a New Account" page and fill out the
                      necessary information. Once the account has been verified,
                      go to the login page and login with your credentials.
                    </Typography>
                    <br />
                    <Typography>
                      <b> 2. Archival Management </b>
                      <br />
                      Once logged in to the website, you will see in the menu an
                      "Add New" option which will allow you to add a new item to
                      your online database. You can insert the name, accession
                      id, donor information, location, date accessioned,
                      condition, size, details, and an image. After successfully
                      adding the item, you can navigate to the "View Items" page
                      and see all of the items that exist in your database. You
                      can easily add, delete, edit and search items once on the
                      Items page.
                      <br />
                      <br />
                      <b>3. Sharing to Social Media On the Items page</b>
                      <br />
                      There is an option to share a particular item to social
                      media. You can select which social media platform your
                      would like to share the item to and it will then generate
                      a post with the items photo and information. This is great
                      for letting an audience see what is available in your
                      collection as a sneak peek!
                      <br />
                      <br />
                      <b>4. Basic Admin Usability Tips</b>
                      <br />
                      As an admin managing the users and items within your
                      business, you have special privileges. You can edit all
                      users You can delete users You can create new users You
                      can see items from all users
                    </Typography>
                  </span>
                </Box>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default GettingStarted;
