import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import "./Login.css";
import "./Index.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";


  return (
    <>
      <div className="MainContainer">
        <NavBar></NavBar>
        <div className="Form">
          <Box
            component="form"
            sx={{
              border: "0.5px solid #a3a3a3",
              p: 5,
              backgroundColor: "#fafafa",
              boxShadow: 5,
              borderRadius: 2,
              textAlign: "left",
            }}
            noValidate
            autoComplete="off"
          >
            <span>
              <Typography variant="h6" component="h6">
                Please enter your login details to login. work yet.
              </Typography>
            </span>

            <TextField
              value={EmailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              id="outlined-basic"
              label="Email"
              size="small"
              type="email"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
            />
            <TextField
              value={PasswordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              id="outlined-basic"
              size="small"
              label="Password"
              type="password"
              variant="outlined"
              sx={{ mt: 5 }}
            />

            <Button
              onClick={createPost}
              variant="outlined"
              size="small"
              sx={{ mt: 5, width: "30%", display: "block" }}
            >
              Login
            </Button>

            {error === "Error" ? (
              <Alert severity="warning" sx={{ mt: 2 }}>
                <AlertTitle>An error occured</AlertTitle>
                Your email or password was incorrect— <br></br>
                <strong>Please try again</strong>
              </Alert>
            ) : (
              <Alert severity="info" sx={{ mt: 2 }}>
                <AlertTitle>Please make sure your input is correct</AlertTitle>
                This is some placeholder text— <strong>...</strong>
              </Alert>
            )}
          </Box>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
