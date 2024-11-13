 import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
 
 const Right = () => {
   return (
     <div className='border border-white w-[70%] bg-slate-700 text-white'>
       {/* <h1>right</h1> */}
       <Chatuser />
       <Messages />
       <Typesend />
     </div>
   )
 }
 
 export default Right