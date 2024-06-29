import React from "react";
import Image from "next/image";

export default function Products() {
  return (
    <div className="p-2">
      <div className="flex flex-row items-start justify-between hover:cursor-pointer">
        <p className="text-[25px] font-bold">Popular Products</p>
        <div className="flex flex-row gap-2">
          <p className="text-[#008001]">View All</p>
          <Image src="/arrow2.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
      <div className=" flex-row items-center justify-center grid grid-cols-5">
        <div className="relative border border-gray-300  w-80 text-left">
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale 50%
          </span>
          <div className="mb-4">
            <Image
              src="/sarasoft.svg"
              alt="Sarasoft AG"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-row items-start justify-between me-5">
          <div className="flex flex-col ms-2">
            <div className="mb-2 text-gray-500 text-sm">HealthCare</div>
            <div className="mb-2 text-lg font-semibold">Sarasoft AG</div>
            <div className="mb-2 text-gray-700">
              <span className="line-through text-gray-500">$20.99</span>
              <span className="text-red-600 ml-2">$14.99</span>
            </div>
            <div className="text-yellow-500">★★★★☆</div>
          </div>
          <Image src='/bage.svg' alt="bage" width={54} height={54}/>
          </div>
        </div>
        <div className="relative border border-gray-300  w-80 text-left">
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Sale 50%
          </span>
          <div className="mb-4">
            <Image
              src="/sarasoft.svg"
              alt="Sarasoft AG"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-row items-start justify-between me-5">
          <div className="flex flex-col ms-2">
            <div className="mb-2 text-gray-500 text-sm">HealthCare</div>
            <div className="mb-2 text-lg font-semibold">Sarasoft AG</div>
            <div className="mb-2 text-gray-700">
              <span className="line-through text-gray-500">$20.99</span>
              <span className="text-red-600 ml-2">$14.99</span>
            </div>
            <div className="text-yellow-500">★★★★☆</div>
          </div>
          <Image src='/bage.svg' alt="bage" width={54} height={54}/>
          </div>
        </div>
        <div className="relative border border-[#008001]  w-80 text-left">
          
          <div className="mb-4">
            <Image
              src="/sarasoft.svg"
              alt="Sarasoft AG"
              width={200}
              height={200}
              layout="responsive"
              objectFit="contain"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-row items-start justify-between me-5">
          <div className="flex flex-col ms-2">
            <div className="mb-2 text-gray-500 text-sm">HealthCare</div>
            <div className="mb-2 text-lg font-semibold">Sarasoft AG</div>
            <div className="mb-2 text-gray-700">
              <span className="line-through text-gray-500">$20.99</span>
              <span className="text-red-600 ml-2">$14.99</span>
            </div>
            <div className="text-yellow-500">★★★★☆</div>
          </div>
          <Image src='/bagebg.svg' alt="bage" width={54} height={54}/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/sarasoft.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Blood Lancet</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border ">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/sarasoft.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Urine Bag</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border ">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/sarasoft.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md text-[#008001] font-bold">Medical Tube</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border ">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/sarasoft.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md text-[#008001] font-bold">Medical Tube</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border ">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/sarasoft.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md text-[#008001] font-bold">Medical Tube</p>
          </div>
        </div>
      </div>
    </div>
  );
}
