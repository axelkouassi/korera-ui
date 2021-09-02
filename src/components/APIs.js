import React, { Fragment, Component } from "react";

import axios from "axios";

// axios.<method> will now provide autocomplete and parameter typings
// const require = require("axios").default;

// Make a get request for a user to login
const api = axios.create({
  baseURL: "https://catfact.ninja",
});

console.log("Entering APIs...");

class APIs extends Component {
  constructor() {
    console.log("APIs - Constructor");
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
        console.log("APIs - always executed");
      });
  }
  render() {
    return <Fragment>{console.log("Inside APIS render")}</Fragment>;
  }
}

export default APIs;
