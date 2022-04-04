import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import "./CreateAccount.css";
import "./Index.css";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";
import { useEffect } from "react";
import docCookies from 'doc-cookies';
import FileBase64 from "react-file-base64";

const baseURL_POST = "/api/users/profile";
const baseURL_GET = "/api/users/findById/";

function EditProfile(props) {

  const [usernameValue, setUsernameValue] = useState("");
  const [pswValue, setPswValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isAdminValue, setIsAdminValue] = useState("");
  const [editState, setEditState] = useState(false);
  const [error, setError] = useState("");
  const [nameValueIsEmpty, setNameValueIsEmpty] = useState(false);
  const [emailValueIsEmpty, setemailValueIsEmpty] = useState(false);
  const [CompanyValueIsEmpty, setCompanyValueIsEmpty] =  useState(false);
  const [usertoken,serUsertoken]= useState("");
  const _isAdmin = useState("");
  const [ImageValue, setImageValue] = useState("");
  const [CompanyValue, setCompanyValue] = useState("");

useEffect(() => {
    var _id =  docCookies.getItem('_id');
    if(props.location.state != null && props.location.state.id != null ){
      _id = props.location.state.id
    }
    getPost(_id);
}, []);

function getPost(_id) {
  axios
    .get(baseURL_GET+_id, {})
    .then((res) => {
        setUsernameValue(res.data.username);
        setEmailValue(res.data.email);
        setIsAdminValue(res.data.isAdmin);
        serUsertoken(res.data.token);
        setImageValue(res.data.image);
        setCompanyValue(res.data.company);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

  function createPost() {

    usernameValue === "" ? setNameValueIsEmpty(true) : setNameValueIsEmpty(false);
    emailValueIsEmpty === "" ? setemailValueIsEmpty(true) : setemailValueIsEmpty(false);
    CompanyValueIsEmpty ===""? setCompanyValueIsEmpty(true) : setCompanyValueIsEmpty(false);
    axios
      .put(baseURL_POST, {
            username: usernameValue,
            email: emailValue,
            isAdmin: isAdminValue,
            password: pswValue,
            image: ImageValue,
            company: CompanyValue
        },{
            headers: { Authorization: `Bearer ${usertoken}` },
          }
        )
      .then((res) => {
        console.log(res);
        setEditState(true);
        setError("None");
        // if is user, reset cookies
        if(res.data._id == docCookies.getItem("_id"))
        {
          docCookies.setItem('isAdmin',isAdminValue); 
          docCookies.setItem('company', CompanyValue);
        }
      })
      .catch((err) => {
        //could put specific errors in here
        setError("Error");
        console.log(err.response);
      });
  }

  return (
    <>
      <div className="MainContainer">
          {_isAdmin?(
            <LoggedInNavBar_Admin></LoggedInNavBar_Admin>
          ):(
            <LoggedInNavBar></LoggedInNavBar>
          )}
        
        <div className="LoginForm">
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
                Edit personal profile
              </Typography>
            </span>
            <TextField
              value={CompanyValue}
              onChange={(e) => setCompanyValue(e.target.value)}
              id="outlined-basic"
              label="company"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              required
              error={CompanyValueIsEmpty === true ? true : false}
              helperText={CompanyValueIsEmpty === true ? "Please enter a companyName" : ""}
            />
            <TextField
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              id="outlined-basic"
              label="username"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              required
              error={nameValueIsEmpty === true ? true : false}
              helperText={nameValueIsEmpty === true ? "Please enter a username" : ""}
            />
            <TextField
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              id="outlined-basic"
              label="email"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              required
              error={emailValueIsEmpty === true ? true : false}
              helperText={emailValueIsEmpty === true ? "Please enter an email" : ""}
            />
            <div>
              <TextField
                value={pswValue}
                onChange={(e) => setPswValue(e.target.value)}
                id="outlined-basic"
                label="password"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              />

            </div>

            <div>
              <Button

                size="small"
                sx={{ mt: 5, width: "45%", display: "block" }}
              >
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => setImageValue(base64)}
                />
              </Button>
            </div>

            <Button
              onClick={createPost}
              variant="outlined"
              size="small"
              sx={{ mt: 5, width: "50%", display: "block" }}
            >
              Save
            </Button>

            {error === "Error" ? (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle>An error occurred</AlertTitle>
                username and email can't be empty.
                <br></br>
                <strong>Please try again</strong>
              </Alert>
            ) : (

              <Alert severity={editState ? "success" : "info"} sx={{ mt: 2 }}>
                {editState ? "You have successfully edited your information!" : "Please enter your personal information"}
              </Alert>
            )}
          </Box>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default EditProfile;
