"use client";

import React from "react";
import Image from "next/image";
import StarRating from "../DynamicStar/page";
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger,AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

interface ProductDetailsProps {
  name: string;
  price: number;
  discountPercentage: number;
  description: string;
  imagePath: string;
  category: string;
  stockLevel: number;
}

export default function ProductDetails({
  name,
  price,
  discountPercentage,
  description,
  category,
  imagePath,
  stockLevel

}: ProductDetailsProps) {
  return (

    <div>
      <main className='bg-maingray w-full h-[266px] flex items-center mx-auto'>
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
          <h1 className="text-headingsText text-[36px] leading-[42.19px] text-center lg:text-left font-semibold">Product Details</h1>
          <p className="font-medium text-[16px] leading-[19.2px] text-center lg:text-left text-black">Home. Page. <span className='text-secondary'>Product details</span></p>
        </div>
      </main>

      <div className="bg-white mx-auto md:mx-10 lg:mx-[150px] 2xl:mx-default-margin shadow-lg my-16 lg:my-32  px-3 py-2">
        <div className='flex flex-col md:flex-row mx-auto items-center '>
          <div className="space-y-3  hidden md:block ">
            <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center border-[1px]">
              <Image src={imagePath} alt={name} height={100} width={100} className={`h-full w-full object-cover mx-auto `} />
            </div>
            <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center border-[1px]">
              <Image src={imagePath} alt={name} height={100} width={100} className={`h-full w-full object-cover mx-auto `} />
            </div>
            <div className=" h-[100px] w-[100px] rounded-[3px] 2xl:h-[155px] 2xl:w-[151px] items-center border-[1px]">
              <Image src={imagePath} alt={name} height={100} width={100} className={`h-full w-full object-cover mx-auto `} />
            </div>

          </div>
          <Image
            src={imagePath}
            alt={name}
            height={307}
            width={325}
            className={`h-[387px] w-[375px] rounded-[3px]`} />

          <div className='ml-4 lg:ml-8'>
            <h1 className='text-[36px] leading-[42.19px] font sami-bold'>{name}</h1>
            <div className='flex gap-3 items-center mt-3'>
              <StarRating rating={5} />
              <div className='text-headingsText text-[14px] leading-[29px]'> ({stockLevel}) </div>
            </div>
            <p className='flex gap-2 text-headingsText text-[14px] leading-[29px] my-2'><span className="font-semibold">Price:</span>${price} <span className='text-secondary line-through'>${discountPercentage}</span></p>
            <p className='text-[16px] leading-[19px] text-[#A9ACC6] max-w-[549px]'>{description}</p>
            <Link href={`/cart?name=${name}&imagePath=${imagePath}&description=${description}&price=${price}`}>
              <AlertDialog>
      <AlertDialogTrigger asChild>
      <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg shadow-md transition-all duration-300 ease-in-out">
                Add To Cart
                <FiHeart className="text-lg" />
              </button>
      </AlertDialogTrigger >
      <AlertDialogContent className="px-5">
        <AlertDialogHeader>
          <AlertDialogTitle>Item Added to Cart!</AlertDialogTitle>
          <AlertDialogDescription>
            Your item has been successfully added to the cart. Continue shopping or proceed to checkout!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Continue Shopping</AlertDialogCancel>
          <Link href="/cart">
            <AlertDialogAction>View Cart</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
            </Link>
            <div className="flex md:flex-col lg:flex-row  gap-5 items-center mt-4 ">
              <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2'><span className="font-semibold">Category:</span> {category}</h3>
              <h3 className='text-headingsText text-[16px] leading-[18.75px] my-2 flex gap-2'><span className="font-semibold">Share:</span>

                <span className='flex gap-2'>
                  <FaFacebook className='bg-headingsText text-white text-sm rounded-full' />
                  <FaInstagram className='bg-secondary text-white text-sm rounded-full' />
                  <FaTwitter className='bg-headingsText text-white text-sm rounded-full' />
                </span></h3>

            </div>

          </div>
        </div>
      </div>

      <div className="h-auto lg:h-[549px] 2xl:h-[649px] py-3 2xl:flex 2xl:items-center  w-full bg-maingray ">
        <div className="2xl:mx-default-margin lg:mx-[200px] mx-4">
          <ul className='text-headingsText underline decoration-solid text-base md:text-lg lg:text-[24px] lg:leading-[28.13px] flex mx-auto lg:mx-0 gap-2 md:gap-5 lg:gap-[30px] my-4 lg:my-8'>
            <li>Description</li>
            <li>Additional Info</li>
            <li>Reviws</li>
            <li>Video</li>
          </ul>

          <h3 className='text-headingsText underline solid text-xl 2xl:text-[22px] 2xl:leading-[25.78px] '>Varius tempor</h3>
          <p className='text-[16px] leading-[29px] text-[#A9ACC6]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

          <h3 className='text-headingsText underline solid text-base 2xl:text-[22px] 2xl:leading-[25.78px] my-3'>More Details</h3>
          <ul>
            <li className='flex gap-2'> <FaArrowRight className='text-md' /> <p className='text-[16px] leading-[29px] text-[#A9ACC6] w-full'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight className='text-md' /> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight className='text-md' /> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
            <li className='flex gap-2'> <FaArrowRight className='text-md' /> <p className='text-[16px] leading-[29px] text-[#A9ACC6] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p></li>
          </ul>

        </div>
      </div>
    </div>
  );
}
