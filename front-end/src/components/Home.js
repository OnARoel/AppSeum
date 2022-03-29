import "./Index.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Typography } from "@mui/material";
import HomeImage from "./HomeImage";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";


function Home() {
  localStorage.removeItem("loggedIn");
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        style={{ background: "#ECECEC", color: "#000000" }}
        buttonStyle={{
          color: "#FFFFFF",
          fontSize: "18px",
          background: "#37C127",
          borderRadius: 50,
        }}
        expires={150}
      >
        <Typography variant="h6">This site uses cookies.</Typography>
      </CookieConsent>
      <div className="MainContainer">
        <NavBar></NavBar>
        <main>
          <section>
            <div className="Container">
              <Typography variant="h4" component="h4">
                Your museum archives <br></br>accessible anywhere you go
                <br></br>
                <br></br>
                <Button variant="contained">
                  <Link
                    to={{
                      pathname: "/createaccount",
                    }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Get Started Today
                  </Link>
                </Button>
              </Typography>
              <HomeImage />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
