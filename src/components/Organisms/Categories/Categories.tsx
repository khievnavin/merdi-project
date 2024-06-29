import React from "react";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="p-2">
      <div className="flex flex-row items-start justify-between hover:cursor-pointer">
        <p className="text-[25px] font-bold">Popular Categories</p>
        <div className="flex flex-row gap-2">
          <p className="text-[#008001]">View All</p>
          <Image src="/arrow2.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
      <div className=" flex-row items-center justify-start grid grid-cols-6 gap-4">
        <div className="flex flex-col items-center justify-center border rounded-md">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/syring.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Syringe and needles</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-md">
        <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/suture.svg"
              alt="Category 2"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Suture</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-md">
          <div className="flex flex-col items-center justify-center p-2">
            <Image src="/blood.svg" alt="Category 1" width={270} height={270} />
            <p className="text-md font-bold">Blood Bag</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-md">
        <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/blood2.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Blood Lancet</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-md">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/urine.svg"
              alt="Category 1"
              width={270}
              height={270}
            />
            <p className="text-md font-bold">Urine Bag</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border rounded-md border-[#008001]">
          <div className="flex flex-col items-center justify-center p-2">
            <Image
              src="/medical.svg"
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
