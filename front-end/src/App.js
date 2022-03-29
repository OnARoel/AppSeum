import "./components/Index.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Items from "./components/Items";
import AddNew from "./components/AddNew";
import Account from "./components/Account";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import LoggedInHome from "./components/LoggedInHome";
import EditProfile from "./components/EditProfile";
import AccountList from "./components/AccountList";
import Edit from "./components/Edit";
import PrivateAccountRoute from "./components/PrivateAccountRoute";
import PrivateAccountListRoute from "./components/PrivateAccountListRoute";
import PrivateItemsRoute from "./components/PrivateItemsRoute";
import PrivateAddNewRoute from "./components/PrivateAddNewRoute";
import PrivateEditRoute from "./components/PrivateEditRoute";
import PrivateEditProfile from "./components/PrivateEditProfileRoute";
import Contact from "./components/Contact";
import GettingStarted from "./components/GettingStarted";
import FAQ from "./components/FAQ";
import Team from  "./components/Team";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateAddNewRoute path="/addnew">
            <AddNew />
          </PrivateAddNewRoute>

          <PrivateItemsRoute path="/items">
            <Items />
          </PrivateItemsRoute>

          <Route path="/createaccount">
            <CreateAccount />
          </Route>

          <PrivateEditProfile path="/EditProfile" />

          <PrivateAccountRoute path="/Account">
            <Account />
          </PrivateAccountRoute>

          <PrivateAccountListRoute path="/AccountList">
            <AccountList />
          </PrivateAccountListRoute>

          <PrivateEditRoute path="/edit"></PrivateEditRoute>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/GettingStarted">
            <GettingStarted />
          </Route>

          <Route path="/FAQ">
            <FAQ />
          </Route>

          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/PrivacyPolicy">
            <PrivacyPolicy />
          </Route>

          <Route
            path="/loggedInHome"
            render={(props) => <LoggedInHome {...props} />}
          />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
