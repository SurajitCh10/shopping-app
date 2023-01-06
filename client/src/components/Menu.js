import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import {BsChevronDown} from 'react-icons/bs'
import upload from '../resources/upload.jpeg'
import electr from '../resources/electr.jpeg'
import grocery from '../resources/grocery.png'
import book from '../resources/book.jpg'

function Menus() {
  useEffect(() =>{
    document.title = 'Menu'
  })

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
      <Logo/>
      <div className='row pt-4 mt-4 ml-3 pb-3'> 
        <div className='col-3'>
          <Link to="/upload" style ={{textDecoration: "none"}}>
            <Card sx={{marginLeft:10, maxWidth: 345 }} style={{textAlign: "center",}}>
              <CardActionArea >
                <div className='d-flex justify-content-center'>
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={upload}
                    style={{width:"100px",height:"100px", justifyContent: "center", display: "flex" }}
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
        <div className='col-3'>
          <Link to="/submenu/1" style ={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }} style={{textAlign: "center" }}>
              <CardActionArea>
                <div className='d-flex justify-content-center'>
                  <CardMedia
                    component="img"
                    backgroundColor="Black"
                    image={electr}
                    style={{width:"100px",height:"100px"}}
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

        <div className='col-3'>
          <Link to="/submenu/2" style ={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }} style={{textAlign: "center" }}>
              <CardActionArea>

              <div className='d-flex justify-content-center'>
                <CardMedia
                  component="img"
                  backgroundColor="Black"
                  image={grocery}
                  style={{width:"100px",height:"100px"}}
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
        
        <div className='col-3'>
          <Link to="/submenu/3" style ={{textDecoration: "none"}}>
            <Card sx={{ maxWidth: 345 }} style={{textAlign: "center" }}>
              <CardActionArea>
              <div className='d-flex justify-content-center'>
                <CardMedia
                  component="img"
                  backgroundColor="Black"
                  image={book}
                  style={{width:"100px",height:"100px"}}
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

      <div className='d-flex justify-content-center pt-4 mt-4'
      >
      <Button
        style={{
          borderRadius: 12,
          backgroundColor: "Red",
          padding: "10px",
          fontSize: "18px"
        }}
          variant="contained"
        >
          Logout
        </Button>
      </div>
    </>
  )
}

export default Menus