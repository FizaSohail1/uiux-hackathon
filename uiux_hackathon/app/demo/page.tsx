import React from 'react'
import HeroSection from '../components/Hero/page';
import { IoMdCheckbox } from "react-icons/io";
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa6';

function demoPage() {
  return (
    <div>

      <HeroSection name={'Hekto Demo'} />

      <div className='my-16 mx-auto lg:mx-[200px] 2xl:mx-default-margin'>
      <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold'>Heckto Demo</h1>
        <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left '> Cart/ Information/ Shipping/ Payment</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start  gap-[30px] 2xl:gap-[70px]">
            <div className="h-auto w-full lg:h-[920px] lg:w-[600px] 2xl:w-[770px] bg-[#f8f8fd] mt-16 rounded-[2px] py-5 px-2 lg:px-3 mx-auto lg:mx-0">
               <form action="" className='w-[290px] lg:h-[791px]  lg:w-[570px] 2xl:w-[709px] rounded-[2px]'>
               <div className="block lg:flex justify-between items-center">
                    <h1 className='text-lg  text-headingsText font-semibold '>Contact Information</h1>
                    <p className='text-[#c1cbe1] text-xs lg:text-sm font-medium'>Already have an account?  Log In</p>
                </div>

                <div className="relative my-5">
             <input
        type="email"
        id="email"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none mt-5 lg:mt-10"
      />
      <label
        htmlFor="email"
        className="absolute left-0 top-5 font-semibold text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg peer-placeholder-shown:text-xs:lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       Email or mobile phone number
      </label>
                    </div>

                    <div className='mt-10'>
                        <p className='text-gray-500 font-medium text-xs flex items-center gap-2'> <span className='text-green-600 '> <IoMdCheckbox /> </span>Keep me up to date on news and excluive offers</p>
                    </div>

                    <h1 className='text-lg mt-7 lg:mt-16 text-headingsText font-semibold '>Shipping Address</h1>
                     <div className="flex space-x-3 lg:space-x-8">
                     <div className="relative my-5 w-1/2">
             <input
        type="text"
        id="name"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="fistname"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       First name (optional) 
      </label>
                    </div>

                    <div className="relative my-5 w-1/2">
             <input
        type="text"
        id="name"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="last name"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       Last name 
      </label>
                    </div>
                     </div>

                     <div className="relative my-5 ">
             <input
        type="text"
        id="address"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="address"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       Address 
      </label>
                    </div>

                    <div className="relative my-5 ">
             <input
        type="text"
        id=""
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="address"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       Appaetnentment,suit,e.t.c (optinal)
      </label>
                    </div>

                    <div className="relative my-5 ">
             <input
        type="text"
        id="city"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="city"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
       City
      </label>
                    </div>

                    <div className="flex space-x-8">
                     <div className="relative my-5 w-1/2">
             <input
        type="text"
        id=""
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="country"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
      Bangladesh 
      </label>
                    </div>

                    <div className="relative my-5 w-1/2">
             <input
        type="text"
        id="code"
        placeholder=" "
        className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm  focus:outline-none  mt-10"
      />
      <label 
        htmlFor="postal code"
        className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1]  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm "
      >
        Postal Code
      </label>
                    </div>
                     </div>


                     <button type='submit' className="bg-secondary text-white py-2 px-4 mt-7 lg:mt-16">
                Continue Shipping
              </button>


               </form>

            </div>

            <div className="mt-16 space-y-6  ">
                <div className="h-[102px] w-[270px] lg:w-[320px] 2xl:w-[369px]  rounded-[3px] mx-auto lg:mx-0 ">
                   <div className="flex justify-between items-center">
                   <div className="flex gap-3">
                        <Image src={'/cart-5.jpg'} alt='demoimg' height={87} width={83} className='object-cover h-[87px] w-[83px] rounded-[3px]' />
                        <div className="">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                    </div>

                    <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>
                   </div>
                   <hr className='border-gray-300  mt-7' />
                </div>

                <div className="h-[102px] w-[270px] lg:w-[320px] 2xl:w-[369px]  rounded-[3px] mx-auto lg:mx-0">
                   <div className="flex justify-between items-center">
                   <div className="flex gap-3">
                        <Image src={'/demo-2.jpg'} alt='demoimg' height={87} width={83} className='object-cover h-[87px] w-[83px] rounded-[3px]' />
                        <div className="">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                    </div>

                    <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>
                   </div>
                   <hr className='border-gray-300  mt-7' />
                </div>

                <div className="h-[102px] w-[270px] lg:w-[320px] 2xl:w-[369px]  rounded-[3px] mx-auto lg:mx-0">
                   <div className="flex justify-between items-center">
                   <div className="flex gap-3">
                        <Image src={'/demo-3.jpg'} alt='demoimg' height={87} width={83} className='object-cover h-[87px] w-[83px] rounded-[3px]' />
                        <div className="">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                    </div>

                    <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>
                   </div>
                   <hr className='border-gray-300  mt-7' />
                </div>

                <div className="h-[102px] w-[270px] lg:w-[320px] 2xl:w-[369px]  rounded-[3px] mx-auto lg:mx-0">
                   <div className="flex justify-between items-center">
                   <div className="flex gap-3">
                        <Image src={'/demo-4.jpg'} alt='demoimg' height={87} width={83} className='object-cover h-[87px] w-[83px] rounded-[3px]' />
                        <div className="">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                    </div>

                    <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>
                   </div>
                   <hr className='border-gray-300  mt-7' />
                </div>

                <div className="h-[102px] w-[270px] lg:w-[320px] 2xl:w-[369px]  rounded-[3px] mx-auto lg:mx-0">
                   <div className="flex justify-between items-center">
                   <div className="flex gap-3">
                        <Image src={'/demo-5.jpg'} alt='demoimg' height={87} width={83} className='object-cover h-[87px] w-[83px] rounded-[3px]' />
                        <div className="">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                    </div>

                    <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>
                   </div>
                   <hr className='border-gray-300  mt-7' />
                </div>

                <div>
                <h2 className=" text-lg text-center font-semibold lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] mt-10 mb-5">
                  Cart Total
                </h2>
              </div>

              <div className="h-[260px] w-[270px] md:h-[224px] lg:w-[320px] 2xl:w-[371px] mx-4 md:mx-0 p-4 bg-maingray">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg text-[#15245E]">
                    Subtotals:
                  </h4>
                  <h4 className="font-semibold text-base text-[#15245E]">
                    £219.00
                  </h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between mt-4">
                  <h4 className="font-semibold text-lg text-[#15245E]">
                    Totals:
                  </h4>
                  <h4 className="font-semibold text-base text-[#15245E]">
                    £219.00
                  </h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />

                <p className="font-normal text-xs flex gap-2 my-3">
                  <span>
                    <FaCircle className="text-[#19d16f]" />
                  </span>{" "}
                  Shipping & taxes calculated at checkout
                </p>

                <button className="w-full h-[40px] text-center font-bold text-sm bg-[#19d16f] py-2 my-3 text-white">
                  Proceed To Checkout
                </button>
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default demoPage
