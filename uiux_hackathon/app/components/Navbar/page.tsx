'use client';
// import React from 'react';
// import Link from 'next/link';
// import { FaAngleDown } from "react-icons/fa6";
// import { FaSearch } from 'react-icons/fa';

// function Navbar() {
//   return (
//     <div>
//       <nav className="flex items-center justify-between my-[23px]  w-full mx-auto lg:mx-[200px] 2xl:mx-default-margin">
//       <div className="inline-flex items-center gap-[90px]">
//       <div className="logo">
//           <h1 className={` font-bold text-[34px] leading-[34px]  overflow-hidden`}>
//             Hekto
//           </h1>
//         </div>
//         <div className={ ` flex space-x-8 text-[16px] leading-[20px]`}>
//         <Link href="/" className="text-[#FB2E86] top-[10px] flex">
//           Home
//           <span><FaAngleDown className='ml-2'/></span>
//         </Link>
//         <Link href="/" className="">
//           Pages
//         </Link>
//         <Link href="/products" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
//          Product
//         </Link>
//         <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
//           Blog
//         </Link>
//         <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
//           Shop
//         </Link>
//         <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
//           Contact
//         </Link>
//       </div>
//       </div>
      
//       <div className='flex'>
//       <div className="flex items-center border border-gray-300  px-2 w-[70%]">
//         <input
//           type="text"
//           className="px-16 py-1 text-sm focus:outline-none"
//         />
//       </div>
//       <button className="bg-secondary text-white px-2 py-1">
//           <FaSearch />
//         </button>
//       </div>


//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown, FaBars, FaTimes, FaSearch } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between my-[23px] w-full mx-auto lg:mx-[200px] 2xl:mx-default-margin">
        {/* Logo + Links */}
        <div className="inline-flex items-center gap-[30px] lg:gap-[90px]">
          {/* Logo */}
          <div className="logo">
            <h1 className={`font-bold text-[34px] leading-[34px] overflow-hidden`}>
              Hekto
            </h1>
          </div>

          {/* Desktop Links */}
          <div className={`hidden lg:flex space-x-8 text-[16px] leading-[20px]`}>
            <Link href="/" className="text-[#FB2E86] top-[10px] flex">
              Home
              <span>
                <FaAngleDown className="ml-2" />
              </span>
            </Link>
            <Link href="/" className="">
              Pages
            </Link>
            <Link href="/products" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Product
            </Link>
            <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Blog
            </Link>
            <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Shop
            </Link>
            <Link href="/" className="text-[#0D0E43] font-normal text-[16px] leading-[20px]">
              Contact
            </Link>
          </div>
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex">
          <div className="flex items-center border border-gray-300 px-2 w-[70%]">
            <input type="text" className="px-16 py-1 text-sm focus:outline-none" />
          </div>
          <button className="bg-secondary text-white px-2 py-1">
            <FaSearch />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-2xl text-[#FB2E86]"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4">
          <Link href="/" className="block text-[#FB2E86]">
            Home
            <span>
              <FaAngleDown className="ml-2 inline" />
            </span>
          </Link>
          <Link href="/" className="block text-[#0D0E43]">
            Pages
          </Link>
          <Link href="/products" className="block text-[#0D0E43]">
            Product
          </Link>
          <Link href="/" className="block text-[#0D0E43]">
            Blog
          </Link>
          <Link href="/" className="block text-[#0D0E43]">
            Shop
          </Link>
          <Link href="/" className="block text-[#0D0E43]">
            Contact
          </Link>

          {/* Search Box */}
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
