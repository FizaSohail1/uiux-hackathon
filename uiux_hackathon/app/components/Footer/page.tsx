
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
    <footer className="bg-maingray h-auto lg:h-[330px] 2xl:h-[479px] w-full py-4">
  <div className="mx-4 lg:mx-[200px] 2xl:mx-default-margin flex flex-col lg:flex-row items-center justify-between gap-10 lg:mt-14">

    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="font-medium text-[38px] leading-[44px] text-black mb-4">
        Hekto
      </h1>
      <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="bg-white w-[180px] 2xl:w-[377px] h-12 rounded-[3px] px-2"
        />
        <button className="bg-secondary text-white px-4 h-12 rounded-[3px]">
          Sign Up
        </button>
      </div>
      <p className="text-sm text-[#8A8FB9]">Contact Info</p>
      <p className="text-sm text-[#8A8FB9] mt-2">
        17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
    </div>

    <div className="lg:w-[70%] flex flex-wrap lg:flex-nowrap justify-between  ">
      <div>
        <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none">
          <li><a className="text-sm text-[#8A8FB9]">Laptops & Computers</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Camera & Photography</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Smart Phones & Tablets</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Video Games & Console</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Waterproof Headphones</a></li>
        </nav>
      </div>

      {/* Customer Care */}
      <div>
        <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">
          CUSTOMER CARE
        </h2>
        <nav className="list-none">
          <li><a className="text-sm text-[#8A8FB9]">My Account</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Discount</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Returns</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Order History</a></li>
          <li><a className="text-sm text-[#8A8FB9]">Order Tracking</a></li>
        </nav>
      </div>

      {/* Pages */}
      <div>
        <h2 className="text-black text-lg lg:text-[22px] lg:leading-[25.78px] mb-3">
          PAGES
        </h2>
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
          <div className=" mx-4 lg:mx-[200px] 2xl:mx-default-margin  py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
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
