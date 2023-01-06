import React from 'react'
import logo from '../resources/CDAC.jpg'

function Logo() {
  return (
    <>
        <div className='row'>
            <div className='d-flex justify-content-center'>
                <img className='img-fluid' style={{height:"300px"}} src={logo} alt=''/>
            </div>
        </div>
    </>
  )
}

export default Logo