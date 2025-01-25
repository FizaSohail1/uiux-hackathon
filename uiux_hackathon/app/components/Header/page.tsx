import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BsPerson, BsHeart } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';

function Header() {
  return (
     
<div className="bg-violet w-full 2xl:flex 2xl:justify-between items-center h-16 2xl:h-20 md:h-11 mx-auto md:mx-0 ">
      <div className="2xl:mx-[371px] lg:mx-[130px] flex flex-col md:items-center md:flex-row md:justify-between ">
         <div className="text-[#F1F1F1] my-2 flex ">
          <p className= "flex mx-2 ">
            <MdOutlineEmail className="mr-3 2xl:text-2xl"/>
             <span className="font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid 2xl:text-2xl">
             mhhasanul@gmail.com
            </span>
           </p>

           <p className= "flex mx-2 ">
            <FaPhoneVolume className="text-sm 2xl:text-2xl"/>
             <span className=" ml-1 md:ml-4 font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid 2xl:text-2xl">
            (12345)67890
             </span>
           </p>
         </div>
        <div className="flex  lg:flex-row items-center my-2 mx-2 md:mx-4 lg:justify-between gap-3 lg:gap-4 md:gap-5 text-[#F1F1F1] lg:mx-[371px] 2xl:text-2xl">
        <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-2xl">
           English <span><FaAngleDown /></span>
         </p>
      <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-2xl">
           USD <span><FaAngleDown /></span>
         </p>
      <Link href={'/login'}>
      <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-2xl">
           Login <span><BsPerson className='hidden md:block 2xl:text-2xl'/></span>
       </p>

      </Link>
        <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex ml-3 2xl:text-2xl">
          Wishlist <span><BsHeart  className='hidden md:block 2xl:text-2xl'/></span>         </p>
         <p className="font-semibold text-[18px] lg:text-[16px] leading-[16px] flex 2xl:text-2xl"> 
          <Link href={'/cart'} > <IoCartOutline className='text-lg 2xl:text-3xl' /></Link>
         </p>
       </div>
       </div>
  </div> 
  )
}

export default Header
