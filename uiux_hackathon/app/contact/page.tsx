import React from 'react'
import HeroSection from '../components/Hero/page';
import Image from 'next/image';

function contact() {
  return (
    <div>
        <HeroSection name={'Contact Us'} />

        <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin">
          <div className="flex flex-col lg:flex-row justify-center mx-auto lg:justify-between">
            <div className="px-4 lg:px-0">
              <h1 className=' text-2xl lg:text-4xl text-center lg:text-left text-headingsText  '>Information About us</h1>
              <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9] mt-4 mb-8  lg:w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>

              <div className="flex items-center gap-3 justify-center mx-auto lg:justify-start lg:mx-0">
                <div className="h-[25px] w-[25px] bg-[#5625df] rounded-full"></div>
                <div className="h-[25px] w-[25px] bg-[#ff27b7] rounded-full"></div>
                <div className="h-[25px] w-[25px] bg-[#37daf3] rounded-full"></div>
              </div>
            </div>

            <div className="">
              <h1 className=' text-2xl lg:text-4xl text-center lg:text-left text-headingsText my-6 lg:my-0 '>Contact Way</h1>
              <div className="my-7">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-7">
               <div className="flex gap-3">
                  <div className="h-[45px] w-[45px] lg:w-[55px] bg-[#5625df] rounded-full"></div>
                  <div className="">
                    <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9]'>Tel: 877-67-88-99 <br />E-Mail: shop@store.com</p>
                  </div> 
                </div>

                <div className="flex gap-3">
                  <div className="h-[45px] w-[45px] lg:w-[55px] bg-secondary rounded-full"></div>
                  <div className="">
                    <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9]'>Tel: 877-67-88-99 <br />E-Mail: shop@store.com</p>
                  </div>
                </div>
               </div>

               <div className="flex flex-col lg:flex-row items-center justify-between gap-7 mt-6">
               <div className="flex gap-3">
                  <div className="h-[45px] w-[45px] lg:w-[55px] bg-orange-400 rounded-full"></div>
                  <div className="">
                    <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9]'>Tel: 877-67-88-99 <br />E-Mail: shop@store.com</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-[45px] w-[45px] lg:w-[55px] bg-[#1be982] rounded-full"></div>
                  <div className="">
                    <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9]'>Tel: 877-67-88-99 <br />E-Mail: shop@store.com</p>
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0">
             <h1 className=' text-2xl lg:text-4xl text-center lg:text-left text-headingsText '>Get In Touch</h1>
             <p className='font-semibold text-[16px] leading-[25.6px] text-[#8a8fb9] my-8 lg:w-[65%] 2xl:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
             </div>

          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="">

              <div className="px-4 lg:px-0 lg:w-[450px] 2xl:w-[534px]">
                <form action="">
                  <div className="flex items-center justify-between gap-7">
                    <input type="text" placeholder="Your Name *" className="p-2 border-[1px] w-full" />
                    <input type="text" placeholder=" Your Email*" className="p-2 border-[1px] w-full" />
                  </div>

                  <input type="text" placeholder="Subject*" className="p-2 border-[1px] w-full mt-7" />


                  <textarea rows={5} placeholder="Type Yor Message" className="border-[1px] p-4 my-10 w-full" />
                  <p className="font-medium text-xs text-[#8a85b9] my-2 ">Save my name, email, and website in this browser for the next time I comment.</p>

                  <button className="bg-secondary text-center text-white w-[45%] lg:w-1/3 text-[17.98px] leading-[21.07px] my-6 p-2">Send Mail</button>

                </form>
              </div>
            </div>

            <div className=" ">
              <Image src={'/contact.png'} alt='contactImg' height={692} width={723} className='object-cover h-auto w-full lg:h-[500px] lg:w-[450px] 2xl:h-[692px] 2xl:w-[683px] ' />
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default contact
