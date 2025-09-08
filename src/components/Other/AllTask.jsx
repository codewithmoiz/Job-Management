import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const data = useContext(AuthContext);

  // since your context seems to have 2 arrays inside (employees[], admin[]),
  // we'll take the first one (employees list)
  const employees = Array.isArray(data[0]) ? data[0] : [];

  return (
    <div className='p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'>
      <div className='bg-white/80 backdrop-blur-sm border-2 border-emerald-600/20 rounded-2xl shadow-2xl shadow-emerald-200/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-emerald-300/60'>
        {/* Header */}
        <div className='mb-6'>
          <h2 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2'>
            Task Overview
          </h2>
          <p className='text-gray-600 text-sm sm:text-base'>
            Monitor all employee tasks and their current status
          </p>
        </div>

        {/* Table Container */}
        <div className='overflow-x-auto'>
          <div className='min-w-[600px]'>
            {/* Table Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-teal-600 mb-4 py-4 px-6 flex justify-between rounded-2xl shadow-lg shadow-emerald-600/25'>
              <h2 className='text-base sm:text-lg font-semibold text-white w-1/5 flex items-center gap-2'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
                Employee Name
              </h2>
              <h3 className='text-base sm:text-lg font-semibold text-white w-1/5 flex items-center justify-center gap-2'>
                <div className='w-3 h-3 bg-blue-300 rounded-full'></div>
                New Tasks
              </h3>
              <h3 className='text-base sm:text-lg font-semibold text-white w-1/5 flex items-center justify-center gap-2'>
                <div className='w-3 h-3 bg-yellow-300 rounded-full animate-pulse'></div>
                Active
              </h3>
              <h3 className='text-base sm:text-lg font-semibold text-white w-1/5 flex items-center justify-center gap-2'>
                <div className='w-3 h-3 bg-green-300 rounded-full'></div>
                Completed
              </h3>
              <h3 className='text-base sm:text-lg font-semibold text-white w-1/5 flex items-center justify-center gap-2'>
                <div className='w-3 h-3 bg-red-300 rounded-full'></div>
                Failed
              </h3>
            </div>

            {/* Employee rows */}
            <div className='space-y-3'>
              {employees.length > 0 ? (
                employees.map((employee, index) => {
                  const newTasks = employee.tasks?.filter(t => t.newtask).length || 0;
                  const activeTasks = employee.tasks?.filter(t => t.active).length || 0;
                  const completedTasks = employee.tasks?.filter(t => t.completed).length || 0;
                  const failedTasks = employee.tasks?.filter(t => t.failed).length || 0;
                  const totalTasks = newTasks + activeTasks + completedTasks + failedTasks;

                  return (
                    <div
                      key={employee.id || index}
                      className='group bg-white/60 backdrop-blur-sm border-2 border-emerald-600/30 hover:border-emerald-600/50 hover:bg-white/80 py-4 px-6 flex justify-between rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50'
                    >
                      {/* Employee Name */}
                      <div className='w-1/5 flex items-center'>
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                            {employee.name?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <h2 className='text-base sm:text-lg font-semibold text-gray-800'>
                              {employee.name || 'Unknown'}
                            </h2>
                            {totalTasks > 0 && (
                              <p className='text-xs text-gray-500'>
                                Total: {totalTasks} tasks
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* New Tasks */}
                      <div className='w-1/5 flex items-center justify-center'>
                        <div className='text-center'>
                          <div className='bg-blue-100 text-blue-700 font-bold text-lg sm:text-xl px-4 py-2 rounded-xl border-2 border-blue-200'>
                            {newTasks}
                          </div>
                          {newTasks > 0 && (
                            <div className='mt-1 text-xs text-blue-600 font-medium'>
                              Pending
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Active Tasks */}
                      <div className='w-1/5 flex items-center justify-center'>
                        <div className='text-center'>
                          <div className='bg-yellow-100 text-yellow-700 font-bold text-lg sm:text-xl px-4 py-2 rounded-xl border-2 border-yellow-200'>
                            {activeTasks}
                          </div>
                          {activeTasks > 0 && (
                            <div className='mt-1 text-xs text-yellow-600 font-medium'>
                              In Progress
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Completed Tasks */}
                      <div className='w-1/5 flex items-center justify-center'>
                        <div className='text-center'>
                          <div className='bg-green-100 text-green-700 font-bold text-lg sm:text-xl px-4 py-2 rounded-xl border-2 border-green-200'>
                            {completedTasks}
                          </div>
                          {completedTasks > 0 && (
                            <div className='mt-1 text-xs text-green-600 font-medium'>
                              Done
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Failed Tasks */}
                      <div className='w-1/5 flex items-center justify-center'>
                        <div className='text-center'>
                          <div className='bg-red-100 text-red-700 font-bold text-lg sm:text-xl px-4 py-2 rounded-xl border-2 border-red-200'>
                            {failedTasks}
                          </div>
                          {failedTasks > 0 && (
                            <div className='mt-1 text-xs text-red-600 font-medium'>
                              Issues
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className='text-center py-12'>
                  <div className='w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center'>
                    <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-600 mb-2'>No Employees Found</h3>
                  <p className='text-gray-500'>Add employees to start tracking their tasks.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        {employees.length > 0 && (
          <div className='mt-8 pt-6 border-t border-emerald-600/20'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {(() => {
                const totals = employees.reduce((acc, emp) => {
                  acc.new += emp.tasks?.filter(t => t.newtask).length || 0;
                  acc.active += emp.tasks?.filter(t => t.active).length || 0;
                  acc.completed += emp.tasks?.filter(t => t.completed).length || 0;
                  acc.failed += emp.tasks?.filter(t => t.failed).length || 0;
                  return acc;
                }, { new: 0, active: 0, completed: 0, failed: 0 });

                return (
                  <>
                    <div className='text-center p-4 bg-blue-50 rounded-xl border border-blue-200'>
                      <div className='text-2xl font-bold text-blue-600'>{totals.new}</div>
                      <div className='text-sm text-blue-600'>Total New</div>
                    </div>
                    <div className='text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200'>
                      <div className='text-2xl font-bold text-yellow-600'>{totals.active}</div>
                      <div className='text-sm text-yellow-600'>Total Active</div>
                    </div>
                    <div className='text-center p-4 bg-green-50 rounded-xl border border-green-200'>
                      <div className='text-2xl font-bold text-green-600'>{totals.completed}</div>
                      <div className='text-sm text-green-600'>Total Completed</div>
                    </div>
                    <div className='text-center p-4 bg-red-50 rounded-xl border border-red-200'>
                      <div className='text-2xl font-bold text-red-600'>{totals.failed}</div>
                      <div className='text-sm text-red-600'>Total Failed</div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllTask