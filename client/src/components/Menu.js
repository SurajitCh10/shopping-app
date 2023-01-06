import React, { useState } from 'react'
import Logo from './Logo'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom';
import {BsChevronDown} from 'react-icons/bs'

function Menus() {

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
      <div className='row pt-4 mt-4'>
        <div className='col-3'></div>  
        <div className='col-2'>
          <Link to="/upload">
            <Button
              style={{
                  borderRadius: 12,
                  backgroundColor: "Blue",
                  padding: "10px",
                  fontSize: "18px"
              }}
              variant="contained"
            >
                Upload
            </Button>
          </Link>
        </div>  
        <div className='col-3'></div>  
        <div className='col-2'>
          <Button
            style={{
              borderRadius: 12,
              backgroundColor: "Blue",
              padding: "10px",
              fontSize: "18px",
              color:"#fff"
            }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Items <BsChevronDown/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link style ={{textDecoration: "none"}} to="/submenu/1">
              <MenuItem >Item 1</MenuItem>
            </Link>
            <Link style ={{textDecoration: "none"}} to="/submenu/2">
              <MenuItem >Item 2</MenuItem>
            </Link>
            <Link style ={{textDecoration: "none"}} to="/submenu/3">
              <MenuItem >Item 3</MenuItem>
            </Link>
          </Menu>
        </div>  
        <div className='col-2'></div>  

      </div> 

      <div className='d-flex justify-content-center pt-4 mt-4'
        style={{position: "absolute", top:"60%", left:"47%"}}
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