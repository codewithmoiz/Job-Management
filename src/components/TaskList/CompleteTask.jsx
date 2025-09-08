import React from 'react'

const CompleteTask = ({ user }) => {
  if (!user || !user.tasks) return null;

  const completedTasks = user.tasks.filter(task => task.completed);

  return (
    <>
      {completedTasks.map((task, index) => (
        <div 
          key={index}
          className='flex flex-col flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'
        >
          <div className='flex justify-between items-center'>
            <h3 className='bg-green-600 text-sm px-3 py-1 rounded'>
              {task.category}
            </h3>
            <h4 className='text-sm'>{task.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
          <p className='text-sm mt-2'>{task.desc}</p>
          <div className='mt-auto'>
            <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
              Completed
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default CompleteTask
