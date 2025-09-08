import React, { useState } from 'react'

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    assignTo: '',
    category: '',
    description: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Task Data:', taskData)
    // Add your task creation logic here
  }

  return (
    <div className='p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'>
      <div className='bg-white/80 backdrop-blur-sm border-2 border-emerald-600/20 rounded-2xl shadow-2xl shadow-emerald-200/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-emerald-300/60'>
        <div className='mb-6'>
          <h2 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2'>
            Create New Task
          </h2>
          <p className='text-gray-600 text-sm sm:text-base'>
            Fill in the details below to create a new task assignment
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Main Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* Left Column - Task Details */}
            <div className='lg:col-span-2 space-y-6'>
              {/* Task Title */}
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>
                  Task Title <span className='text-red-500'>*</span>
                </label>
                <input
                  name='title'
                  value={taskData.title}
                  onChange={handleInputChange}
                  className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm'
                  type="text" 
                  placeholder='e.g., Design landing page mockups'
                  required
                />
              </div>

              {/* Date Range */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-gray-700'>
                    Start Date <span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='startDate'
                    value={taskData.startDate}
                    onChange={handleInputChange}
                    className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl transition-all duration-200 backdrop-blur-sm'
                    type="date"
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-gray-700'>
                    End Date <span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='endDate'
                    value={taskData.endDate}
                    onChange={handleInputChange}
                    className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl transition-all duration-200 backdrop-blur-sm'
                    type="date"
                    min={taskData.startDate}
                    required
                  />
                </div>
              </div>

              {/* Assign To and Category */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-gray-700'>
                    Assign To <span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='assignTo'
                    value={taskData.assignTo}
                    onChange={handleInputChange}
                    className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm'
                    type="text" 
                    placeholder='Employee name or email'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label className='block text-sm font-semibold text-gray-700'>
                    Category
                  </label>
                  <select
                    name='category'
                    value={taskData.category}
                    onChange={handleInputChange}
                    className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl transition-all duration-200 backdrop-blur-sm'
                  >
                    <option value=''>Select category</option>
                    <option value='design'>Design</option>
                    <option value='development'>Development</option>
                    <option value='testing'>Testing</option>
                    <option value='marketing'>Marketing</option>
                    <option value='research'>Research</option>
                    <option value='documentation'>Documentation</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className='lg:col-span-1 space-y-2'>
              <label className='block text-sm font-semibold text-gray-700'>
                Description
              </label>
              <textarea
                name='description'
                value={taskData.description}
                onChange={handleInputChange}
                rows={8}
                className='w-full h-full min-h-[200px] lg:min-h-[280px] outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-sm sm:text-base py-3 px-4 rounded-2xl placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm resize-none'
                placeholder='Provide detailed task description, requirements, and any specific instructions...'
              />
            </div>
          </div>

          {/* Task Timeline Preview */}
          {taskData.startDate && taskData.endDate && (
            <div className='bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-600/20 rounded-2xl p-4 sm:p-6'>
              <h3 className='text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2'>
                <svg className='w-5 h-5 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Task Timeline
              </h3>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 bg-emerald-500 rounded-full'></div>
                  <span className='text-sm font-medium text-gray-700'>
                    Start: {new Date(taskData.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className='hidden sm:block w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400'></div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 bg-teal-500 rounded-full'></div>
                  <span className='text-sm font-medium text-gray-700'>
                    End: {new Date(taskData.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className='ml-auto text-sm text-gray-600'>
                  Duration: {Math.ceil((new Date(taskData.endDate) - new Date(taskData.startDate)) / (1000 * 60 * 60 * 24))} days
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 pt-6'>
            <button 
              type='submit'
              className='flex-1 sm:flex-initial sm:min-w-[200px] text-white border-none outline-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] font-semibold text-base py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
              </svg>
              Create Task
            </button>
            <button 
              type='button'
              onClick={() => setTaskData({ title: '', startDate: '', endDate: '', assignTo: '', category: '', description: '' })}
              className='flex-1 sm:flex-initial sm:min-w-[120px] text-gray-700 border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 font-semibold text-base py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]'
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask