import React from 'react';
import Image from 'next/image';

const Company = () => {
  return (
    <div className="flex justify-around items-center py-16 bg-white shadow">
      <div className="text-green-500 font-semibold">
        <Image src="step.svg" alt='logo' width={60} height={30}/>
      </div>
      <div>
      <Image src="mango.svg" alt='logo' width={60} height={30}/>
      </div>
      <div > <Image src="food.svg" alt='logo' width={60} height={30}/></div>
      <div > <Image src="food4.svg" alt='logo' width={60} height={30}/></div>
      <div> <Image src="bookoff.svg" alt='logo' width={60} height={30}/></div>
      <div > <Image src="series.svg" alt='logo' width={60} height={30}/></div>
    </div>
  );
};

export default Company;
