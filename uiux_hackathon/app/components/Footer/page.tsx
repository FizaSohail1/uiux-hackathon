// import React from 'react'

// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';


// function Footer() {
//   return (
//     <div>
//       <footer className="text-gray-600 body-font bg-maingray">
//   <div className=" py-14 lg:mx-[200px] 2xl:mx-default-margin flex  lg:items-start md:flex-row  justify-between flex-col">
//     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//         <span className="ml-3 text-[38px] leading-[44px] text-black">Hekto</span>
//       </a>
//      <div className="flex">
//      <input type="text" placeholder='Enter Email Address' className= " bg-white w-[377px] h-12 rounded-[3px] "/>
//      <button className='bg-secondary text-white h-[39px] w-[139px] '>Sign Up</button>
//      </div>
//       <p className= "mt-2 text-sm text-[#8A8FB9] " >Contact Info</p>
//       <p className= " mt-2 2xl:mt4 text-sm text-[#8A8FB9] ">17 Princess Road, London, Greater London NW1 8JR, UK</p>
//     </div>
//     <div className="flex-row flex  md:mt-0 mt-4 md:text-left text-center">
//       <div className=" px-4">
//         <h2 className= " text-black  text-[22px] leading-[25.78px] mb-3 ">CATEGORIES</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Laptops & Computers</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Camera & Photography</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9]">Smart Phones & TAblets</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Video Games & Console</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">WaterProof HeadPhones</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2  className= " text-black  text-[22px] leading-[25.78px] mb-3 ">Customer Care</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">My Account</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Discount</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Returns</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Order History</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Order Tracking</a>
//           </li>
//         </nav>
//       </div>
//       <div className=" px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Pages</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Blog</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Browse the Shop</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Category</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Pre-built Pages</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">Visual Composer Elements</a>
//           </li>
//           <li>
//             <a className= " mt-2 text-sm text-[#8A8FB9] ">WooCommerce Pages</a>
//           </li>
//         </nav>
//       </div>
 
//     </div>
//   </div>
//   <div className="bg-gray-100">
//     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//       <p className="text-gray-500 text-sm text-center sm:text-left">© Alright Reserved</p>
//       <div className='flex gap-4'>
//         <FaFacebook className='bg-headingsText text-white text-md rounded-full'/>
//         <FaInstagram className='bg-headingsText text-white text-md rounded-full'/>
//         <FaTwitter className='bg-headingsText text-white text-md rounded-full'/>
//         </div>   
//     </div>
//   </div>
// </footer>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-maingray mt-10">
        <div className=" px-6 lg:mx-[200px] 2xl:mx-default-margin flex flex-wrap lg:items-start justify-between">

          <div className="w-full lg:w-1/3 flex-shrink-0 text-center lg:text-left mb-6 lg:mb-0">
            <a className="flex title-font font-medium items-center justify-center lg:justify-start text-gray-900 mb-4">
              <span className="ml-3 text-[38px] leading-[44px] text-black">Hekto</span>
            </a>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="bg-white w-full lg:w-[70%] h-12 rounded-[3px] px-4"
              />
              <button className="bg-secondary text-white w-full lg:w-[30%] h-12 rounded-[3px]">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-sm text-[#8A8FB9]">Contact Info</p>
            <p className="mt-2 text-sm text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>

          <div className="w-full lg:w-2/3 flex flex-wrap justify-between">

            <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
              <h2 className="text-black text-[22px] leading-[25.78px] mb-3">CATEGORIES</h2>
              <nav className="list-none">
                <li><a className="text-sm text-[#8A8FB9]">Laptops & Computers</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Camera & Photography</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Smart Phones & Tablets</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Video Games & Console</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Waterproof Headphones</a></li>
              </nav>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
              <h2 className="text-black text-[22px] leading-[25.78px] mb-3">CUSTOMER CARE</h2>
              <nav className="list-none">
                <li><a className="text-sm text-[#8A8FB9]">My Account</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Discount</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Returns</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Order History</a></li>
                <li><a className="text-sm text-[#8A8FB9]">Order Tracking</a></li>
              </nav>
            </div>

            <div className="w-full md:w-1/3 px-4">
              <h2 className="text-black text-[22px] leading-[25.78px] mb-3">PAGES</h2>
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

        {/* Footer Bottom */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">© All Rights Reserved</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <FaFacebook className="bg-headingsText text-white text-lg rounded-full p-1" />
              <FaInstagram className="bg-headingsText text-white text-lg rounded-full p-1" />
              <FaTwitter className="bg-headingsText text-white text-lg rounded-full p-1" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
