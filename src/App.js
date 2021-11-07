import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar/NavBar";
import NotMatch from "./Pages/NotMatch/NotMatch";
import Home from "./Pages/HomePage/Home/Home";
import Apointment from "./Pages/ApointmentPage/Apointment/Apointment";
import "./App.css";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/appointment">
            <Apointment></Apointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
