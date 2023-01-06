import React, { useEffect } from 'react'
import Logo from './Logo'

function Login() {
  useEffect(() => {
    document.title = 'Login'
  })

  return (
    <>
      <Logo/>

      <div className='row'>
            <div className='d-flex justify-content-center'>
                
            </div>
        </div>
    </>
  )
}

export default Login