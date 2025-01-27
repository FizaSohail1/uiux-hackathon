'use client'
import React, { useState } from 'react'
import HeroSection from '../components/Hero/page';
import { postReq } from '@/data/shipmentApi';
import ShipmentResponseViewer from '../components/shipmentResponse/shipmentResponseViewer';
import Link from 'next/link';


function ShipmentInfo() {

  const [carrierId, setCarrierId] = useState('se-1755050')
  const [serviceCode, setServiceCode] = useState('usps_priority_mail')

  const [shipToName, setShipToName] = useState('')
  const [shipToPhone, setShipToPhone] = useState('')
  const [shipToAddress, setShipToAddress] = useState('')
  const [shipToCity, setShipToCity] = useState('')
  const [shipToEmail, setShipToEmail] = useState('')
  const [shipToPostalCode, setShipToPostalCode] = useState('')
  const [shipToCountryCode, setShipToCountryCode] = useState('PK')
  const [shipToResidential, setShipToResidential] = useState(true)

  const [shipmentResponse, setShipmentResponse] = useState(null)

  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault()
    const submitData = {
      to_name: shipToName,
  to_phone: shipToPhone,
  to_address: shipToAddress,
  to_city: shipToCity,
  to_email: shipToEmail,
  to_country: shipToCountryCode,
  to_postal_code: shipToPostalCode,
    }
    const data = await postReq(submitData)

    setShipmentResponse(data)
  }


  return (
    <div>

      <HeroSection name={'Hekto Shipment'} />

      <div className='my-16 md:mx-5 lg:mx-[200px] 2xl:mx-default-margin'>
        <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold 2xl:text-3xl'>Heckto Shipment</h1>
          <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left 2xl:text-2xl'> Cart/ Information/ Checkout/ Payment</p>
        </div>

        <div className="flex justify-center">

          <form onSubmit={handleSubmit}
            className="w-full max-w-[900px] lg:max-w-[700px] mx-auto bg-slate-100  p-5 lg:p-10 rounded-md shadow-md lg:my-16"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h1 className="text-lg lg:text-2xl text-gray-800 font-semibold">
                Contact Information
              </h1>
              <p className="text-gray-500 text-sm lg:text-base mt-2 lg:mt-0">
                Already have an account?
                <Link href="/login" className="text-blue-600 underline">
                  Log In
                </Link>
              </p>
            </div>

            <div className="relative mt-8">
              <label
                htmlFor="email"
                className=" left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Email or mobile phone number
              </label>
              <input
                type="email"
                id="email"
                value={shipToEmail}
                onChange={(e) => setShipToEmail(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
              />
            </div>

            <div className="mt-6 flex items-center gap-3">
              <input
                type="checkbox"
                id="updates"
                className="w-4 h-4 bg-green-600"
              />
              <label
                htmlFor="updates"
                className="text-sm lg:text-base text-gray-600 font-medium"
              >
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <h2 className="text-lg lg:text-2xl text-gray-800 font-semibold mt-8">
              Shipping Address
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  value={shipToName}
                  onChange={(e) => setShipToName(e.target.value)}
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="phone-no"
                  className="left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone-no"
                  value={shipToPhone}
                  onChange={(e) => setShipToPhone(e.target.value)}
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
              </div>
            </div>

            <div className="relative mt-6">
              <label
                htmlFor="address"
                className=" left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={shipToAddress}
                onChange={(e) => setShipToAddress(e.target.value)}
                className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
              />
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  htmlFor="city"
                  className="left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  value={shipToCity}
                  onChange={(e) => setShipToCity(e.target.value)}
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="postal-code"
                  className="left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal-code"
                  value={shipToPostalCode}
                  onChange={(e) => setShipToPostalCode(e.target.value)}
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1  gap-6">

            <div className="relative my-5 w-1/2">
                <label
                  htmlFor="country"
                  className=" left-2 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={shipToCountryCode}
                  onChange={(e) => setShipToCountryCode(e.target.value)}
                  className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                />
              </div>

            </div>

            <div className="mt-6 flex flex-col items-center md:flex-row md:justify-between">
              <button
                type="submit"
                className="bg-secondary md:w-[30%]  hover:bg-pink-600 text-white text-sm lg:text-base py-3 px-6 rounded-md shadow-md transition-all"
              >
                Confirm Order
              </button>
              {shipmentResponse && (
                <ShipmentResponseViewer
                  data={shipmentResponse}/>
              )}
              
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ShipmentInfo


