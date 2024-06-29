
import Button from "@/components/Atoms/Button/Button";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Slider() {
  return (
    <div className="h-[500px] sm:h-[400px] xl:h-[600px] 2xl:h-[700px] bg-slate-200">
      <Carousel>
      <div className="flex  items-center justify-center">
      <div>
      <Image src="bgcard.svg" alt="background Card" width={725} height={640} />
      </div>
      <div>
      <div className="flex flex-col">
        <p className="text-[#008001] text-[18px]">
          Medicom experienced since 1993 in
        </p>
        <p className="text-[52px] font-bold">Medical Equipment </p>
        <p className="text-[52px] font-bold">Provider</p>
      </div>
      <div className="h-[30px]"></div>
      <div className=" flex flex-row gap-2">
        <p className="text-[32px]">Sale up to</p>
        <p className="text-[32px] text-[#FF8A00]">30% OFF</p>
      </div>
      <div>
        <p className="text-[14px]">
          Medicom is one of the major supplier of medical and Laboratory
          Equipment{" "}
        </p>
        <p className="text-[14px]">throughout the kingdome.</p>
      </div>
      <Button className="flex items-center justify-center w-[151px] h-[41px] text-[16px] bg-[#008001] gap-2 rounded-3xl text-white">
         Shop Now 
         <Image src="arrow.svg" alt="arrow" width={20} height={20}  className="flex items-center justify-center"/>
      </Button>
      </div>
    </div>
    <div className="flex flex-row items-center justify-center gap-5">
      <div>
      <Image src="bgcard.svg" alt="background Card" width={725} height={640} />
      </div>
      <div>
      <div className="flex flex-col">
        <p className="text-[#008001] text-[18px]">
          Medicom experienced since 1993 in
        </p>
        <p className="text-[52px] font-bold">Medical Equipment </p>
        <p className="text-[52px] font-bold">Provider</p>
      </div>
      <div className="h-[30px]"></div>
      <div className=" flex flex-row gap-2">
        <p className="text-[32px]">Sale up to</p>
        <p className="text-[32px] text-[#FF8A00]">30% OFF</p>
      </div>
      <div>
        <p className="text-[14px]">
          Medicom is one of the major supplier of medical and Laboratory
          Equipment{" "}
        </p>
        <p className="text-[14px]">throughout the kingdome.</p>
      </div>
      <Button className="flex items-center justify-center w-[151px] h-[41px] text-[16px] bg-[#008001] gap-2 rounded-3xl text-white">
         Shop Now 
         <Image src="arrow.svg" alt="arrow" width={20} height={20}  className="flex items-center justify-center"/>
      </Button>
      </div>
    </div>
    <div className="flex flex-row items-center justify-center gap-5">
      <div>
      <Image src="bgcard.svg" alt="background Card" width={725} height={640} />
      </div>
      <div>
      <div className="flex flex-col">
        <p className="text-[#008001] text-[18px]">
          Medicom experienced since 1993 in
        </p>
        <p className="text-[52px] font-bold">Medical Equipment </p>
        <p className="text-[52px] font-bold">Provider</p>
      </div>
      <div className="h-[30px]"></div>
      <div className=" flex flex-row gap-2">
        <p className="text-[32px]">Sale up to</p>
        <p className="text-[32px] text-[#FF8A00]">30% OFF</p>
      </div>
      <div>
        <p className="text-[14px]">
          Medicom is one of the major supplier of medical and Laboratory
          Equipment{" "}
        </p>
        <p className="text-[14px]">throughout the kingdome.</p>
      </div>
      <Button className="flex items-center justify-center w-[151px] h-[41px] text-[16px] bg-[#008001] gap-2 rounded-3xl text-white">
         Shop Now 
         <Image src="arrow.svg" alt="arrow" width={20} height={20}  className="flex items-center justify-center"/>
      </Button>
      </div>
    </div>
      </Carousel>
    </div>
  );
}
