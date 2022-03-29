import "./Index.css";
import React from "react";
import Footer from "./Footer";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";
import axios from "axios";
import { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { Grid } from "@mui/material";
import docCookies from 'doc-cookies';

var baseURL = "http://localhost:4000/api/users/findById/";

function Account() {

  const [data, setData] = useState([]);
  const [isAdminValue,setIsAdmin]= useState("");

  useEffect(() => {
    var _id =  docCookies.getItem('_id');
    var _isAdmin = docCookies.getItem('isAdmin');
    setIsAdmin(_isAdmin);
    getPost(_id);
  }, []);

  function getPost(_id) {
    axios
      .get(baseURL+_id, {})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
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
        <main>
          <section>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={5}>
                <p key={data._id}>
                  {/* This line works ?? Not sure. Needs to be tested on a lot of cases. Add lots of items.  */}
                  {
                    <Card sx={{ maxWidth: 600 }}>
                      <CardMedia
                        component="img"
                        height="240"
                        alt="Personal avatar"
                        image={data.image ? data.image : "../images/default_user.png"}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          username: {data.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <br />
                          email: {data.email}
                          <br />
                          isAdmin: {data.isAdmin ? "true" : "false"}
                          <br />
                          company: {data.company}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          <Link
                            to={{
                              pathname: "/EditProfile",
                              state: { loggedIn: true },
                            }}
                            style={{ textDecoration: "none" }}
                          >
                            Edit
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  }
                </p>
              </Grid>
            </Grid>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Account;
