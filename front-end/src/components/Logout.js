import React from 'react';
import docCookies from 'doc-cookies';
import { Redirect } from "react-router-dom"; 

function Logout() {

  docCookies.removeItem("token");
  docCookies.removeItem("isAdmin");
  docCookies.removeItem("_id");
  docCookies.removeItem("company");
  localStorage.removeItem("loggedIn")

  return (
    <>
        <Redirect to={{ pathname: "/", state: { "loggedIn": false} }} />
    </>
)
}

export default Logout