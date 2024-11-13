import React from 'react'

const Typesend = () => {
  return (
    <div className='flex gap-2 p-4'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

      <button>Send</button>
    </div>
  )
}

export default Typesend
