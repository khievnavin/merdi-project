import Button from "@/components/Atoms/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function Menu() {
  return (
    <div className="flex flex-row h-[50px] bg-[#333333]  items-center justify-between pe-24">
     
      <div className="flex flex-row gap-4 ms-[10%] max-sm:ms-3">
        <Button className="text-white bg-[#008001] rounded-md  p-2 ">
          <Link href={"/"}>Home</Link>
        </Button>
        <div>
          <select className=" outline-none border-none bg-[#333333] text-white hover:bg-[#008001] rounded-md  p-2">
            <option value="Shop">Shop</option>
            <option value="Shop1">Shop1</option>
          </select>
        </div>
        <div>
          <select className=" outline-none border-none bg-[#333333] text-white hover:bg-[#008001] rounded-md  p-2">
            <option value="Blog">Blog</option>
            <option value="Blog1">Blog1</option>
          </select>
        </div>
        <Button className="text-white hover:bg-[#008001] rounded-md  p-2 ">
          <Link href={"/"}>About Us</Link>
        </Button>
        <Button className="text-white hover:bg-[#008001] rounded-md  p-2 ">
          <Link href={"/"}>Contact Us</Link>
        </Button>
      </div>
      <div className="flex gap-3">
        <Image src="phone.svg" alt="phone" width={24} height={24}/>
        <p className="text-white">{`+(885) 088 5654 093`}</p>
      </div>
    </div>
  );
}
