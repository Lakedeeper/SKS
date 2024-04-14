import React from 'react'
import "./LoginStaff.css"

function LoginStaff() {
  return (
    <div className='containerLoginStaff'>
    <div>
        <p>Log in</p>
        <input type="text" placeholder='E-mail'/>
        <input type="text" placeholder='Password'/>
        <button>Log in</button>
    </div>
</div>
  )
}

export default LoginStaff