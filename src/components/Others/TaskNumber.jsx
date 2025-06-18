import React from 'react'

function TaskNumber() {
  return (
    <div className='flex  mt-10 justify-between gap-5 screen'>
        <div className='py-8 px-9  w-[50%] rounded-xl flex flex-col gap-2 bg-[#CD5C5C]'>
            <h2 className='text-3xl font-semibold'>1</h2>
            
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className='py-8 px-9  w-[50%] rounded-xl flex flex-col gap-2 bg-[#008080]'>
            <h2 className='text-3xl font-semibold'>3</h2>
            
            <h3 className='text-xl font-medium '>Complete Task</h3>
        </div>
        <div className='py-8 px-9  w-[50%] rounded-xl flex flex-col gap-2 bg-[#4B9CD3]'>
            <h2 className='text-3xl font-semibold'>1</h2>
            
            <h3 className='text-xl font-medium '>Accepted Task</h3>
        </div>
        <div className='py-8 px-9  w-[50%] rounded-xl flex flex-col gap-2 bg-[#00416A]'>
            <h2 className='text-3xl font-semibold'>1</h2>
            
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber