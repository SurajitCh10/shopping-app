import React from "react";
import "./Navbar.css";
import logo from "../resources/CDAC.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link style={{ textDecoration: "none" }} to="/">
          <a className="navbar-brand">
            {" "}
            <img
              className="img-fluid"
              style={{ width: "100%", maxWidth: "70px", height: "auto" }}
              src={logo}
              alt=""
            />
            C-Kart
          </a>
        </Link>

        <div className="" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav">
            <Button
              style={{
                borderRadius: 12,
                backgroundColor: "Red",
                padding: "5px",
                fontSize: "16px",
              }}
              variant="contained"
            >
              Logout
            </Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
