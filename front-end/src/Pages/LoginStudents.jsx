import React from 'react'
import './LoginStudents.css'

function LoginStudents() {
  return (
    <div className='containerLoginStudents'>
        <div>
            <p>Log in</p>
            <input type="text" placeholder='Student ID'/>
            <input type="text" placeholder='Password'/>
            <button>Log in</button>
        </div>
    </div>
  )
}

export default LoginStudents