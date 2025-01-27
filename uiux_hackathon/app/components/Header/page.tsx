import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { BsPerson, BsHeart } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';

function Header() {
  return (

    <div className="bg-violet w-full md:flex md:justify-between items-center h-16 2xl:h-20 md:h-11 2xl:h-24 mx-auto  ">
      <div className="2xl:px-default-margin lg:mx-[50px] md:px-8 px-4 flex flex-col md:flex-row items-center justify-between w-full">

        <div className="text-[#F1F1F1] my-2 flex 2xl:gap-16">
          <p className="flex mx-2">
            <MdOutlineEmail className="mr-3 2xl:text-5xl" />
            <span className="font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid 2xl:text-5xl">
              mhhasanul@gmail.com
            </span>
          </p>
          <p className="flex mx-2">
            <FaPhoneVolume className="text-sm 2xl:text-5xl" />
            <span className="ml-1 md:ml-4 font-semibold text-xs md:text-[16px] md:leading-[16px] underline decoration-solid 2xl:text-5xl">
              (12345)67890
            </span>
          </p>
        </div>

        {/* Second Section */}
        <div className="flex lg:flex-row items-center gap-6 2xl:gap-16 text-[#F1F1F1]">
          <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-5xl">
            English <span><FaAngleDown /></span>
          </p>
          <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-5xl">
            USD <span><FaAngleDown /></span>
          </p>
          <Link href={'/login'}>
            <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-5xl">
              Login <BsPerson className='hidden md:block 2xl:text-5xl' />
            </p>
          </Link>
          <p className="font-semibold text-[14px] lg:text-[16px] leading-[16px] flex 2xl:text-5xl">
            Wishlist <BsHeart className='hidden md:block 2xl:text-5xl' />
          </p>
          <Link href={'/cart'}>
            <IoCartOutline className="text-lg md:text-3xl 2xl:text-6xl" />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Header
