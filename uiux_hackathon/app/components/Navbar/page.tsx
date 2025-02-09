'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from '../searchBar/page';
import { UserButton } from '@clerk/nextjs';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdown,setDropdown] = useState(false);

  return (
    <div>
      <nav className="flex items-center h-12 justify-between my-[13px] md:my-[23px]  mx-4 lg:mx-[150px] 2xl:mx-default-margin">
   
        <div className="flex items-center gap-[30px] lg:gap-[80px] 2xl:gap-[90px] ">
 
          <div className="logo">
            <h1 className={`font-bold text-2xl lg:text-[34px] lg:leading-[34px] 2xl:text-6xl overflow-hidden`}>
              Hekto
            </h1>
          </div>

          <div className={`hidden lg:flex space-x-8 2xl:space-x-12 text-[16px] leading-[20px]`}>
           <ul className='flex'>
            <li className='relative' 
           
            >
          <div className="flex items-center text-[#FB2E86] top-[10px] 2xl:text-3xl">
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
            <Link href="/404" className="2xl:text-2xl">
              Pages
            </Link>
            <Link href="/products" className="text-[#0D0E43] font-normal text-[16px] leading-[20px] 2xl:text-3xl">
              Product
            </Link>
            <Link href="/blogs" className="text-[#0D0E43] font-normal text-[16px] leading-[20px] 2xl:text-3xl">
              Blog
            </Link>
            <Link href="/shop" className="text-[#0D0E43] font-normal text-[16px] leading-[20px] 2xl:text-3xl">
              Shop
            </Link>
            <Link href="/contact" className="text-[#0D0E43] font-normal text-[16px] leading-[20px] 2xl:text-3xl">
              Contact
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-5'>
           
        <div className="relative hidden lg:flex left-10">
        <SearchBar />
        </div>
        <div className='justify-end ml-10 hidden lg:flex'>
          <UserButton />
        </div>
        </div>
        <div className='lg:hidden flex gap-3 items-center'>
        <button
          className=" text-xl text-[#FB2E86]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div>
        <UserButton/>
        </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4 mx-3">
         <li className='relative list-none'
           onClick={() => setDropdown(!dropdown)}
         >

          <div className="flex text-[#FB2E86] items-center ">
            
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

          <div className="relative">
           <SearchBar/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
