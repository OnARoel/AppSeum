import "./Index.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Login.css";
import LoggedInNavBar from "./LoggedInNavBar";
import LoggedInNavBar_Admin from "./LoggedInNavBar_Admin";
import docCookies from "doc-cookies";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

function Team() {
  let isAdmin = docCookies.getItem("isAdmin");
  let isLoggedIn = localStorage.getItem("loggedIn");
  if (isAdmin !== "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar> </LoggedInNavBar>
          <main>
            <section>
              <div style={{ textAlign: "center", marginBottom: "5em" }}>
                <div>
                  <span className="title">
                    <Typography variant="h6" component="h6">
                      Meet the Team Behind Appseum
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
                <container>
                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Regan Benner
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Regan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>rbenner5051@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/regan.jpg"
                      alt="Regan Benner"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Wenyan He
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Wenyan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>whe2461@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/wenyan.jpeg"
                      alt="Wenyan He"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Andre Roel
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Andre is one of the founders behind AppSeum.
                          <br />
                          He helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>aroel035@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/andre.jpeg"
                      alt="Andre Roel"
                    />
                  </Card>
                </container>
              </Grid>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
  if (isAdmin === "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar_Admin> </LoggedInNavBar_Admin>
          <main>
            <section>
              <div style={{ textAlign: "center", marginBottom: "5em" }}>
                <div>
                  <span className="title">
                    <Typography variant="h6" component="h6">
                      Meet the Team Behind Appseum
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
                <container>
                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Regan Benner
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Regan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>rbenner5051@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/regan.jpg"
                      alt="Regan Benner"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Wenyan He
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Wenyan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>whe2461@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/wenyan.jpeg"
                      alt="Wenyan He"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Andre Roel
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Andre is one of the founders behind AppSeum.
                          <br />
                          He helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>aroel035@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/andre.jpeg"
                      alt="Andre Roel"
                    />
                  </Card>
                </container>
              </Grid>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="MainContainer">
          <NavBar> </NavBar>
          <main>
            <section>
              <div style={{ textAlign: "center", marginBottom: "5em" }}>
                <div>
                  <span className="title">
                    <Typography variant="h6" component="h6">
                      Meet the Team Behind Appseum
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
                <container>
                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Regan Benner
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Regan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>rbenner5051@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/regan.jpg"
                      alt="Regan Benner"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Wenyan He
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Wenyan is one of the founders behind AppSeum.
                          <br />
                          She helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>whe2461@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/wenyan.jpeg"
                      alt="Wenyan He"
                    />
                  </Card>

                  <Card sx={{ display: "flex", marginBottom: 10 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Andre Roel
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          <b>CEO and Developer</b>
                          <br />
                          <br />
                          Andre is one of the founders behind AppSeum.
                          <br />
                          He helped to develop this application and is strongly
                          <br />
                          versed in full stack development.
                          <br />
                          <br />
                          <b>aroel035@conestogac.on.ca</b>
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 300 }}
                      img
                      src="../images/andre.jpeg"
                      alt="Andre Roel"
                    />
                  </Card>
                </container>
              </Grid>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default Team;
