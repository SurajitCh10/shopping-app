import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

function Upload() {
  useEffect(() => {
    document.title = "Upload";
  });

  return (
    <>
      <Navbar />
      <div style={{ transform: "translate(0%, 50%)" }}>
        <div className="d-flex justify-content-center pt-3 mt-3">
          <input type="file" />
        </div>

        <div className="d-flex justify-content-center pt-3 mt-3">
          <Button variant="contained">Upload</Button>
        </div>
      </div>
    </>
  );
}

export default Upload;
