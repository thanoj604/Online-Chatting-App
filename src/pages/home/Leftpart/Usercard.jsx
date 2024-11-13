import React from 'react'

const Usercard = ({user}) => {
  return (
    <div>
      <div className="flex gap-2 p-4 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
            <h1>{user.fullname}</h1>
            <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default Usercard
