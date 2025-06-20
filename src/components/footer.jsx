import React from 'react'

const footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
         <div className="logo font-bold text-white text-2xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>op</span>
          <span className='text-green-500'>/&gt;</span>
          </div>
        <div className=' flex justify-center items-center '>
        Created with <img src="public/heart.svg" className='w-6 mx-2' alt="" /> by Jayveer
        </div>
      
    </div>
  )
}

export default footer
