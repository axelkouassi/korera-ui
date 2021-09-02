import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import APIs from "./components/APIs";

console.log("Entering App...");

function App() {
  console.log("Inside App...");
  return (
    <div className="App">
      {console.log("Inside  App return()...")}
      <Header />
      <br />
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
      </Switch>
      <APIs />
    </div>
  );
}

export default App;
