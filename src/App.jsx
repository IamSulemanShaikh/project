import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Userlogin from './Components/Userlogin/Userlogin'
import Adminlogin from './Components/Adminlogin/Adminlogin'
import Hero from './Components/Hero/Hero'
const App = () => {

   const [showUser,setShowUser,] = useState(false)
   const [showAdmin,setShowAdmin,] = useState(false)
  return (
    <>
      {showUser?<Userlogin setShowUser={setShowUser}/>:<></>}
      {showAdmin?<Adminlogin setShowAdmin={setShowAdmin}/>:<></>}
      <div className='App'>
          <Navbar setShowUser={setShowUser}setShowAdmin={setShowAdmin}/>
          <Hero/>
      </div>
    </>
  );
};

export default App;