import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar/NavBar";
import NotMatch from "./Pages/NotMatch/NotMatch";
import Home from "./Pages/HomePage/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
