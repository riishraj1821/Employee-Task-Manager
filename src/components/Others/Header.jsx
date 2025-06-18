import React from 'react'

function Header() {
  return (
    <>
    <div className='flex justify-between items-end'>
        <h1 className='text-2xl font-medium '>Hi <br/><span className='text-3xl font-semibold'>Rishi 👋</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-lg font-medium text-lg'>Logout</button>
        
    </div>
    </>
  )
}

export default Header