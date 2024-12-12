import React from 'react'
import HeroSection from '../components/Hero/page'
import Image from 'next/image';
import { FaTruckFast,FaCheck } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
 import { SlBadge } from "react-icons/sl";

function about() {
  return (
    <div>
      <HeroSection name={'About Us'} />

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
        <div className="flex flex-col lg:flex-row justify-center gap-10 2xl:gap-14">
           <div className="bg-[#2b3cab] h-[320px] w-[280px] lg:h-[370px] lg:w-[552px] 2xl:h-[409px] 2xl:w-[552px] rounded-md mx-auto lg:mx-0">
           <Image src={'/about.jpg'} alt='about' height={390} width={555} className='object-cover h-[300px] w-[270px] lg:h-[350px] lg:w-[500px] 2xl:h-[390px] 2xl:w-[555px] rounded-md lg:ml-[15px]'/>
           </div>

           <div className="">
            <h1 className='text-[36px] leading-[48px] font-bold w-full lg:w-[90%] mx-5 lg:mx-0'>Know About Our Ecomerce Business, History</h1>
            <p className='text-[#8a8fb9] font-semibold my-5 w-full lg:w-[550px] mx-5 lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim et minus doloribus ducimus voluptas, incidunt eveniet aliquid. Necessitatibus corrupti blanditiis rem amet rerum iure saepe, adipisci fugiat mollitia dolores.</p>

            <div className="mt-10 mx-auto lg:mx-0 flex justify-center lg:justify-start">
                <button className='bg-secondary text-white h-12 w-[145px] text-lg font-semibold text-center'>Contact us</button>
            </div>
           </div>




        </div>
      </div>

      <div className=" my-10 md:my-20">
               <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
              What Shopex Offer
            </h2>
         
          <div className="flex flex-col lg:flex-row  mx-auto  justify-center gap-[30px] 2xl:gap-[70px] 2xl:flex 2xl:mx-default-margin lg:mx-[200px]">
            <div className="h-[320px] w-[250px] md:w-[270px] mt-8 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
              <FaTruckFast className="text-4xl text-secondary mb-4" />
              <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
                Fast Delivery
              </h2>
              <p className="font-normal text-center text-base mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
        
            <div className="h-[320px] w-[250px] md:w-[270px] mt-8 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto  border-b-[1px] border-b-yellow-600">
              <PiHandCoinsFill className="text-4xl text-secondary mb-4" />
              <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
                Secure Payment
              </h2>
              <p className="font-normal text-center text-base mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
        
            <div className="h-[320px] w-[250px] md:w-[270px] mt-8 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
              <SlBadge className="text-4xl text-secondary mb-4" />
              <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
                Premium Quality
              </h2>
              <p className="font-normal text-center text-base mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
        
            <div className="h-[320px] w-[250px] md:w-[270px] mt-8 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
              <SlBadge className="text-4xl text-secondary mb-4" />
              <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
                Premium Quality
              </h2>
              <p className="font-normal text-center text-base mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fbfbff] w-full h-auto lg:h-[400px] 2xl:h-[503px] flex items-center justify-center mx-auto my-10 md:my-20">
            <div className="">
            <h1 className='text-center font-bold text-3xl lg:text-[42px] lg:leading-[25.6px]'>Our Client Say!</h1>

<div className="my-5 flex gap-3 justify-center ">
    <Image src={'/client-1.jpg'} alt='client1' height={55} width={55} className='object-cover h-[55px] w-[55px]' />
    <Image src={'/client-2.jpg'} alt='client2' height={59} width={55} className='object-cover h-[59px] w-[55px]' />
    <Image src={'/client-3.jpg'} alt='client3' height={55} width={55} className='object-cover h-[55px] w-[55px]' />
</div>

<div className="">
    <h3 className='text-[22px] leading-[25.6px] text-center font-semibold'>Selina Gomez</h3>
    <p className='my-1 text-[#8a8fb9] text-center'>Ceo At Webecy Digital </p>

    <p className='my-6 text-[#8a8fb9] mx-auto flex justify-center font-bold text-[16px] leading-[25.4px] text-center lg:max-w-[689px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
</div>
            </div>
        </div>
    </div>
  )
}

export default about
