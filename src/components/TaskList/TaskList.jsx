import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


const TaskList = () => {
    return (
        <div id='tasklist' className='min-h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            <AcceptTask />
            <CompleteTask />
            <FailedTask />
            <NewTask />
        </div>
    )
}

export default TaskList