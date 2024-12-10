
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
      <footer className=" bg-maingray h-auto lg:[330px] 2xl:h-[479px] w-full flex items-center py-4">
        <div className="mx-4 lg:mx-[200px] 2xl:mx-default-margin flex flex-col md:flex-row items-center lg:gap-[50px] lg:justify-between">

          <div className="text-center lg:text-left mb-6 lg:mb-0 ">
            <h1 className="flex  font-medium items-center justify-center lg:justify-start mb-4 text-[38px] leading-[44px] text-black">
             Hekto
            </h1>
            <div className="flex ">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="bg-white w-[180px] 2xl:w-[377px] h-12 rounded-[3px] px-2"
              />
              <button className="bg-secondary text-white w-auto md:w-1/3 2xl::w-[135px] h-12 rounded-[3px] ">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-sm text-[#8A8FB9]">Contact Info</p>
            <p className="mt-2 text-sm text-[#8A8FB9] w-[90px] md:w-full">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          <div className=" flex flex-col md:flex-row lg:justify-between gap-[25px]">

            <div className=" mb-6 md:mb-0 ">
              <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">CATEGORIES</h2>
              <nav className="list-none">
                <li><a className="text-sm text-[#8A8FB9]">Laptops & Computers</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Camera & Photography</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Smart Phones & Tablets</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Video Games & Console</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Waterproof Headphones</a></li>
              </nav>
            </div>

            <div className=" mb-6 md:mb-0 ">
              <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">CUSTOMER CARE</h2>
              <nav className="list-none justify-center">
                <li><a className="text-sm text-[#8A8FB9]">My Account</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Discount</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Returns</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Order History</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Order Tracking</a></li>
              </nav>
            </div>

            <div className=" ">
              <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">PAGES</h2>
              <nav className="list-none">
                <li><a className="text-sm text-[#8A8FB9]">Blog</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Browse the Shop</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Category</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Pre-built Pages</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Visual Composer Elements</a></li>
                <li><a className="text-sm text-[#8A8FB9]">WooCommerce Pages</a></li>
              </nav>
            </div>
          </div>
        </div>

      </footer>
      <div className="bg-gray-300">
          <div className="container mx-4 lg:mx-[200px] 2xl:mx-default-margin  py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">© All Rights Reserved</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <FaFacebook className="bg-headingsText text-white text-lg rounded-full p-1" />
              <FaInstagram className="bg-headingsText text-white text-lg rounded-full p-1" />
              <FaTwitter className="bg-headingsText text-white text-lg rounded-full p-1" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
