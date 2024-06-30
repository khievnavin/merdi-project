// components/Card.js
import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="p-5">
      <div className="flex flex-row items-start justify-between hover:cursor-pointer">
        <p className="text-[25px] font-bold">Daily Blog</p>
        <div className="flex flex-row gap-2">
          <Image
            src="/back.svg"
            alt="arrow"
            width={20}
            height={20}
            className="p-1 border rounded-full w-full h-full"
          />
          <Image
            src="/next1.svg"
            alt="arrow"
            width={20}
            height={20}
            className="p-1 border rounded-full w-full h-full bg-[#008001]"
          />
        </div>
      </div>
      <div className="items-center justify-start grid grid-cols-3 gap-4 ">
        <div className=" rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/daily1.svg"
              alt="daily"
              layout="responsive"
              width={469}
              height={394}
            />
            <div className="absolute bottom-0 left-0 bg-white p-2 m-2 rounded text-center">
              <p className="text-black font-bold">18</p>
              <p className="text-black">NOV</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image src="cost.svg" alt="food" width={24} height={24} />
                <span className="text-sm font-semibold text-gray-600">
                  Food
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="admin.svg" alt="admin" width={20} height={20} />
                <span className="text-sm text-gray-600">By Admin</span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="comment.svg" alt="comment" width={20} height={20} />
                <span className="text-sm text-gray-600">65 Comments</span>
              </div>
            </div>
            <p className="text-green-600 mt-2">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </p>
            <p className="text-green-600 mt-4 inline-block">Read More &rarr;</p>
          </div>
        </div>

        <div className=" rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/daily2.svg"
              alt="daily"
              layout="responsive"
              width={469}
              height={394}
            />
            <div className="absolute bottom-0 left-0 bg-white p-2 m-2 rounded text-center">
              <p className="text-black font-bold">18</p>
              <p className="text-black">NOV</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image src="cost.svg" alt="food" width={24} height={24} />
                <span className="text-sm font-semibold text-gray-600">
                  Food
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="admin.svg" alt="admin" width={20} height={20} />
                <span className="text-sm text-gray-600">By Admin</span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="comment.svg" alt="comment" width={20} height={20} />
                <span className="text-sm text-gray-600">65 Comments</span>
              </div>
            </div>
            <p className="text-black mt-2">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </p>
            <p className="text-green-600 mt-4 inline-block">Read More &rarr;</p>
          </div>
        </div>

        <div className=" rounded overflow-hidden shadow-lg bg-white">
          <div className="relative">
            <Image
              src="/daily3.svg"
              alt="daily"
              layout="responsive"
              width={469}
              height={394}
            />
            <div className="absolute bottom-0 left-0 bg-white p-2 m-2 rounded text-center">
              <p className="text-black font-bold">18</p>
              <p className="text-black">NOV</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <Image src="cost.svg" alt="food" width={24} height={24} />
                <span className="text-sm font-semibold text-gray-600">
                  Food
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="admin.svg" alt="admin" width={20} height={20} />
                <span className="text-sm text-gray-600">By Admin</span>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="comment.svg" alt="comment" width={20} height={20} />
                <span className="text-sm text-gray-600">65 Comments</span>
              </div>
            </div>
            <p className="text-black mt-2">
              Curabitur porttitor orci eget neque accumsan venenatis. Nunc
              fermentum.
            </p>
            <p className="text-green-600 mt-4 inline-block">Read More &rarr;</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-8 m-5">
        <Image src="point.svg" alt="point" width={14} height={14}/>
        <Image src="point2.svg" alt="point" width={14} height={14}/>
        <Image src="point2.svg" alt="point" width={14} height={14}/>
      </div>
    </div>
  );
};

export default Card;
