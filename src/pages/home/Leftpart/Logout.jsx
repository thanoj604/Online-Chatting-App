import React, { useState } from 'react'
import axios from "axios";
import Cookies from "js-cookie";
const Logout = () => {
  const[loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true)
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false)
      window.location.reload();
    } catch (error) {
      console.log("error in logout", error);
    }

  }
  return (
    <div className='w-[29.5vw] h-[10vh] p-2 border border-red-600'>
      <button className='text-red-500' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
