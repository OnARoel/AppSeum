import "./Index.css";
import React from "react";
import Footer from "./Footer";
import { Button, Card, TextField, Typography } from "@mui/material";
import LoggedInNavBar from "./LoggedInNavBar";
import LOGGED_IN_NAVBAR_ADMIN from "./LoggedInNavBar_Admin";
import axios from "axios";
import { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ConfirmDialog from "./ConfirmDialog";
import docCookies from "doc-cookies";
import { Link } from "react-router-dom";

import {
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";

const baseURL = `http://localhost:4000/api/items`;

function Items() {

  const [open, setOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isAdminValue, setIsAdmin] = useState("");
  const [rowID, setrowID] = useState("");

  const [newItemName, setnewItemName] = useState("");
  const [newDonorINfo, setnewDonorInfo] = useState("");
  const [newMaterial, setnewMaterial] = useState("");
  const [newDescription, setnewDescription] = useState("");
  //donor info/
  //material/
  //description 

  function handleClickOpen (itemName, donorInfo, material, description){
    setOpen(true);
    setnewItemName(itemName);
    setnewDonorInfo(donorInfo);
    setnewMaterial(material);
    setnewDescription(description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function openState(rowID) {
    setConfirmOpen(true);
    setrowID(rowID);
  }

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  //SEARCH
  const filterCards = (event) => {
    //console.log(event.target.value);
    const value = event.target.value.toLowerCase();

    const filteredItems = data.filter((row) =>
      `${row.name}`.toLowerCase().includes(value)
    );

    //console.log(filteredItems);
    setNewData(filteredItems);
  };

  //DELETING BY ID
  function handleRemove(_id) {
    console.log(_id);
    axios
      .delete(`${baseURL}/deleteById/${_id}`)
      .then((res) => {
        console.log("Item successfully deleted!");

        window.location.reload();
      })
      .catch((error) => {
        console.log(`${process.env.PORT}`);
        console.log(error);
      });
    //for displaying updated data on items page after item deleted
    const nData = data.filter((row) => row._id !== _id);
    setNewData(nData);
    //console.log(data);
  }

  useEffect(() => {
    var _isAdmin = docCookies.getItem("isAdmin");
    setIsAdmin(_isAdmin);
    getPost();
    //refreshing the page on first load. user will see a refreshed list of items in their db.
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
  }, []);

  function getPost() {
    axios
      .post(`${baseURL}/searchByComp`,
        {
          companyName: docCookies.getItem("company")
        })
      .then((res) => {
        //refresh the page on inital page visit
        //console.log(res.data);
        setData(res.data);
        setNewData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  return (
    <>
      <div className="MainContainer">
        {isAdminValue === "true" ? (
          <LOGGED_IN_NAVBAR_ADMIN></LOGGED_IN_NAVBAR_ADMIN>
        ) : (
          <LoggedInNavBar></LoggedInNavBar>
        )}{" "}
        <main>
          <section>
            <div style={{ textAlign: "center", marginBottom: "5em" }}>
              <TextField
                className="search-box"
                placeholder="Search Items.."
                size="small"
                onInput={filterCards}
                autoComplete
                // sx={{display: "flex", justifyContent: "center"}}
                style={{ width: "20em" }}
              />
              <div>
                <span className="title">
                  <Typography variant="h6" component="h6">
                    Items in Your Current Collection:
                  </Typography>
                </span>
              </div>
            </div>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justifyContent="center"
            >
              {newData.map((row) => (
                <Grid item md={5}>
                  <p key={row._id}>
                    {
                      <Card sx={{ maxWidth: 500 }}>
                        <CardMedia
                          component="img"
                          height="240"
                          image={row.image ? row.image : "../images/artifact_base_image.jpg"}
                          alt={row.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {row.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Company Name: {row.companyName}
                            <br />
                            Accession ID: {row.accessionId}
                            <br />
                            Donor Info: {row.donorInfo}
                            <br />
                            Storage Location: {row.storageLocation}
                            <br />
                            Condition: {row.condition}
                            <br />
                            Material: {row.material}
                            <br />
                            Dimensions: {row.dimensions}
                            <br />
                            Date Accessioned: {row.date}
                            <br />
                            Description: {row.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" onClick={()=>handleClickOpen(row.name, row.donorInfo, row.material, row.description)}>
                            Share 
                            {/* <div sx={{display: "none"}}>
                              {setnewItemName(row.name)}
                            </div> */}
                          </Button>

                          <div>
                            <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <DialogTitle id="alert-dialog-title">
                                {
                                  "Would you like to share your artifact on social media?"
                                }
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                  Where would you like to share your artifact to?
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <TwitterShareButton onclick={()=>{ handleClose(); }}
                                  url={'https://www.google.com'} //insert AppSeum URL here or link to image somehow?
                                  title={`Check out my artifact!\nIt's called ${newItemName}\nIts donor info is ${newDonorINfo ? newDonorINfo : "None"}\nIt's made of ${newMaterial ? newMaterial : "None"}\nAnd its description is ${newDescription ? newDescription : "None"}\nIf you want to make your own artifact, check out AppSeum! (Link URL to website here)\n`}

                                >
                                  <TwitterIcon sx={{mr: 3}} color="primary"/>
                                </TwitterShareButton>
                                {/* https://www.facebook.com/share.php?u=google.com&quote=your%20text%20goes%20here%20HAH */}
                                <FacebookShareButton onClick={handleClose} 
                                  url={'https://www.google.com'} 
                                  quote={`Check out my artifact!\nIt's called ${newItemName}\nIts donor info is ${newDonorINfo ? newDonorINfo : "None"}\nIt's made of ${newMaterial ? newMaterial : "None"}\nAnd its description is ${newDescription ? newDescription : "None"}\nIf you want to make your own artifact, check out AppSeum! (Link URL to website here)\n`}
                                >
                                  <FacebookIcon sx={{mr: 3}} color="primary"/>
                                </FacebookShareButton>

                                <Button onClick={handleClose} autoFocus>
                                  Close
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </div>

                          <Button size="small">
                            <div style={{ display: "none" }}>{row._id}</div>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={{
                                pathname: "/edit",
                                loggedIn: "true",
                                isAdmin: isAdminValue,
                                id: row._id,
                              }}
                            >
                              Edit
                            </Link>
                          </Button>

                          <Button
                            //onClick={() => handleRemove(row._id)}
                            //pass to local storage //not needed
                            size="small"
                            onClick={() => openState(row._id)} //pass id to function, set a state to that id, then use it in the confirm
                          //dialog
                          >
                            Delete
                          </Button>
                          <ConfirmDialog
                            title="Delete Post?"
                            open={confirmOpen}
                            setOpen={setConfirmOpen}
                            //issue... proper row._id is not being passed at this level
                            onConfirm={() => handleRemove(rowID)} //get state value
                          >
                            Are you sure you want to delete this item?
                          </ConfirmDialog>
                        </CardActions>
                      </Card>
                    }
                  </p>
                </Grid>
              ))}

            </Grid>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Items;
