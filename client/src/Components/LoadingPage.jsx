import React from 'react'

const LoadingPage = () => {
  return (
    <div className='h-screen w-screen flex gap-4 justify-center items-center'>
        <div className='h-5 w-5 bg-indigo-500 animate-pulse rotate-180 rounded-full'/>
        <div className='h-5 w-5 bg-violet-300 animate-pulse rotate-180 rounded-full'/>
        <div className='h-5 w-5 bg-purple-100 animate-pulse rotate-180 rounded-full'/>
    </div>
  )
}

export default LoadingPage