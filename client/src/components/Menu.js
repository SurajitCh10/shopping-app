import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import upload from "../resources/upload.jpeg";
import electr from "../resources/electr.jpeg";
import grocery from "../resources/grocery.jpeg";
import book from "../resources/book.jpeg";
import "./Menu.css";

function Menus() {
  useEffect(() => {
    document.title = "Menu";
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar />

      <div sty className="menu row pt-4 mt-4 ml-3 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/upload" style={{ textDecoration: "none" }}>
            <Card
              sx={{ margin: 5, maxWidth: 345 }}
              style={{ textAlign: "center" }}
            >
              <CardActionArea>
                <div className="d-flex justify-content-center">
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={upload}
                    style={{
                      width: "100px",
                      height: "100px",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    className="img-fluid"
                    alt="upload"
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload Your files here
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/submenu/1" style={{ textDecoration: "none" }}>
            <Card
              sx={{ margin: 5, maxWidth: 345 }}
              style={{ textAlign: "center" }}
            >
              <CardActionArea>
                <div className="d-flex justify-content-center">
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={electr}
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                    alt="upload"
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electonics
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to see the electronics items
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/submenu/2" style={{ textDecoration: "none" }}>
            <Card
              sx={{ margin: 5, maxWidth: 345 }}
              style={{ textAlign: "center" }}
            >
              <CardActionArea>
                <div className="d-flex justify-content-center">
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={grocery}
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                    alt="upload"
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Grocery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to see the grocery items
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <Link to="/submenu/3" style={{ textDecoration: "none" }}>
            <Card
              sx={{ margin: 5, maxWidth: 345 }}
              style={{ textAlign: "center" }}
            >
              <CardActionArea>
                <div className="d-flex justify-content-center">
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={book}
                    style={{ width: "100px", height: "100px" }}
                    className="img-fluid"
                    alt="upload"
                  />
                </div>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Books
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Click to see the Books
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center pt-4 mt-4"></div>
    </>
  );
}

export default Menus;
