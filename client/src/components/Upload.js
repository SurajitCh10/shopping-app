import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import "./Menu.css";

function Upload() {
  useEffect(() => {
    document.title = "Upload";
  });

  return (
    <>
      <Navbar />
      <div className="menu row pt-4 mt-4 ml-3 pb-3">
        <div className="d-flex justify-content-center pt-3 mt-3">
          <input type="file" />
        </div>

        <div className="d-flex justify-content-center pt-3 mt-3">
          <Button style={{ fontSize: "18px" }} size="large" variant="contained">
            Upload
          </Button>
        </div>
      </div>
    </>
  );
}

export default Upload;
