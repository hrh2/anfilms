import React from 'react'

export default function NotFound() {
  return (
    <div className=''>
      <div className="flex flex-col text-gray-50 items-center justify-center min-h-[50vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-600">Sorry, the page you're looking for doesn't exist or is still under development.</p>  
      <div className="mt-4 text-center">
        <p className="text-gray-500 mb-3">Or, you might want to explore others</p>
      </div>
    </div>
    </div>
  )
}
