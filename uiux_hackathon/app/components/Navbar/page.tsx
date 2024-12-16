'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdown,setDropdown] = useState(false);



  return (
    <div>
      <nav className="flex items-center justify-between my-[13px] md:my-[23px]  mx-4 lg:mx-[220px] 2xl:mx-default-margin">
   
        <div className="inline-flex items-center gap-[30px] lg:gap-[80px] 2xl:gap-[90px] ">
 
          <div className="logo">
            <h1 className={`font-bold text-2xl lg:text-[34px] lg:leading-[34px] overflow-hidden`}>
              Hekto
            </h1>
          </div>

          <div className={`hidden lg:flex space-x-8 text-[16px] leading-[20px]`}>
           <ul className='flex'>
            <li className='relative' 
           
            >
          <div className="flex items-center text-[#FB2E86] top-[10px]">
          <Link href="/" className=" ">
              Home
            </Link>

            <span>
                <FaAngleDown className="ml-2"  onClick={() => setDropdown(!dropdown)}/>
              </span>
          </div>

            {dropdown && (
               <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md text-gray-800 z-10 w-[200px]">
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/demo">Demo</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/shopList">Shop List</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/about">About Us</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/faq">FAQ</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/orders">Orders</Link>
               </li>
             </ul>
            )}
            </li>
           </ul>
            <Link href="/404" className="">
              Pages
            </Link>
            <Link href="/products" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Product
            </Link>
            <Link href="/blogs" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Blog
            </Link>
            <Link href="/shop" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Shop
            </Link>
            <Link href="/contact" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Contact
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:ml-20 2xl:ml-0">
          <div className="flex items-center border border-gray-300 px-2 ">
            <input type="text" className="px-6 py-1 text-sm focus:outline-none" />
          </div>
          <button className="bg-secondary text-white px-2 py-1">
            <FaSearch />
          </button>
        </div>

        <button
          className="lg:hidden text-xl text-[#FB2E86]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4 mx-3">
         <li className='relative list-none'
           onClick={() => setDropdown(!dropdown)}
         >

          <div className="flex text-[#FB2E86] items-center">
            
         <Link href="/" className="block ">
            Home
          </Link>

          <span>
              <FaAngleDown className="ml-2 inline" />
            </span>

          </div>


          {dropdown && (
               <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md text-gray-800 z-10 w-[200px]">
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/demo">Demo</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/shopList">Shop List</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/about">About Us</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/faq">FAQ</Link>
               </li>
               <li className="hover:bg-gray-100 px-4 py-2">
                 <Link href="/orders">Orders</Link>
               </li>
             </ul>
            )}
         </li>
          <Link href="/404" className="block text-[#0D0E43]">
            Pages
          </Link>
          <Link href="/products" className="block text-[#0D0E43]">
            Product
          </Link>
          <Link href="/blogs" className="block text-[#0D0E43]">
            Blog
          </Link>
          <Link href="/shop" className="block text-[#0D0E43]">
            Shop
          </Link>
          <Link href="/contact" className="block text-[#0D0E43]">
            Contact
          </Link>

          <div className="flex items-center border border-gray-300 px-2 mt-4">
            <input type="text" className="w-full py-1 text-sm focus:outline-none" />
            <button className="bg-secondary text-white px-2 py-1">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
