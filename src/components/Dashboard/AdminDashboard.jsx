import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ user }) => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'>

      {/* Dashboard Container */}
      <div className='dashboard-container h-screen overflow-y-auto'>
        {/* Page Header */}
        <div className='sticky top-0 z-50 bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-cyan-50/95 backdrop-blur-lg border-b border-emerald-600/20'>
          <div className='p-4 sm:p-6 lg:p-8'>
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div>
                <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                  Admin Dashboard
                </h1>
                <p className='text-gray-600 mt-2 text-sm sm:text-base'>
                  Manage tasks, monitor progress, and oversee your team
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className='flex items-center gap-4'>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-1'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <p className='text-xs text-gray-600 font-medium'>Active</p>
                </div>
                <div className='text-center'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-1'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                    </svg>
                  </div>
                  <p className='text-xs text-gray-600 font-medium'>Create</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='p-4 sm:p-6 lg:p-8 space-y-8'>
          {/* Header Component */}
          <div className='fade-in-up'>
            <Header user={user} />
          </div>

          {/* Two Column Layout for larger screens */}
          <div className='grid grid-cols-1 gap-8'>
            {/* Create Task Section */}
            <div className='fade-in-up'>
              <div className='mb-4'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                    </svg>
                  </div>
                  Task Creation
                </h2>
                <p className='text-gray-600 text-sm'>
                  Create and assign new tasks to team members
                </p>
              </div>
              <CreateTask />
            </div>

            {/* Task Overview Section */}
            <div className='fade-in-up xl:row-span-2'>
              <div className='mb-4'>
                <h2 className='text-xl sm:text-2xl font-bold text-gray-800 mb-2 flex items-center gap-3'>
                  <div className='w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                    </svg>
                  </div>
                  Team Overview
                </h2>
                <p className='text-gray-600 text-sm'>
                  Monitor all employee tasks and progress
                </p>
              </div>
              <AllTask />
            </div>
          </div>

          {/* Footer/Additional Info */}
          <div className='fade-in-up'>
            <div className='bg-white/60 backdrop-blur-sm border-2 border-emerald-600/20 rounded-2xl p-6 mt-8'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                    Quick Actions
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    Need help? Access documentation and support resources
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <button className='px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl hover:bg-emerald-200 transition-colors duration-200 flex items-center gap-2 text-sm font-medium'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    Help
                  </button>
                  <button className='px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 text-sm font-medium'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' />
                    </svg>
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard