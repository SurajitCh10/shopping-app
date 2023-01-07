import React, { useEffect } from "react";
import Logo from "./Logo";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Landing() {
  useEffect(() => {
    document.title = "Landing";
  });

  return (
    <>
      <Logo />
      <div className="d-flex justify-content-center pt-3 mt-3">
        <h4>Welcome Admin!</h4>
      </div>

      <div className="row pt-3 mt-3">
        <div className="d-flex justify-content-center">
          <Link to="/menu">
            <Button variant="contained">Go to Menu</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
