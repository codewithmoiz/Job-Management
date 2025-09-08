import React from 'react'

const Header = ({ user }) => {
  return (
    <div className='w-full p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50'>
      <div className='bg-white/80 backdrop-blur-sm border-2 border-emerald-600/20 rounded-2xl shadow-2xl shadow-emerald-200/50 p-6 sm:p-8 transition-all duration-300 hover:shadow-emerald-300/60'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6'>
          {/* Welcome Section */}
          <div className='flex-1'>
            <h1 className='text-gray-700 text-lg sm:text-xl font-medium leading-relaxed'>
              Hello 
              <br className='sm:hidden' />
              <span className='sm:ml-2'>
                <span className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                  {user?.name || 'Admin'}
                </span>
                <span className='ml-2 text-2xl'>👋</span>
              </span>
            </h1>
            <p className='text-gray-600 text-sm sm:text-base mt-2 opacity-80'>
              Welcome to your dashboard
            </p>
          </div>
          
          {/* Logout Button */}
          <div className='flex-shrink-0'>
            <button 
              onClick={() => {
                localStorage.removeItem('currentUser');
                window.location.reload();
              }}
              className='group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/25 hover:shadow-red-600/40 border-2 border-red-400/20'
            >
              <span className='relative z-10 flex items-center gap-2'>
                <svg className='w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:rotate-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
                </svg>
                <span className='hidden sm:inline'>Logout</span>
                <span className='sm:hidden'>Exit</span>
              </span>
              
              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl'></div>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header