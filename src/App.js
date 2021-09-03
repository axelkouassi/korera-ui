import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import APIs from "./components/APIs";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";

console.log("***Main App***");
console.log("Entering App...");

function App() {
  console.log("Inside App...");
  return (
    <div className="App">
      {console.log("Inside  App return()...")}
      <Header />
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <LoginPage />
          </Route>
          <Route path="/register" exact={true}>
            <RegistrationPage />
          </Route>
        </Switch>
        <APIs />
      </main>
    </div>
  );
}

export default App;
