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

function FAQ() {
  let isAdmin = docCookies.getItem("isAdmin");
  let isLoggedIn = localStorage.getItem("loggedIn");
  if (isAdmin !== "true" && isLoggedIn === "true") {
    return (
      <>
        <div className="MainContainer">
          <LoggedInNavBar> </LoggedInNavBar>
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
                      AppSeum FAQ
                    </Typography>
                    <br />
                    <Typography>
                      <b>Q: What’s the origin behind the name AppSeum?</b>
                      <br />
                      A: Since our App has a focus on being an application for
                      museums to use, we thought that we would combine the terms
                      App and Museum to become AppSeum.
                      <br />
                      <br />
                      <b>
                        Q: What makes your app stand out from the competition?
                      </b>
                      <br />
                      A: We’ve built an app that focuses on the latest and
                      greatest technologies. Furthermore, our app is cross and
                      multi-platform. Anywhere that you can use a browser can
                      run our application.
                      <br />
                      <br />
                      <b>Q: How do you make sure your application is secure?</b>
                      <br />
                      A: All user passwords are encrypted using hashing
                      algorithms to ensure the user's safety when using the
                      application.
                      <br />
                      <br />
                      <b>Q: What’s the purpose of AppSeum?</b>
                      <br />
                      A: AppSeum is a web app that allows users anywhere to
                      store artifacts digitally. Simply sign up and start
                      archiving your artifacts through text and images!
                      <br />
                      <br />
                      <b>Q: Will AppSeum ever become a paid product? </b>
                      <br />
                      A: As of right now we have no plans to monetize AppSeum.
                      However, if we were to garner a large following overtime,
                      plans to monetize may change in due course.
                      <br />
                      <br />
                    </Typography>
                  </span>
                </Box>
              </div>
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
                      AppSeum FAQ
                    </Typography>
                    <br />
                    <Typography>
                      <b>Q: What’s the origin behind the name AppSeum?</b>
                      <br />
                      A: Since our App has a focus on being an application for
                      museums to use, we thought that we would combine the terms
                      App and Museum to become AppSeum.
                      <br />
                      <br />
                      <b>
                        Q: What makes your app stand out from the competition?
                      </b>
                      <br />
                      A: We’ve built an app that focuses on the latest and
                      greatest technologies. Furthermore, our app is cross and
                      multi-platform. Anywhere that you can use a browser can
                      run our application.
                      <br />
                      <br />
                      <b>Q: How do you make sure your application is secure?</b>
                      <br />
                      A: All user passwords are encrypted using hashing
                      algorithms to ensure the user's safety when using the
                      application.
                      <br />
                      <br />
                      <b>Q: What’s the purpose of AppSeum?</b>
                      <br />
                      A: AppSeum is a web app that allows users anywhere to
                      store artifacts digitally. Simply sign up and start
                      archiving your artifacts through text and images!
                      <br />
                      <br />
                      <b>Q: Will AppSeum ever become a paid product? </b>
                      <br />
                      A: As of right now we have no plans to monetize AppSeum.
                      However, if we were to garner a large following overtime,
                      plans to monetize may change in due course.
                      <br />
                      <br />
                    </Typography>
                  </span>
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
                      AppSeum FAQ
                    </Typography>
                    <br />
                    <Typography>
                      <b>Q: What’s the origin behind the name AppSeum?</b>
                      <br />
                      A: Since our App has a focus on being an application for
                      museums to use, we thought that we would combine the terms
                      App and Museum to become AppSeum.
                      <br/>
                      <br/>
                      <b>
                        Q: What makes your app stand out from the competition?
                      </b>
                      <br />
                      A: We’ve built an app that focuses on the latest and
                      greatest technologies. Furthermore, our app is cross and
                      multi-platform. Anywhere that you can use a browser can
                      run our application.
                      <br />
                      <br />
                      <b>Q: How do you make sure your application is secure?</b>
                      <br />
                      A: All user passwords are encrypted using hashing
                      algorithms to ensure the user's safety when using the
                      application.
                      <br />
                      <br />
                      <b>Q: What’s the purpose of AppSeum?</b>
                      <br />
                      A: AppSeum is a web app that allows users anywhere to
                      store artifacts digitally. Simply sign up and start
                      archiving your artifacts through text and images!
                      <br />
                      <br />
                      <b>Q: Will AppSeum ever become a paid product? </b>
                      <br />
                      A: As of right now we have no plans to monetize AppSeum.
                      However, if we were to garner a large following overtime,
                      plans to monetize may change in due course.
                      <br />
                      <br />
                    </Typography>
                  </span>
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

export default FAQ;
