import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-md'>
        <div className='bg-white/80 backdrop-blur-sm border-2 border-emerald-600/20 rounded-2xl shadow-2xl shadow-emerald-200/50 p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:shadow-emerald-300/60'>
          <div className='space-y-6'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>Welcome Back</h2>
              <p className='text-gray-600 text-sm sm:text-base'>Sign in to your account</p>
            </div>
            
            <div onSubmit={submitHandler} className='space-y-5'>
              <div className='space-y-2'>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-base sm:text-lg py-3 sm:py-4 px-6 rounded-2xl placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm' 
                  type="email" 
                  placeholder='Enter your email'
                />
              </div>
              
              <div className='space-y-2'>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className='w-full outline-none bg-white/50 border-2 border-emerald-600/30 hover:border-emerald-600/50 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 font-medium text-base sm:text-lg py-3 sm:py-4 px-6 rounded-2xl placeholder:text-gray-400 transition-all duration-200 backdrop-blur-sm' 
                  type="password" 
                  placeholder='Enter password' 
                />
              </div>
              
              <button 
                onClick={submitHandler}
                className='w-full mt-8 text-white border-none outline-none bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] font-semibold text-base sm:text-lg py-3 sm:py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-emerald-600/25'
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login