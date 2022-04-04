import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
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
import docCookies from "doc-cookies";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";

const baseURL = `/api/items/editById`;
const baseURL_GET = "/api/items/findById/";

function Edit(props) {
  //const [addedState, setAddedState] = useState("false");

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

  useEffect(() => {
    var _isAdmin = docCookies.getItem("isAdmin");
    setIsAdmin(_isAdmin);
    setAddedState(false);
    getPost(props.location.id);
  }, []);

  
function getPost(_id) {
    axios
      .get(baseURL_GET+_id, {})
      .then((res) => {
            setNameValue(res.data.name);
            setAccessionIdValue(res.data.accessionId);
            setDonorInfoValue(res.data.donorInfo);
            setStorageLocationValue(res.data.storageLocation);
            setConditionValue(res.data.condition);
            setMaterialValue(res.data.material);
            setDimensionsValue(res.data.dimensions);
            setDescriptionValue(res.data.description);
            setDateValue(res.data.date);
            setImageValue(res.data.image);
            setCompanyValue(res.data.company);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function createPost() {
    /* if (NameValue.trim() === "") {
           setError("Name of Item is Required");
         }
         setError("Success");*/

    NameValue === "" ? setNameValueIsEmpty(true) : setNameValueIsEmpty(false);
    AccessionIdValue === ""
      ? setaccessionIdValueIsEmpty(true)
      : setaccessionIdValueIsEmpty(false);
    console.log("ID IS " + props.location.id);
    axios
      .put(`${baseURL}/${props.location.id}`, {
        name: NameValue,
        accessionId: AccessionIdValue,
        donorInfo: DonorInfoValue,
        storageLocation: StorageLocationValue,
        condition: ConditionValue,
        material: MaterialValue,
        dimensions: DimensionsValue,
        date: DateValue,
        description: DescriptionValue,
        image: ImageValue
      })
      .then((res) => {
        console.log(res);
        setAddedState(true);
        setError("None");
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
        {isAdminValue === "true" ? (
          <LoggedInNavBar_Admin></LoggedInNavBar_Admin>
        ) : (
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
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>You are updating an item's values</AlertTitle>
                  Please enter your updated values
                </Alert>
              </Typography>
            </span>
            <TextField
              value={CompanyValue}
              id="outlined-basic"
              label="Company Name"
              size="small"
              variant="outlined"
              sx={{ mt: 5, mr: 3 }}
              disabled
            />
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

            <Button
              onClick={createPost}
              variant="outlined"
              size="small"
              sx={{ mt: 5, width: "50%", display: "block" }}
            >
              Update Item
            </Button>

            {error === "Error" ? (
              <Alert severity="error" sx={{ mt: 2 }}>
                <AlertTitle>An error occurred</AlertTitle>
                Name and/or Accession ID can't be empty. Accession ID can't be a
                duplicate.
                <br></br>
                <strong>Please try again</strong>
              </Alert>
            ) : (
              <Alert severity={addedState ? "success" : "info"} sx={{ mt: 2 }}>
                {addedState
                  ? "You have succesfully updated the old item"
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
export default Edit;
