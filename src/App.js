import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import APIs from "./components/APIs";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import ResourcePage from "./components/ResourcePage";
import { useState } from "react";

console.log("***Main App***");
console.log("Entering App...");

function App() {
  console.log("Inside App...");

  const [token, setToken] = useState("");

  //Get token from login page
  const getTokenFromLoginPage = (tokenData) => {
    console.log("Token received after login: ", tokenData);
    setToken(tokenData);
    console.log("Token inside main app", token);
  };

  //currenttoken
  const currentToken = () => {
    getTokenFromLoginPage(token);
    const currentToken = token;
    return currentToken;
  };

  return (
    <div className="App">
      {console.log("Inside  App return()...")}
      <Header />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <LoginPage sendTokenToApp={getTokenFromLoginPage} />
          </Route>
          <Route path="/register" exact={true}>
            <RegistrationPage />
          </Route>
          <Route path="/resource" exact={true}>
            <ResourcePage tokenFromApp={token} />
          </Route>
        </Switch>
        <APIs />
      </main>
    </div>
  );
}

export default App;
