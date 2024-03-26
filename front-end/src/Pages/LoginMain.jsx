import React from 'react'
import  './LoginMain.css'

function LoginMain() {
  return (
    <div className='container'>
        <div className='LoginTypes'>
            <button>SKS ADMIN</button>
            <button>CLUB MANAGER</button>
            <button>STUDENT</button>
        </div>

        <div className='WithoutLogin'>
            <button>continue without login</button>
        </div>

    </div>
  )
}

export default LoginMain