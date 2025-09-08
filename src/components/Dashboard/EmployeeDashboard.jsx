import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ user }) => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'>

      {/* Dashboard Container */}
      <div className='employee-dashboard h-screen overflow-y-auto'>
        {/* Page Header */}
        <div className='sticky top-0 z-50 bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-cyan-50/95 backdrop-blur-lg border-b border-emerald-600/20'>
          <div className='p-4 sm:p-6 lg:p-8'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div className='slide-in-left'>
                <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                  My Workspace
                </h1>
                <p className='text-gray-600 mt-2 text-sm sm:text-base'>
                  Track your tasks, monitor progress, and stay productive
                </p>
              </div>
              
              {/* Productivity Indicator */}
              <div className='slide-in-right flex items-center gap-4'>
                <div className='float-animation text-center'>
                  <div className='w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-2 shadow-lg shadow-emerald-200'>
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  </div>
                  <p className='text-xs text-gray-600 font-semibold'>Productive Day!</p>
                </div>
                
                <div className='text-center'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-1'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <p className='text-xs text-gray-600 font-medium'>Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='p-4 sm:p-6 lg:p-8 lg:p-10 space-y-8'>
          {/* Welcome Header */}
          <div className='fade-in-up'>
            <Header user={user} />
          </div>

          {/* Task Statistics */}
          <div className='fade-in-up'>
            <div className='mb-6'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                Task Overview
              </h2>
              <p className='text-gray-600 text-sm'>
                Your current task statistics and performance metrics
              </p>
            </div>
            <TaskListNumbers user={user} />
          </div>

          {/* Task Management */}
          <div className='fade-in-up'>
            <div className='mb-6'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3'>
                <div className='w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center'>
                  <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />
                  </svg>
                </div>
                My Tasks
              </h2>
              <p className='text-gray-600 text-sm'>
                Manage your assigned tasks and update their status
              </p>
            </div>
            <TaskList user={user} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard