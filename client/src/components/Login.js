import React, { useEffect } from "react";
import Logo from "./Logo";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <Logo />
      <div className="d-flex justify-content-center pt-2">
        <h4>Log in to C-Kart</h4>
      </div>
      <div className="row mt-2" style={{ paddingTop: "30px" }}>
        <div className="col-4"></div>
        <div className="col-4">
          <TextField
            className="fields"
            fullWidth
            required
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row" style={{ paddingTop: "30px" }}>
        <div className="col-4"></div>
        <div className="col-4">
          <TextField
            className="fields"
            type="password"
            fullWidth
            required
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row pt-3 mt-3">
        <div className="d-flex justify-content-center">
          <Button style={{ fontSize: "18px" }} size="large" variant="contained">
            Login
          </Button>
        </div>
      </div>

      <div className="row pt-2 mt-2">
        <div className="d-flex justify-content-center">
          <Link style={{ textDecoration: "none" }} to="/register">
            <h6>Click Here to Register</h6>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
