import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-around items-center px-4 h-14 py-5">
        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>op</span>
          <span className='text-green-500'>/&gt;</span>
          </div>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a> 
            <a className='hover:font-bold' href="/">Contact</a>
            <a className='hover:font-bold' href="/">About us</a>
        </li>
      </ul>
        <div>
          <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className=' invert w-10 p-1 ' src="public\github-hover.svg" alt="github logo" />
          <span className="font-bold px-2">GitHub</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default navbar
