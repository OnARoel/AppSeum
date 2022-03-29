import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography } from '@mui/material';
import "./CreateAccount.css";
import "./Index.css";
import NavBar from './NavBar';
import Footer from "./Footer";
import { useState } from 'react'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import docCookies from 'doc-cookies';
import FileBase64 from "react-file-base64";

const baseURL = `http://localhost:4000/api/users/register`;


function CreateAccount() {

    const [signedUpState, setSignedUpState] = useState('false');
    const [UsernameValue, setUsernameValue] = useState('');
    const [EmailValue, setEmailValue] = useState('');
    const [PasswordValue, setPasswordValue] = useState('');
    const [isAdminValue, setAdminValue] = useState('');
    const [error, setError] = useState('');
    const [ImageValue, setImageValue] = useState("");
    const [CompanyValue, setCompanyValue] = useState('');
    const [loggedinState, setLoggedinState] = useState("false");


    function createPost() {
        axios
            .post(
                baseURL,
                { 
                    username: UsernameValue, 
                    email: EmailValue, 
                    password: PasswordValue, 
                    isAdmin: isAdminValue,
                    image: ImageValue,
                    company: CompanyValue
                }
            )
            .then((res) => {
                docCookies.setItem('isAdmin',res.data.isAdmin); 
                docCookies.setItem('_id',res.data._id);
                docCookies.setItem('token',res.data.token);
                docCookies.setItem('email', EmailValue);
                docCookies.setItem('company', CompanyValue);
                setSignedUpState('true');
                setLoggedinState('true');
                setError('False');
            })
            .catch((err) => {
                setError('Error');
                console.log(err.response);
            });
    }

    if (signedUpState === 'true') {
        localStorage.setItem("loggedIn", "true");
        return (
            <>
                <Redirect to={{ pathname: "/loggedInHome", state: { "loggedIn": true} }} />
            </>
        )
                    console.log(loggedinState);
    }

    return (
        <>
            <div className='MainContainer'>
                <NavBar></NavBar>
                <div className='LoginForm'>
                    <Box
                        component="form"
                        sx={{
                            border: "0.5px solid white",
                            p: 5,
                            backgroundColor: "white",
                            boxShadow: 5,
                            borderRadius: 2,
                            textAlign: 'left'

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <span>
                            <Typography variant="h6" component="h6" >
                                Please enter your login details to create an account
                            </Typography>
                        </span>
                        <div>
                        <TextField value={UsernameValue} onChange={(e) => setUsernameValue(e.target.value)}
                            id="outlined-basic" label="Username" size="small" varint="outlined" sx={{ mt: 5, mr: 3 }}
                        />
                        <TextField value={EmailValue} onChange={(e) => setEmailValue(e.target.value)}
                            id="outlined-basic" label="Email" size="small" type="email" variant="outlined" sx={{ mt: 5 }}
                        />
                        </div>
                        <div>
                        <TextField value={PasswordValue} onChange={(e) => setPasswordValue(e.target.value)}
                            id="outlined-basic" size="small" label="Password" type="password" variant="outlined" sx={{ mt: 5, mr: 3}}
                        />
                        <TextField value={CompanyValue} onChange={(e) => setCompanyValue(e.target.value)}
                            id="outlined-basic" size="small" label="Company" variant="outlined" sx={{ mt: 5 }}
                        />
                        </div>
                        <div>
                            <InputLabel id="demo-simple-select-label" sx={{mt: 2}}>isAdmin</InputLabel>
                            <Select
                                    labelId="demo-simple-select-label"
                                    id="outlined-basic"
                                    value={isAdminValue}
                                    label="isAdmin"
                                    onChange={(e) => setAdminValue(e.target.value)}
                                    sx={{width:"5em", height: "3em"}}
                                    >
                                <MenuItem value={false}>false</MenuItem>
                                <MenuItem value={true}>true</MenuItem>
                                
                            </Select>
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
                        <Button onClick={createPost} variant="outlined" size="small" sx={{ mt: 5, width: "30%", display: 'block' }}>
                            Sign Up
                        </Button>

                        {error === 'Error' ?
                            <Alert severity="error" sx={{ mt: 2 }}>
                                <AlertTitle>An error occured</AlertTitle>
                                The email or username you've entered already exists— <br></br><strong>Please try again</strong>
                            </Alert>

                            :
                            <Alert severity="info" sx={{ mt: 2 }}>
                                <AlertTitle>Please enter all fields</AlertTitle>
                            </Alert>
                        }
                    </Box>
                </div>
            </div>
            <Footer></Footer>
        </>

    );
}

export default CreateAccount;
