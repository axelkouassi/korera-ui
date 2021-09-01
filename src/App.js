import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Login />
        </Route>
        <Route path="/register" exact={true}>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
