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

function Contact() {
  let isAdmin = docCookies.getItem("isAdmin");
  let isLoggedIn = localStorage.getItem("loggedIn");
  if (isAdmin !== "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar></LoggedInNavBar>
          <main>
            <section>
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
                      Please enter your inquiry details.
                    </Typography>
                    <Typography variant="h6" component="h6">
                      We will reach out to you within 5 business days.
                    </Typography>
                  </span>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      size="small"
                      type="name"
                      variant="outlined"
                      sx={{ mt: 5, mr: 3 }}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={{ mt: 5 }}
                    />
                  </div>
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-multiline-static"
                    label="Message"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={7}
                    sx={{ mt: 5, mr: 3 }}
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 5, width: "30%", display: "block" }}
                  >
                    Submit
                  </Button>
                </Box>
              </div>
            </section>
          </main>
        </div>
        <Footer />{" "}
      </>
    );
  }
  if (isAdmin === "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar_Admin></LoggedInNavBar_Admin>
          <main>
            <section>
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
                      Please enter your inquiry details.
                    </Typography>
                    <Typography variant="h6" component="h6">
                      We will reach out to you within 5 business days.
                    </Typography>
                  </span>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      size="small"
                      type="name"
                      variant="outlined"
                      sx={{ mt: 5, mr: 3 }}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={{ mt: 5 }}
                    />
                  </div>
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-multiline-static"
                    label="Message"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={7}
                    sx={{ mt: 5, mr: 3 }}
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 5, width: "30%", display: "block" }}
                  >
                    Submit
                  </Button>
                </Box>
              </div>
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
                      Please enter your inquiry details.
                    </Typography>
                    <Typography variant="h6" component="h6">
                      We will reach out to you within 5 business days.
                    </Typography>
                  </span>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      size="small"
                      type="name"
                      variant="outlined"
                      sx={{ mt: 5, mr: 3 }}
                    />
                    <TextField
                      id="outlined-basic"
                      size="small"
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={{ mt: 5 }}
                    />
                  </div>
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-multiline-static"
                    label="Message"
                    size="small"
                    variant="outlined"
                    multiline
                    rows={7}
                    sx={{ mt: 5, mr: 3 }}
                  />

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 5, width: "30%", display: "block" }}
                  >
                    Submit
                  </Button>
                </Box>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
