import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data }) => {
console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
        <Header data={data} />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard