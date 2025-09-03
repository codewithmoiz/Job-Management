import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ user }) => {
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
        <Header user={user} />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard