import React from "react";
import Image from "next/image";

export default function Discount() {
  return (
    <div className="items-center justify-start grid grid-cols-3 m-5">
      <div className="relative max-w-sm mx-auto">
        <Image src="/medi.svg" alt="Medical items" width={500} height={250} />
        <div className="absolute inset-0 flex flex-col items-center justify-start  rounded-lg text-black p-6 gap-5">
          <h2 className=" text-md text-[#6B7280]">Best Deals</h2>
          <h1 className="text-2xl font-bold ">Sale of the Month</h1>
          <div className="flex justify-center gap-2">
            <div className="text-center">
              <div className="text-lg font-bold">00</div>
              <div className="text-xs">DAYS</div>
            </div>
            <div className="text-center">
              <div className="text-lg text-white items-center justify-center">
                :
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">02</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="text-center">
              <div className="text-lg text-white items-center justify-center">
                :
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">18</div>
              <div className="text-xs">MINS</div>
            </div>
            <div className="text-center">
              <div className="text-lg text-white items-center justify-center">
                :
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">46</div>
              <div className="text-xs">SECS</div>
            </div>
          </div>
          <button className="bg-[#008001] text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
            Shop Now &rarr;
          </button>
        </div>
      </div>
      <div className="relative max-w-sm mx-auto">
        <Image src="/materail.svg" alt="Medical items" width={500} height={250} />
        <div className="absolute inset-0 flex flex-col items-center justify-start  rounded-lg text-white p-6 gap-5">
          <h2 className=" text-md ">NEW PRODUCTS</h2>
          <h1 className="text-2xl font-bold ">Materials Doctor</h1>
         
            <div className="text-center flex flex-row gap-2">
              <div className="text-md">Started at</div>
              <div className="text-md text-red-600 font-bold">$79.99</div>
            </div>
          
          <button className="bg-white text-[#008001] py-2 px-6 border rounded-full hover:bg-green-200 border-[#008001]">
            Shop Now &rarr;
          </button>
        </div>
      </div>
      <div className="relative max-w-sm mx-auto">
        <Image src="/discount.svg" alt="discount" width={500} height={250} />
        <div className="absolute inset-0 flex flex-col items-center justify-start  rounded-lg text-black p-6 gap-5">
          <h2 className=" text-md ">SUMMER SALE</h2>
          <h1 className="text-2xl font-bold ">Discount</h1>
         
            <div className="text-center items-center justify-center flex flex-row gap-2">
              <div className="text-md">Up to</div>
              <div className="text-md text-[#FCC900] font-bold border rounded-md bg-black p-2">64% OFF</div>
            </div>
          
          <button className="bg-white text-[#008001] py-2 px-6 border rounded-full hover:bg-green-200 border-[#008001]">
            Shop Now &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
