import React from 'react'
import HeroSection from '../components/Hero/page';
import Image from 'next/image';

function login() {
  return (
    <div>
       <HeroSection name={'My Account'} />
       <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin flex justify-center ">
        <div className="w-[270px] h-auto lg:w-[544px] lg:h-[474px] items-center  justify-center bg-white shadow-sm p-2 lg:p-4">
          <h1 className='text-[32px] leading-[37.5px] text-2xl text-center'>Login</h1>
          <p className='text-[17px] font-normal leading-[20px] text-center text-[#8d92a7]'>Please login using account detail bellow.</p>
          <div className=" my-8 space-y-4">
            <input type="text" 
            placeholder='Email Address' 
            className='w-full px-2 py-3 border-[1px] bg-white' />

            <input  type="text" 
            placeholder='Email Address' 
            className='w-full px-2 py-3 border-[1px] bg-white' />

          <p className='text-[17px] font-normal leading-[20px] text-center text-[#8d92a7]'>Forgot your password?</p>

          </div>

          <button className='w-full bg-secondary py-2 font-bold text-white text-center text-[17px] leading-[20px]'>Sign In</button>

          <p className='text-[17px] font-normal leading-[20px] text-center text-[#8d92a7] my-3'>Dont have an Account?Create account</p>




        </div>

       </div>

       <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20 ">
   <Image src={'/logos.png'} alt="logos" height={93} width={904} className=" h-full w-full object-cover" />
   </div>
      
    </div>
  )
}

export default login
