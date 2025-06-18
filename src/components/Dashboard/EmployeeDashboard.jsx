import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <>
    <div className='p-15 bg-gradient-to-r from-[#2C2969] to-[#000014] h-screen'>
        <Header/>
        <TaskNumber/>
        <TaskList/>
    </div>
    </>
  )
}

export default EmployeeDashboard