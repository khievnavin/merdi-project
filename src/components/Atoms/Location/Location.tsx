import React from 'react'
import Image from 'next/image'

export default function Location() {
  return (
    <div>
        <div className=' flex flex-row items-start justify-start gap-2'>
      <Image src = "/location.svg" width="18" height="18" alt="map" />
        <p className='text-gray-600 text-sm'>Store Location: No.2A, Down Town Road No 7,</p>
        <p className='text-gray-600 text-sm'>Phum Kork Chambak,Phnom Penh</p>
      </div>
    </div>
  )
}
