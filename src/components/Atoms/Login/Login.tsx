import React from 'react'
import Image from 'next/image'
export default function Login() {
  return (
    <div className='flex flex-row gap-2 items-center justify-center'>
      <div className='flex flex-row'>
      <div className="flex gap-5 text-sm">
            <select className=" outline-none border-none">
              {/* <option selected></option> */}
              <option value="Eng">Eng</option>
              <option value="KH">KH</option>
            </select>
          </div>
      </div>
      {/* <div className='border-l'></div> */}
      <span className='border border-gray-300 h-6'></span>
      <div className='flex flex-row gap-5'>
        <p className='hover:cursor-pointer'>Sign in</p>
        <p className='hover:cursor-pointer'>Sign up</p>
      </div>
    </div>
  )
}
