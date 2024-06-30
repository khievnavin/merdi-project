// components/Footer.js
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className='bg-[#F7F7F7] h-[90px] flex items-center justify-between'>
        <div></div>
        
      <div className='flex flex-row items-center justify-center gap-5'>
        <p>Term</p>
        <p>Privacy</p>
        <p>Cookie</p>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className='flex flex-row gap-4'>
        <Image src="facebook.svg" alt='fb' width={35} height={35}/>
        <Image src="x.svg" alt='x' width={35} height={35}/>
        <Image src="p.svg" alt='p' width={35} height={35}/>
        <Image src="ig.svg" alt='ig' width={35} height={35}/>
      </div>
      <div></div>
      </div>
    <footer className="bg-gray-800 flex flex-col text-white p-6">
      
      <div className="container mx-auto flex flex-wrap justify-between broder border-b  p-1">
        <div>
          <Image src="/logo.svg" alt="Logo" className="" width={45} height={45} />
          <p>
            Address: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom Penh
          </p>
          <p>Office: (+855) 088 5654 093</p>
          <p>Email: info@medi.com</p>
        </div>
        <div>
          <h3 className="font-semibold">My Account</h3>
          <ul>
            <li><p className="text-[#999999]">My Account</p></li>
            <li><p className="text-[#999999]">Order History</p></li>
            <li><p className="text-[#999999]">Shopping Cart</p></li>
            <li><p className="text-[#999999]">Wishlist</p></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Helps</h3>
          <ul>
            <li><p className="text-[#999999]">Contact</p></li>
            <li><p className="text-[#999999]">FAQs</p></li>
            <li><p className="text-[#999999]">Terms & Conditions</p></li>
            <li><p className="text-[#999999]">Privacy Policy</p></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Proxy</h3>
          <ul>
            <li><p className="text-[#999999]">About</p></li>
            <li><p className="text-[#999999]">Shop</p></li>
            <li><p className="text-[#999999]">Product</p></li>
            <li><p className="text-[#999999]">Track Order</p></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Categories</h3>
          <ul>
            <li><p className="text-[#999999]">Fruit & Vegetables</p></li>
            <li><p className="text-[#999999]">Meat & Fish</p></li>
            <li><p className="text-[#999999]">Bread & Bakery</p></li>
            <li><p className="text-[#999999]">Beauty & Health</p></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className='text-[#999999]'>Developed by Digital Solution</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
