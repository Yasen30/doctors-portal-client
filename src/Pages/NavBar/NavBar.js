import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
  const { logOut, user } = UseAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link
            style={{ textDecoration: "none", margin: "0 10px", color: "white" }}
            to="home"
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none", margin: "0 10px", color: "white" }}
            to="/apoinment"
          >
            Appointment
          </Link>
          {user?.email ? (
            <>
              <span>{user?.displayName}</span>
              <Button
                style={{
                  color: "white",
                }}
                onClick={logOut}
                variant="outlined"
              >
                LogOut
              </Button>
            </>
          ) : (
            <Link
              style={{
                textDecoration: "none",
                margin: "0 10px",
                color: "white",
              }}
              to="/login"
            >
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
