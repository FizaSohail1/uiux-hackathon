import React from 'react'
import HeroSection from '../components/Hero/page';
import { IoMdCheckbox } from "react-icons/io";


function demoPage() {
  return (
    <div>

      <HeroSection name={'Hekto Demo'} />

      <div className='my-16 md:mx-5 lg:mx-[200px] 2xl:mx-default-margin'>
        <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold'>Heckto Demo</h1>
          <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left '> Cart/ Information/ Checkout/ Payment</p>
        </div>
         
         <div className="flex justify-center">
  <div className="h-auto w-full lg:h-[920px] md:w-[600px] 2xl:w-[770px] bg-[#f8f8fd] mt-16 rounded-[2px] py-5 px-2 lg:px-3 mx-auto lg:mx-0">
    <form className="w-[290px] lg:h-[791px] md:w-[570px] 2xl:w-[709px] rounded-[2px]">
      <div className="block lg:flex justify-between items-center">
        <h1 className="text-lg text-headingsText font-semibold">Contact Information</h1>
        <p className="text-[#c1cbe1] text-xs lg:text-sm font-medium">
          Already have an account? Log In
        </p>
      </div>

      <div className="relative my-5">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-5 lg:mt-10"
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-5 font-semibold text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          Email or mobile phone number
        </label>
      </div>

      <div className="mt-10">
        <p className="text-gray-500 font-medium text-xs flex items-center gap-2">
          <span className="text-green-600">
            <IoMdCheckbox />
          </span>
          Keep me up to date on news and exclusive offers
        </p>
      </div>

      <h1 className="text-lg mt-7 lg:mt-16 text-headingsText font-semibold">
        Shipping Address
      </h1>

      <div className="flex space-x-3 lg:space-x-8">
        <div className="relative my-5 w-1/2">
          <input
            type="text"
            id="first-name"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
          <label
            htmlFor="first-name"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            First name
          </label>
        </div>

        <div className="relative my-5 w-1/2">
          <input
            type="text"
            id="last-name"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
          <label
            htmlFor="last-name"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Last name (optional)
          </label>
        </div>
      </div>

      <div className="relative my-5">
        <input
          type="text"
          id="address"
          placeholder=" "
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
        <label
          htmlFor="address"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          Address
        </label>
      </div>

      <div className="relative my-5">
        <input
          type="text"
          id="apartment"
          placeholder=" "
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
        <label
          htmlFor="apartment"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          Apartment, suite, etc. (optional)
        </label>
      </div>

      <div className="relative my-5">
        <input
          type="text"
          id="city"
          placeholder=" "
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
        <label
          htmlFor="city"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          City
        </label>
      </div>

      <div className="flex space-x-8">
        <div className="relative my-5 w-1/2">
          <input
            type="text"
            id="country"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
          <label
            htmlFor="country"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Country
          </label>
        </div>

        <div className="relative my-5 w-1/2">
          <input
            type="text"
            id="postal-code"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
          <label
            htmlFor="postal-code"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Postal Code
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-secondary text-white py-2 px-4 mt-7 lg:mt-16"
      >
        Proceed to Checkout
      </button>
    </form>
  </div>
</div>
      </div>
    </div>
  )
}

export default demoPage
