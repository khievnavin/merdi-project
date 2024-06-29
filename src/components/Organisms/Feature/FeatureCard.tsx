import React from 'react'
import Image from 'next/image'
export default function FeatureCard() {
  return (
    <div className='m-5' >
    <div className="grid grid-cols-4 ">
      <div className="flex flex-col items-center justify-center">
         <Image src="freeship.svg" alt='ship' width={85} height={85}/>
         <p className='text-[18px] font-bold'>Free Shipping</p>
         <p className='text-[14px]'>Free shipping with discount</p>
      </div>
      <div className="flex flex-col items-center justify-center">
         <Image src="support.svg" alt='support' width={85} height={85}/>
         <p className='text-[18px] font-bold'>Great Support 24/7</p>
         <p className='text-[14px]'>Instant access to Contact</p>
      </div>
      <div className="flex flex-col items-center justify-center">
         <Image src="payment.svg" alt='payment' width={85} height={85}/>
         <p className='text-[18px] font-bold'>100% Sucure Payment</p>
         <p className='text-[14px]'>Free shipping with discount</p>
      </div>
      <div className="flex flex-col items-center justify-center">
         <Image src="moneyback.svg" alt='moneyback' width={85} height={85}/>
         <p className='text-[18px] font-bold'>Money-Back Guarantee</p>
         <p className='text-[14px]'>30 days money-back</p>
      </div>
    </div>
    <div className='h-[40px] border-b'></div>
    </div>
  )
}
