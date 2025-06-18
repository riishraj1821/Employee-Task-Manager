import React from 'react'

function CreateTask() {
  return (
    <div className='mt-5'>
            <form className='flex flex-wrap w-full rounded-lg bg-[#13274F] items-start justify-between p-5'>

            <div className='w-1/2 flex flex-col justify-between gap-5 '>
                <div >
                    <h3 className='text-lg'>Task Title</h3>
                    <input type='text' placeholder='Make A Ui Design' className='border-2 border-emerald-500  outline-none w-[80%] h-10 rounded-[5px] p-1'></input>
                </div>

                <div>
                    <h3 className='text-lg'>Date</h3>
                    <input type='date' className='border-2 border-emerald-500 outline-none w-[80%] h-10 rounded-[5px] p-1' ></input>
                </div>

                <div>
                    <h3 className='text-lg'>Assigned To</h3>
                    <input type='text' placeholder='Enter Employee Name' className='border-2 border-emerald-500 outline-none w-[80%] h-10 rounded-[5px] p-1' ></input>
                </div>

                <div>
                    <h3 className='text-lg'>Category</h3>
                    <input type='text' placeholder='Development, design, etc' className='border-2 border-emerald-500 outline-none w-[80%] h-10 rounded-[5px] p-1'></input>
                </div>
            </div>

                <div className='w-1/2 flex flex-col justify-center gap-5 ' >
                <div className='h-65'>
                    <h3 className='text-lg ml-16'>Description</h3>
                    <textarea className='border-emerald-500 outline-none border-2 w-[90%] ml-16 rounded-lg p-2 h-60' cols={30} rows={10} >
                    </textarea>
                </div>
                    <button className='text-2xl border-none bg-emerald-500 w-[90%] h-13 rounded-lg ml-16'>Create Task</button>
                
                </div>

                

                
            </form>
        </div>
  )
}

export default CreateTask