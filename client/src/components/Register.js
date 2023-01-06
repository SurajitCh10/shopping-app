import React, { useEffect } from 'react'
import Logo from './Logo'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';

function Register() {
  useEffect(() => {
    document.title = 'Register'
  })

  return (
    <>
      <Logo/>

      <div className='row mt-3' style={{ paddingTop: '30px' }}>
        <div className='col-4'></div>
        <div className='col-4'>
          <TextField className='fields' fullWidth required id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div className='col-4'></div>
      </div>

      <div className='row' style={{ paddingTop: '30px' }}>
        <div className='col-4'></div>
        <div className='col-4'>
          <TextField className='fields' type="password" fullWidth required id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div className='col-4'></div>
      </div>

      <div className='row' style={{ paddingTop: '30px' }}>
        <div className='col-4'></div>
        <div className='col-4'>
          <TextField className='fields' type="password" fullWidth required id="outlined-basic" label="Confirm Password" variant="outlined" />
        </div>
        <div className='col-4'></div>
      </div>

      <div className='row' style={{ paddingTop: '10px' }}>
        <div className='col-4'></div>
        <div className='col-4'>
          <FormControlLabel control={<Checkbox />} label="Admin" />
        </div>
        <div className='col-4'></div>
      </div>

      <div className='row pt-3 mt-3'>
        <div className='d-flex justify-content-center'>
          <Button variant="contained">Register</Button>
        </div>
      </div>

      <div className='row pt-2 mt-2'>
        <div className='d-flex justify-content-center'>
          <Link style={{textDecoration:"none"}} to="/login">
            <h6>Click Here to Login</h6>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register