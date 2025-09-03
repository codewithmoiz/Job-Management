import React from 'react'

const NewTask = () => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Low</h3>
                <h4 className='text-sm'>2/Aug/2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta deserunt distinctio laborum molestiae nisi laboriosam provident qui, exercitationem facilis ad sequi repudiandae voluptates facere porro error veniam vel optio.
            </p>
            <div className='mt-6'>
                <button className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask