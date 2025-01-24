import React from 'react'
import HeroSection from '../components/Hero/page';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { GoChecklist } from "react-icons/go";

function orders() {
  return (
    <div>

       <HeroSection name={'Order Completed'}/>

       <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
      
       <div className="h-[360px] w-[250px]  lg:h-[370px] lg:w-[630px] border-b-2 border-l-2 border-dashed border-gray-300 relative mx-auto justify-center lg:justify-start">
  <div className="absolute -top-4 -left-4 bg-white rounded-full p-1 border border-gray-300 shadow">
    <FiClock className="text-secondary text-xl lg:text-5xl" />
  </div>

  <div className="h-[326px] w-[260px] lg:h-[326px] lg:w-[600px] mx-auto relative p-2">
    <div className="h-[40px] w-[48px] lg:w-[88px] lg:h-[80px] border-[1px] border-solid flex items-center bg-[#f6f7fa] justify-center mx-auto rounded-full">
      <div className="h-[35px] w-[35px] lg:h-[65px] lg:w-[65px] rounded-full bg-white justify-center items-center flex">
        <FaCheck className="text-xl lg:text-4xl text-secondary text-center" />
      </div>
    </div>

    <div className="my-3">
      <h1 className=" text-2xl lg:text-[36px] lg:leading-[42px] text-center text-headingsText">
        Your Order Is Completed!
      </h1>
    </div>

    <div className="text-center">
      <p className="font-bold text-sm lg:text-[16px] lg:leading-[30px] text-[#8d92a7]">
        Thank you for your order! Your order is being processed and will be
        completed within 3-6 hours. You will receive an email confirmation when
        your order is completed.
      </p>
    </div>

    <div className="mx-auto flex justify-center">
      <button className="h-[34px] w-auto p-2 md:h-[54px] md:w-[170px] 2xl:h-[59px] 2xl:w-[208px] items-center text-white text-center bg-secondary mt-5 lg:my-8">
        View Details
      </button>
    </div>
  </div>

  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-1 border border-gray-300 shadow">
    <GoChecklist className="text-secondary text-2xl lg:text-5xl" />
  </div>
</div>
       
       </div>

       <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20 ">
            <Image src={'/logos.png'} alt="logos" height={93} width={904} className=" h-full w-full object-cover" />
         </div>
    </div>
  )
}

export default orders
