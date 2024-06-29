import React from "react";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex flex-row p-4 gap-20 max-sm:gap-8">
      <Image src="/logo.svg" alt="logo" width={45} height={45} />
      <div className="w-[250px] max-sm:w-0"></div>
      <div className="relative flex items-center justify-between border rounded-md ms-[8%] lg:ms-[16%] lg:w-[590px] md:w-[290px] max-sm:ms-[2%] sm:w-[255px]">
        <div className="flex flex-row items-center">
          <Image
            alt="search"
            src="/search.svg"
            width={25}
            height={25}
            className="bg-none ms-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none focus:ring-0 border-none w-full px-1"
          />
        </div>
        <button className="w-[80px] max-sm:w-[70px] h-full text-white bg-[#008001] rounded-r-md hover:opacity-50 font-medium">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
