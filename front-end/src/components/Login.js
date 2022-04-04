import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import "./Login.css";
import "./Index.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from 'react'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import docCookies from 'doc-cookies';

const baseURL = `/api/users/signin`;


function Login() {

  const [loggedinState, setLoggedinState] = useState('false');
  const [EmailValue, setEmailValue] = useState('');
  const [PasswordValue, setPasswordValue] = useState('');
  const [isAdminValue, setIsAdminValue] = useState('');
  const [error, setError] = useState('');

  function createPost() {
    axios
      .post(
        baseURL,
        { email: EmailValue, password: PasswordValue }
      )
      .then((res) => {  
        docCookies.setItem('token',res.data.token);
        docCookies.setItem('isAdmin',res.data.isAdmin); 
        docCookies.setItem('_id',res.data._id);
        docCookies.setItem('email', EmailValue);
        docCookies.setItem("company",res.data.company)
        setIsAdminValue(res.data.isAdmin)
        setLoggedinState('true');
        setError('False');
      })
      .catch((err) => {
        setError('Error');
        console.log("error occured");
        console.log(err.response);
      });
  }

  if (loggedinState === 'true') {
            localStorage.setItem("loggedIn", "true");

    console.log("???validate isAdmin = "+isAdminValue)
    console.log(loggedinState);
    return (
      <>
          <Redirect to={{ pathname: "/loggedInHome", state: { "loggedIn": true,"isAdmin": isAdminValue} }} />      
      </>

    )
  }else{
    return (
      <>
  
        <div className="MainContainer">
          <NavBar></NavBar>
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
                  Please enter your login details to login.
                  work yet.
                </Typography>
              </span>
  
  
              <TextField value={EmailValue} onChange={(e) => setEmailValue(e.target.value)}
                id="outlined-basic" label="Email" size="small" type="email" variant="outlined" sx={{ mt: 5 , mr: 3 }}
              />
              <TextField value={PasswordValue} onChange={(e) => setPasswordValue(e.target.value)}
                id="outlined-basic" size="small" label="Password" type="password" variant="outlined" sx={{ mt: 5 }}
              />
  
              <Button onClick={createPost}
                variant="outlined"
                size="small"
                sx={{ mt: 5, width: "30%", display: "block" }}
              >
                Login
              </Button>
  
              {error === 'Error' ?
                <Alert severity="error" sx={{ mt: 2 }}>
                  <AlertTitle>An error occured</AlertTitle>
                  Your email or password was incorrect— <br></br><strong>Please try again</strong>
                </Alert>
  
                :
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Please enter your login details</AlertTitle>
                  If you need to create an account, go to <a href="/CreateAccount">Create Account</a>
                </Alert>
              }
            </Box>
          </div>
        </div>
        <Footer></Footer>
      </>
    );

  }

  
}

export default Login;
