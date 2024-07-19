import React, { useState } from 'react'
import './Adminlogin.css'
import Cross_icon from '../../assets/cross_icon.png'

const Adminlogin = ({setShowAdmin}) => {

  const [currState,setCurrState] = useState("Admin Login")

  return (
    <div className='admin-popup'>
        <form  className="admin-popup-container">
          <div className="admin-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowAdmin(false)} src={Cross_icon} alt="" />
          </div>
          <div className="admin-popup-inputs">
            <input type="text" placeholder='Enter Your Username' required />
            <input type="password" placeholder='Enter Your Password' required />
          </div>
          <button>Login</button>
          <div className="forgot-password">Forgot Password? <span className='click'>Click Here!</span></div>
        </form>
    </div>
  )
}

export default Adminlogin