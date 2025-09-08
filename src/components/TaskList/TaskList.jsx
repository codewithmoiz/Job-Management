import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


const TaskList = ({ user }) => {
    return (
        <div id='tasklist' className='min-h-[50%] overflow-x-auto flex justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            <AcceptTask user={user} />
            <CompleteTask user={user} />
            <FailedTask user={user} />
            <NewTask user={user} />
        </div>
    )
}

export default TaskList