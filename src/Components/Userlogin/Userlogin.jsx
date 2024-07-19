import React, { useState } from 'react'
import './Userlogin.css'
import Cross_icon from '../../assets/cross_icon.png'

const Userlogin = ({setShowUser}) => {

  const [currState,setCurrState] = useState("User Login")

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowUser(false)} src={Cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            <input type="text" placeholder='Enter Your PS Number' required />
            <input type="password" placeholder='Enter Your Password' required />
          </div>
          <button>Login</button>
          <div className="login-popup-condition">

          </div>
        </form>
    </div>
  )
}

export default Userlogin