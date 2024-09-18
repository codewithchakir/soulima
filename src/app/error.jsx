'use client'

import { useEffect } from 'react';

export default function error({error, reset}) {
    useEffect(() => {
        console.log(error);
    }, [error]);
  return (
    <div className='flex flex-col items-center justify-center mt-56 gap-4 text-center'>
        <h1>Something went wrong. Please try again later.</h1>
        <button  
            className="w-full sm:w-fit px-3.5 py-2 bg-red-500 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-300"
            onClick={() => reset()}
        >
            Try again
        </button>
    </div>
  )
}
