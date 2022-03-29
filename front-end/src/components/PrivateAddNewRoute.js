// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AddNew from "./AddNew";


const PrivateRoute = (props) => {
  // Add your own authentication on the below line.
  //const isLoggedIn = AuthService.isLoggedIn();
    if (localStorage.getItem("loggedIn") !== "true") {
      return (
        <>
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        </>
      );
    } else {
      return <AddNew />;
    };
}

export default PrivateRoute;
