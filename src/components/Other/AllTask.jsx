import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const data = useContext(AuthContext);

  // since your context seems to have 2 arrays inside (employees[], admin[]),
  // we’ll take the first one (employees list)
  const employees = Array.isArray(data[0]) ? data[0] : [];

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      {/* Table Header */}
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>

      {/* Employee rows */}
      <div>
        {employees.map((employee) => {
          const newTasks = employee.tasks.filter(t => t.newtask).length;
          const activeTasks = employee.tasks.filter(t => t.active).length;
          const completedTasks = employee.tasks.filter(t => t.completed).length;
          const failedTasks = employee.tasks.filter(t => t.failed).length;

          return (
            <div
              key={employee.id}
              className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'
            >
              <h2 className='text-lg font-medium w-1/5 text-white'>{employee.name}</h2>
              <h3 className='text-lg font-medium w-1/5 text-blue-400'>{newTasks}</h3>
              <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{activeTasks}</h5>
              <h5 className='text-lg font-medium w-1/5 text-green-400'>{completedTasks}</h5>
              <h5 className='text-lg font-medium w-1/5 text-red-500'>{failedTasks}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask
