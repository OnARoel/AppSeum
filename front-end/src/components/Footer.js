import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { Typography } from "@mui/material";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

export const Footer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  //Opens location in google maps
  const handleMap = () => {
    window.open(
      "https://www.google.com/maps/place/Conestoga+College+-+Waterloo/@43.4793134,-80.52068,17z/data=!3m1!4b1!4m5!3m4!1s0x882bf31d0cec9491:0x8bf5f60c306d2207!8m2!3d43.4793134!4d-80.5184913"
    );
  };

  return (
    <footer>
      <Typography>
        <Box
          textAlign="left"
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          style={{ background: "white", color: "black" }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link
                    href="/Contact"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Support
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/GettingStarted"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Getting Started
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/FAQ"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    FAQ
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>About</Box>
                <Box>
                  <Link
                    href="/Team"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Meet the Team
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="#"
                    onClick={handleClickOpen}
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
              </Grid>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                  <b>Privacy Policy</b>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <b>Our Commitment to your Privacy</b>
                    <br />
                    <br />
                    AppSeum® is committed to protecting your privacy and
                    ensuring that your visit to our website is completely
                    secure. If you have any questions or problems with any
                    aspect of our privacy policy or its implementation, please
                    contact our privacy officer.
                    <br />
                    <br />
                    <b>Security of your Personal Information</b>
                    <br />
                    <br />
                    To maintain the security of your information, we use the
                    Transport Layer Security (TLS) protocol with 128-bit or
                    higher encryption strength to transmit sensitive
                    information. This is the same technology used in
                    transmitting sensitive information by banks, governments,
                    and online businesses such as Amazon.com and eBay. Once the
                    information is in our system, it is accessible to authorized
                    personnel only. We strictly enforce our privacy policies
                    with our employees and any breach of this policy will result
                    in termination and the pressing of criminal charges where
                    there are grounds.
                    <br />
                    <br />
                    <b>How we use your Personal Information</b>
                    <br />
                    <br />
                    Your personal information will be used in order to provide
                    you with the requested products and services. This includes
                    the use of information for communicating back to you. We may
                    also use personal information in a manner that does not
                    identify you specifically nor allow you to be contacted but
                    does identify certain criteria about our Site's users in
                    general (such as we may inform third parties about the
                    number of registered users, number of unique visitors, and
                    the pages most frequently browsed). Who we share your
                    Personal Information with We will NOT sell, trade or rent
                    your name or personal information to anyone else. We DO NOT
                    sell, trade, rent or provide outside access to our mailing
                    list at all. We will not release your personal information
                    to authorities unless required by law, search warrant, court
                    order, subpoena, or fraud investigation.
                    <br />
                    <br />
                    <b>Collection of your Personal Information</b>
                    <br />
                    <br />
                    AppSeum® only saves such personal information that is
                    necessary for you to access and use our services. This
                    personal information includes, but is not limited to, first
                    and last name, email address, phone number, company name,
                    and access to your collection items. LawDepot®
                    <br />
                    <br />
                    <b>Use of Cookies</b>
                    <br />
                    <br />
                    You have the right to decide whether to accept or reject
                    cookies. You can exercise your cookie rights by setting your
                    preferences in the Cookie Consent Manager. The Cookie
                    Consent Manager allows you to select which categories of
                    cookies you accept or reject. Essential cookies cannot be
                    rejected as they are strictly necessary to provide you with
                    services. The Cookie Consent Manager can be found in the
                    notification banner and on our website. If you choose to
                    reject cookies, you may still use our website though your
                    access to some functionality and areas of our website may be
                    restricted. Y
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Contact Us</Box>
                <Box>
                  <Link
                    color="inherit"
                    href="mailto:appseum@info.ca"
                    style={{ textDecoration: "none" }}
                  >
                    Email: AppSeum@info.ca
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="tel:+1-519-123-1234"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Phone: 519-123-1234
                  </Link>
                </Box>
                <Box>
                  <Link
                    onClick={handleMap}
                    href="#"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    Location: 123 Fake Street, Kitchener
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Typography>
    </footer>
  );
};

export default Footer;
