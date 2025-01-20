import React from 'react'
import Image from 'next/image';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from 'react-icons/fa6';
import { TiThLargeOutline } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import Link from 'next/link';
import allProducts from '../components/fetchData/page';


async function Products() {
  const { allProduct } = await allProducts()

  return (
    <div>
      <main className='bg-maingray w-full h-[266px] flex items-center'>
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
          <h1 className="text-headingsText text-[36px] leading-[42.19px] text-center lg:text-left">Shop Grid Default</h1>
          <p className="font-medium text-[16px] leading-[19.2px] text-center lg:text-left text-black">Home. Phones. <span className='text-secondary'>Shop Grid Default</span></p>
        </div>
      </main>

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin block space-y-3 lg:flex lg:items-center lg:justify-between">
        <div className="">
          <h1 className='text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold'>Ecommerce Acceories & Fashion item </h1>
          <p className='font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left'>About 9,620 results (0.62 seconds)</p>
        </div>
        <div className=" block md:flex items-center justify-between gap-2 mx-4 md:mx-0 ">
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E]'>Pre-Pages:</p>
            <div className="h-[23px] w-[45px] 2xl:h-[25px] 2xl:w-[55px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
          <div className="flex gap-7 md:gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] '>Sort By:</p>
            <div className="h-[25px] w-[75px] 2xl:h-[28px] 2xl:w-[96px] border-[#E7E6EF] border-[1px] border-solid px-1">
              <p className="font-normal text-[9px] 2xl:text-[12px] leading-[18px] text-[#3F509E] flex items-center">Best Match
                <span><FaAngleDown /></span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <p className='font-normal text-[16px] leading-[19.2px] text-[#3F509E] flex items-center gap-1'>view:
              <span><TiThList /> </span>
              <span>< TiThLargeOutline /></span>
            </p>
            <div className="h-[27px] w-[110px] 2xl:h-[30px] 2xl:w-[162px] border-[#E7E6EF] border-[1px] border-solid"></div>
          </div>
        </div>
      </div>


      <section className="lg:mb-14">
        <div className=" lg:mx-[170px] 2xl:mx-default-margin mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
            {allProduct.map((product, i) => (
              <div
                key={i}
                className="bg-white transition h-[380px] w-[270px] lg:h-[361px] md:my-4 mx-auto lg:mx-0  ">
                <div className="h-[250px] w-[240px] lg:h-[236px] lg::w-[270px] bg-[#F6F7FB] flex items-center">

                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    height={178}
                    width={178}
                    className={`h-full w-full object-contain mx-auto `}
                  />
                </div>
                <div className="absolute top-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <FiHeart className="w-6 h-6 text-gray-700 group-hover:text-white" />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <FiShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-white" />
                  </div>
                </div>


                <div className="p-4 md:text-center">
                  <Link href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="flex items-center gap-2 justify-center my-2">
                    <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                    <span>< FaCircle className='text-[#EC42A2] text-xs' /></span>
                    <span>< FaCircle className='text-[#3F509E] text-xs' /></span>
                  </p>
                  <p className="text-secondary font-bold mt-2 text-center">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  )
}

export default Products
