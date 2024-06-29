import React from 'react'
import Image from 'next/image'

export default function Shopping() {
  return (
    <div className='flex flex-row gap-2'>
      <div className='hover:cursor-pointer'>
        <Image src="favorite.svg" alt='fav' width={24} height={24}/>
      </div>
      <div className='border-l-2'></div>
      <div className='hover:cursor-pointer'>
        <Image src="shopping.svg" alt='shopping' width={24} height={24}/>
      </div>
      <div className=' flex items-center gap-1'>
      <p className='text-[12px]'>Shopping cart:</p>
      <p className='text-[14px] font-bold'>$0</p>
      </div>
    </div>
  )
}
