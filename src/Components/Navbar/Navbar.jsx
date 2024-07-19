import React from 'react'
import './Navbar.css'
import Logo from '../../assets/LT-Logo.png'

const Navbar = ({setShowUser,setShowAdmin}) => {
  
  return (
    <nav>
        <img src={Logo} alt="" className='logo' />
        <div className="navbar-right">
            <button onClick={()=>setShowAdmin(true)}>ADMIN</button>
            <button onClick={()=>setShowUser(true)}>USER</button>
        </div>
    </nav>
  )
}

export default Navbar