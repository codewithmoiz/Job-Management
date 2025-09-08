import React from 'react'

const Header = ({ user }) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-white text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{user.name} 👋</span></h1>
        <button onClick={() => {
          localStorage.removeItem('currentUser');
          window.location.reload();
        }}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Header