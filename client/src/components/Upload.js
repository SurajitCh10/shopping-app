import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import "./Menu.css";

function Upload() {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    getBase64(file).then((base64) => {
      var existing = JSON.parse(localStorage.getItem("files"));
      if (existing == null) existing = [];

      localStorage.setItem("testObject", JSON.stringify(base64));
      existing.push(base64);
      localStorage.setItem("files", JSON.stringify(existing));

      // const arr = [`${base64}`];
      // localStorage.setItem("files", JSON.stringify(arr));
      console.debug("file stored", base64);
    });

    window.alert(`${file.name} uploaded to local storage`);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    document.title = "Upload";
  });

  return (
    <>
      <Navbar />
      <div className="menu row pt-4 mt-4 ml-3 pb-3">
        <div className="d-flex justify-content-center pt-3 mt-3">
          <input type="file" onChange={handleChange} />
        </div>

        <div className="d-flex justify-content-center pt-3 mt-3">
          <Button
            onClick={handleSubmit}
            style={{ fontSize: "22px" }}
            size="large"
            variant="contained"
          >
            Upload
          </Button>
        </div>
      </div>
    </>
  );
}

export default Upload;
