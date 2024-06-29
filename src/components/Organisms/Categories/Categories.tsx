import React from 'react'
import Image from 'next/image'

export default function Categories() {
  return (
    <div>
        <div className='flex flex-row items-start justify-between'>
        <p className='text-[25px] font-bold'>Popular Categories</p>
        <div className='flex flex-row gap-2'>
            <p className='text-[#008001]'>View All</p>
            <Image src='/arrow2.svg' alt='arrow' width={20} height={20}/>
        </div>
        </div>
        <div  className=' flex-row justify-start grid grid-cols-6 '>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/syring.svg' alt='Category 1' width={270} height={270} />
                <p className='text-md font-bold'>Syringe and needles</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/suture.svg' alt='Category 2' width={270} height={270} />
                <p className='text-md font-bold'>Suture</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/syring.svg' alt='Category 1' width={270} height={270} />
                <p className='text-md font-bold'>Blood Bag</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/syring.svg' alt='Category 1' width={270} height={270} />
                <p className='text-md font-bold'>Syringe and needles</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/syring.svg' alt='Category 1' width={270} height={270} />
                <p className='text-md font-bold'>Syringe and needles</p>
            </div>
        </div>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <Image src='/syring.svg' alt='Category 1' width={270} height={270} />
                <p className='text-md font-bold'>Syringe and needles</p>
            </div>
        </div>
        </div>
    </div>
  )
}
