import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import APIs from "./components/APIs";
import axios from "axios";

// axios.<method> will now provide autocomplete and parameter typings
// const require = require("axios").default;

// Make a get request for a user to login
const api = axios.create({
  baseURL: "https://catfact.ninja",
});

class App extends Component {
  constructor() {
    super();
    this.state = {};
    api
      .get("/fact")
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log("always executed");
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
          {/* <Route path="/" exact={true}>
            <APIs />
          </Route> */}
          <Route path="/register" exact={true}>
            <Register />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
