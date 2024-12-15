import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BsPerson, BsHeart } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';

function Header() {
  return (
     
<div className="bg-violet w-full items-center h-16 md:h-11 mx-auto md:mx-0 ">
      <div className="2xl:mx-[371px] lg:mx-[200px] flex flex-col md:items-center md:flex-row md:justify-between ">
         <div className="text-[#F1F1F1] my-2 flex ">
          <p className= "flex mx-2 ">
            <MdOutlineEmail className="mr-3"/>
             <span className="font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid">
             mhhasanul@gmail.com
            </span>
           </p>

           <p className= "flex mx-2 ">
            <FaPhoneVolume className="text-sm"/>
             <span className=" ml-1 md:ml-4 font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid">
            (12345)67890
             </span>
           </p>
         </div>
        <div className="flex  lg:flex-row items-center my-2 mx-2 md:mx-4 lg:justify-between gap-3 lg:gap-4 md:gap-5 text-[#F1F1F1] lg:mx-[371px]">
        <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex">
           English <span><FaAngleDown /></span>
         </p>
      <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex">
           USD <span><FaAngleDown /></span>
         </p>
      <Link href={'/login'}>
      <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex">
           Login <span><BsPerson className='hidden md:block'/></span>
       </p>

      </Link>
        <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex ml-3">
          Wishlist <span><BsHeart  className='hidden md:block'/></span>         </p>
         <p className="font-semibold text-[18px] lg:text-[16px] leading-[16px] flex"> 
          <Link href={'/cart'} > <IoCartOutline className='text-lg' /></Link>
         </p>
       </div>
       </div>
  </div> 
  )
}

export default Header
