import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

function Left() {
  return (
    <div className='border relative border-white w-[30%] bg-slate-900 text-white'>
      <Search />
      <Users />
      <div className='absolute bottom-0'>
      <Logout />
      </div>
    </div>
  )
}

export default Left