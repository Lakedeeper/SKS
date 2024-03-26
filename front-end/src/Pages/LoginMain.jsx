import React from 'react'
import  './LoginMain.css'

function LoginMain() {
  return (
    <div className='container'>
        <div className='LoginTypes'>
            <button className='button1'>SKS ADMIN</button>
            <button className='button1'>CLUB MANAGER</button>
            <button className='button1'>STUDENT</button>
            <button className='WithoutLogin'>continue without login</button>
        </div>
    </div>
  )
}

export default LoginMain