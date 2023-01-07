import React from "react";
import "./Navbar.css";
import logo from "../resources/CDAC.jpg";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
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

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav">
            <Button
              style={{
                borderRadius: 12,
                backgroundColor: "Red",
                padding: "5px",
                fontSize: "18px",
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
