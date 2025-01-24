'use client'
import React, { useState } from 'react'
import HeroSection from '../components/Hero/page';
import { IoMdCheckbox } from "react-icons/io";
import { postReq } from '@/api/shipmentApi';
import ShipmentResponseViewer from '../components/shipmentResponse/shipmentResponseViewer';
import Link from 'next/link';
import router from 'next/router';


function ShipmentInfo() {

  const [carrierId, setCarrierId] = useState('se-1755050')
  const [serviceCode, setServiceCode] = useState('usps_priority_mail')

  const [shipToName, setShipToName] = useState('')
  const [shipToPhone, setShipToPhone] = useState('')
  const [shipToAddress, setShipToAddress] = useState('')
  const [shipToCity, setShipToCity] = useState('')
  const [shipToEmail, setShipToEmail] = useState('')
  const [shipToPostalCode, setShipToPostalCode] = useState('')
  const [shipToCountryCode, setShipToCountryCode] = useState('US')
  const [shipToResidential, setShipToResidential] = useState('')

  const [shipmentResponse, setShipmentResponse] = useState(null)

 async function handleSubmit(e:React.FormEvent){

  e.preventDefault()
      const submitData = {
        to_name: shipToName,
      to_phone: shipToPhone,
      to_address: shipToAddress,
      to_city: shipToCity,
      to_email:shipToEmail
      }
     const data = await postReq(submitData)

     setShipmentResponse(data)
  }
 
  
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
  <form onSubmit={handleSubmit} className="w-[290px] lg:h-[791px] md:w-[570px] 2xl:w-[709px] rounded-[2px]">
      <div className="block lg:flex justify-between items-center">
        <h1 className="text-lg text-headingsText font-semibold">Contact Information</h1>
        <p className="text-[#c1cbe1] text-xs lg:text-sm font-medium">
          Already have an account? Log In
        </p>
      </div>

      <div className="relative my-5">
      <label
          htmlFor="email"
          className="absolute left-0 top-5 font-semibold text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          Email or mobile phone number
        </label>
        <input
          type="email"
          id="email"
          value={shipToEmail} onChange={(e) => setShipToEmail(e.target.value)} autoComplete='off'
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-5 lg:mt-10"
        />
      </div>

      <div className="mt-10">
        <p className="text-gray-500 font-medium text-xs flex items-center gap-2">
          <span className="text-green-600">
           <IoMdCheckbox/>
          </span>
          Keep me up to date on news and exclusive offers
        </p>
      </div>

      <h1 className="text-lg mt-7 lg:mt-16 text-headingsText font-semibold">
        Shipping Address
      </h1>

      <div className="flex space-x-3 lg:space-x-8">
        <div className="relative my-5 w-1/2">

        <label
            htmlFor="number"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Full name
          </label>
          <input
            type="text"
            id="first-name"
            value={shipToName} onChange={(e) => setShipToName(e.target.value)} autoComplete='off'
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
        </div>

        <div className="relative my-5 w-1/2">
        <label
            htmlFor="phone-no"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Phone number
          </label>
          <input
            type="number"
            id="number"
            value={shipToPhone} onChange={(e) => setShipToPhone(e.target.value)} 
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
        </div>
      </div>

      <div className="relative my-5">
      <label
          htmlFor="address"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          value={shipToAddress} onChange={(e) => setShipToAddress(e.target.value)} autoComplete='off'
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
      </div>

      <div className="relative my-5">
      <label
          htmlFor="apartment"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
         Is Residential
        </label>
        <input
          type="text"
          id="apartment"
          value={shipToResidential} onChange={(e) => setShipToResidential(e.target.value)} autoComplete='off'
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
      </div>

      <div className="relative my-5">
      <label
          htmlFor="city"
          className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
        >
          City
        </label>
        <input
          type="text"
          id="city"
         value={shipToCity} onChange={(e) => setShipToCity(e.target.value)} autoComplete='off'
          className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
        />
      </div>

      <div className="flex space-x-8">
        <div className="relative my-5 w-1/2">
        <label
            htmlFor="country"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            value={shipToCountryCode} onChange={(e) => setShipToCountryCode(e.target.value)} autoComplete='off'
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
        </div>

        <div className="relative my-5 w-1/2">
        <label
            htmlFor="postal-code"
            className="absolute left-0 top-5 font-medium text-sm text-[#c1cbe1] peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs lg:peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-sm"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postal-code"
            value={shipToPostalCode} onChange={(e) => setShipToPostalCode(e.target.value)} autoComplete='off'
            className="peer w-full border-b-2 border-gray-300 bg-transparent text-sm focus:outline-none mt-10"
          />
        </div>
      </div>

   <div className='flex flex-col md:flex-row justify-between items-center'>
   <button
        type="submit"
        className="bg-secondary w-[30%] text-white py-2 px-4 mt-7 lg:mt-16"
      >
        Confirm Order
      </button>

      {shipmentResponse && <ShipmentResponseViewer data={shipmentResponse} />}
   </div>
    </form>
  </div>
</div>
      </div>
    </div>
  )
}

export default ShipmentInfo
