import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Logo from "./Logo";

function Upload() {
  useEffect(() => {
    document.title = "Upload";
  });

  return (
    <>
      <Logo />
      <div className="d-flex justify-content-center pt-3 mt-3">
        <input type="file" />
      </div>

      <div className="d-flex justify-content-center pt-3 mt-3">
        <Button variant="contained">Upload</Button>
      </div>
    </>
  );
}

export default Upload;
