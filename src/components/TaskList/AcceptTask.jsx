import React from 'react'

const AcceptTask = ({ user }) => {
  if (!user || !user.tasks) return null;

  const acceptedTasks = user.tasks.filter(task => task.active);

  return (
    <>
      {acceptedTasks.map((task, index) => (
        <div 
          key={index}
          className='flex flex-col flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'
        >
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>
              {task.category}
            </h3>
            <h4 className='text-sm'>{task.date}</h4>
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
          <p className='text-sm mt-2'>{task.desc}</p>
          <div className='flex justify-between mt-auto'>
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
              Mark as Completed
            </button>
            <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
              Mark as Failed
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AcceptTask
