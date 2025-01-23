import React from 'react'
import HeroSection from '../components/Hero/page';
import { FaAngleDown } from 'react-icons/fa6';
import { TiThLargeOutline } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import { TfiZoomIn } from "react-icons/tfi";
import Image from 'next/image';
import { IoCartOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';

function shopList() {
  return (
    <div>

      <HeroSection name={'Shop List'}/>

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin block space-y-3 lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold'>Ecommerce Acceories & Fashion item </h1>
        <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className=" block md:flex items-center justify-between gap-2 mx-4 md:mx-0 ">
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E]'>Pre-Pages:</p>
            <div className="h-[23px] w-[45px] 2xl:h-[25px] 2xl:w-[55px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
          <div className="flex gap-7 md:gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] '>Sort By:</p>
            <div className="h-[25px] w-[75px] 2xl:h-[28px] 2xl:w-[96px] border-[#E7E6EF] border-[1px] border-solid px-1">
              <p className="font-normal text-[9px] 2xl:text-[12px] leading-[18px] text-[#3F509E] flex items-center">Best Match
                <span><FaAngleDown /></span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] flex items-center gap-1'>view:
              <span><TiThList /> </span>
              <span>< TiThLargeOutline /></span>
            </p>
            <div className="h-[27px] w-[110px] 2xl:h-[30px] 2xl:w-[162px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
        </div>
      </div>

      <div className='my-16 mx-auto lg:mx-[200px] 2xl:mx-default-margin'>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-1.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-4">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Accumsan tincidunt</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-2.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>In nulla</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-3.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Vel sem</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                 
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-4.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Porttitor cum</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-5.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Nunc in</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-6.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Vitae facilisis</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[254px] lg:w-[1141px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shop-7.jpg'} height={218} width={314} alt='image' className='object-cover h-[218px] w-[314px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Curabitur lectus</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                  

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>
      </div>

      <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20 ">
   <Image src={'/logos.png'} alt="logos" height={93} width={904} className=" h-full w-full object-cover" />
   </div>

    </div>
  )
}

export default shopList
