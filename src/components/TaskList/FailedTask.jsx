import React from 'react'

const FailedTask = ({ user }) => {
  if (!user || !user.tasks) return null;

  const failedTasks = user.tasks.filter(task => task.failed);

  return (
    <>
      {failedTasks.map((task, index) => (
        <div 
          key={index}
          className='flex flex-col flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'
        >
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
              {task.category}
            </h3>
            <h4 className='text-sm'>{task.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
          <p className='text-sm mt-2'>{task.desc}</p>
          <div className='mt-auto'>
            <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
              Failed
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default FailedTask