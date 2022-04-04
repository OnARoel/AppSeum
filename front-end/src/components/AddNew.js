import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { bottomNavigationClasses, Button, Typography } from "@mui/material";
import "./CreateAccount.css";
import "./Index.css";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import FileBase64 from "react-file-base64";
import LoggedInNavBar from "./LoggedInNavBar";
import { useEffect } from "react";
import docCookies from 'doc-cookies';
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";

const baseURL = `/api/items/addnew`;

function CreateItem() {

  const [NameValue, setNameValue] = useState("");
  const [AccessionIdValue, setAccessionIdValue] = useState("");
  const [DonorInfoValue, setDonorInfoValue] = useState("");
  const [StorageLocationValue, setStorageLocationValue] = useState("");
  const [ConditionValue, setConditionValue] = useState("");
  const [MaterialValue, setMaterialValue] = useState("");
  const [DimensionsValue, setDimensionsValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [ImageValue, setImageValue] = useState("");
  const [addedState, setAddedState] = useState(false);
  const [DateValue, setDateValue] = useState("");
  const [CompanyValue,setCompanyValue] = useState("");
  const [error, setError] = useState("");

  const [nameValueIsEmpty, setNameValueIsEmpty] = useState(false);
  const [accessionIdValueIsEmpty, setaccessionIdValueIsEmpty] = useState(false);
  const [isAdminValue, setIsAdmin] = useState("");

  const [isImage, setIsImage] = useState(false);

  useEffect(() => {
    var _isAdmin = docCookies.getItem('isAdmin');
    var _company = docCookies.getItem('company');
    setIsAdmin(_isAdmin);
    setCompanyValue(_company);
    setAddedState(false);
  }, []);

  function createPost() {

    console.log(ImageValue);
    let s = ImageValue.trim();

    let bool = false;

    let i = 0;
    let temp = "";  //hardcoded method works, normal method doesn't. Thanks javascript
    for(i=0; i < 15; i++) {
      console.log(s[i]);
      temp += s[i];
    }

    console.log("temp is "+ temp);
    temp.trim();
    console.log("It is contains " + temp.includes("data:image/"));

    if(temp.includes("data:image/")) {
      setIsImage(true); //doesn't work, had to use a boolean? javascript sometimes :/ 
      bool = true;
      console.log("The result is " + bool);
    } 
    else {
      bool = false;
      setIsImage(false); //doesn't w ork, had to use boolean  -__- 
      setError("Error");

      if( temp === null || temp === undefined || temp.includes("undefined") ) { //no image
        console.log("REached here");
        
        bool = true;
        setIsImage(true);
        setError("False");
      } else {
        bool = false;
        setIsImage(false);
        setError("Error");
      }
    }

    console.log("BEST The result is " + isImage);


    NameValue === "" ? setNameValueIsEmpty(true) : setNameValueIsEmpty(false);
    AccessionIdValue === "" ? setaccessionIdValueIsEmpty(true) : setaccessionIdValueIsEmpty(false);

    if (!bool) {
      setError("Error");
      setIsImage(false);
      setAddedState("false");
      console.log("ITs noit an image");
    }

    else if (bool) {

      axios
        .post(baseURL, {
          name: NameValue,
          accessionId: AccessionIdValue,
          donorInfo: DonorInfoValue,
          storageLocation: StorageLocationValue,
          condition: ConditionValue,
          material: MaterialValue,
          dimensions: DimensionsValue,
          date: DateValue,
          description: DescriptionValue,
          image: ImageValue,
          email: docCookies.getItem('email'),
          companyName: CompanyValue
        })
        .then((res) => {
          console.log("Post request was succesfull");
          console.log(docCookies.getItem('email'))
          setAddedState(true);
          setError("None");

        })
        .catch((err) => {
          //could put specific errors in here
          setError("Error");
          console.log(err.response);
        });

      // axios
      //   .post(baseURL, {
      //     name: NameValue,
      //     accessionId: AccessionIdValue,
      //     donorInfo: DonorInfoValue,
      //     storageLocation: StorageLocationValue,
      //     condition: ConditionValue,
      //     material: MaterialValue,
      //     dimensions: DimensionsValue,
      //     date: DateValue,
      //     description: DescriptionValue,
      //     image: ImageValue,
      //     email: docCookies.getItem('email'),
      //     companyName: "default"
      //   })
      //   .then((res) => {
      //     console.log("Post request was succesfull");
      //     console.log(docCookies.getItem('email'))
      //     setAddedState(true);
      //     setError("None");
      //   })
      //   .catch((err) => {
      //     //could put specific errors in here
      //     setError("Error");
      //     console.log(err.response);
      //   });
    }
  }

  return (
    <>
      <div className="MainContainer">
        {isAdminValue === "true" ? (
          <LoggedInNavBar_Admin></LoggedInNavBar_Admin>
        ) : (
          <LoggedInNavBar></LoggedInNavBar>
        )}
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
                Please enter item details
              </Typography>
            </span>

            {/* <TextField
              value={CompanyValue}
              id="outlined-basic"
              label="Company Name"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              disabled
            /> */}
            <TextField
              value={NameValue}
              onChange={(e) => setNameValue(e.target.value)}
              id="outlined-basic"
              label="Item Name"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              required
              error={nameValueIsEmpty === true ? true : false}
              helperText={
                nameValueIsEmpty === true ? "Please enter a Name Value" : ""
              }
            />
            <TextField
              value={AccessionIdValue}
              onChange={(e) => setAccessionIdValue(e.target.value)}
              id="outlined-basic"
              label="Accession ID"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              required
              error={accessionIdValueIsEmpty === true ? true : false}
              helperText={
                accessionIdValueIsEmpty === true
                  ? "Please enter a Accession ID Value"
                  : ""
              }
            />
            <div>
              <TextField
                value={DonorInfoValue}
                onChange={(e) => setDonorInfoValue(e.target.value)}
                id="outlined-basic"
                label="Donor Information"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              />

              <TextField
                value={StorageLocationValue}
                onChange={(e) => setStorageLocationValue(e.target.value)}
                id="outlined-basic"
                label="Storage Location"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              />
           </div>
           <div>
              <TextField
                value={ConditionValue}
                onChange={(e) => setConditionValue(e.target.value)}
                id="outlined-basic"
                label="Condition of Item"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              /> 
              
              
              <TextField
                value={MaterialValue}
                onChange={(e) => setMaterialValue(e.target.value)}
                id="outlined-basic"
                label="Materials of Item"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              />
           </div>
           <div>
              <TextField
                value={DimensionsValue}
                onChange={(e) => setDimensionsValue(e.target.value)}
                id="outlined-basic"
                label="Dimensions of Item"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
              />
              <TextField
                value={DateValue}
                onChange={(e) => setDateValue(e.target.value)}
                id="outlined-basic"
                size="small"
                variant="outlined"
                sx={{ mt: 5, mr: 3 }}
                label="Accession Date"
                type="date"
                defaultValue="2022-03-24"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <TextField
              style={{ width: 500 }}
              value={DescriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              id="outlined-multiline-static"
              label="Description of Item"
              size="small"
              variant="outlined"
              multiline
              rows={7}
              sx={{ mt: 5, mr: 3 }}
            />


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


            <div>
              <Button
                onClick={createPost}
                variant="outlined"
                size="small"
                sx={{ mt: 5, width: "50%", display: "block" }}
              >
                Add New
              </Button>
            </div>
            {error === "Error" ? (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle><strong>An error occurred</strong></AlertTitle>
                {!isImage ? "Please upload a valid image file" : ""}
                {!isImage? <br></br> : ""}

                {nameValueIsEmpty ? "Please enter a valid Name Value" : ""}
                {!nameValueIsEmpty? <br></br> : ""}
                <br></br>
                {accessionIdValueIsEmpty? "Please enter a valid accession ID value" : ""}
                {!accessionIdValueIsEmpty? <br></br> : ""}
              </Alert>
            ) : (
              <Alert severity={addedState ? "success" : "info"} sx={{ mt: 2 }}>
                {addedState
                  ? "You have succesfully added a new item"
                  : "Please enter your item information"}
              </Alert>
            )}
          </Box>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default CreateItem;
