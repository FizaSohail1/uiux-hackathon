import React from "react";
import HeroSection from "../components/Hero/page";
import Image from "next/image";

import { FaPlus, FaMinus, FaCircle } from "react-icons/fa";

function shoppingCart() {
  return (
    <div>

      <HeroSection name={"Shopping Cart"} />

      <div className="my-10 md:my-20 2xl:my-32">
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[30px]">
            <div className="">
              <div className="my-10 md:my-14 2xl:my-20">
                <div className="flex justify-between items-center mx-4">
                  <h2 className="text-base lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] lg:mx-8">
                    Product
                  </h2>
                  <h2 className="text-base lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] lg:mx-14">
                    Price
                  </h2>

                  <h2 className="text-base lg:text-[20px] lg:leading-[23.44px] text-[#1D317B]">
                    Quantity
                  </h2>

                  <h2 className="text-base lg:text-[20px] lg:leading-[23.44px] text-[#1D317B]">
                    Total
                  </h2>
                </div>
                <div className="flex items-center justify-between gap-4 my-12  ">
                  <div className="flex items-center gap-2">
                    <div className="">
                      <Image
                        src={"/cart-1.jpg"}
                        alt="image"
                        height={83}
                        width={87}
                        className="object-cover h-[83px] w-[87px] radius-[3px] "
                      />
                    </div>
                    <div className=" md:mr-4">
                      <h3 className="text-sm text-black">Ut diam consequat</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                  </div>

                  <div className="md:mx-5">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>

                  <div className="flex items-center border border-gray-300  bg-gray-50 w-[51px] h-[15px] mx-8">
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700 bg-gray-200">
                      <FaMinus />
                    </button>
                    <div className="w-12 text-center text-xs ">1</div>
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700">
                      <FaPlus />
                    </button>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">£219.00</p>
                  </div>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/cart-2.jpg"}
                      alt="image"
                      height={83}
                      width={87}
                      className="object-cover h-[83px] w-[87px] radius-[3px]"
                    />
                    <div className="">
                      <h3 className="text-sm text-black">
                        Vel faucibus posuere
                      </h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>

                  <div className="flex items-center border border-gray-300  bg-gray-50 w-[51px] h-[15px]">
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700 bg-gray-200">
                      <FaMinus />
                    </button>
                    <div className="w-12 text-center text-xs ">1</div>
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700">
                      <FaPlus />
                    </button>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">£219.00</p>
                  </div>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/cart-3.jpg"}
                      alt="image"
                      height={83}
                      width={87}
                      className="object-cover h-[83px] w-[87px] radius-[3px]"
                    />
                    <div className="">
                      <h3 className="text-sm text-black">
                        Ac vitae vestibulum
                      </h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>

                  <div className="flex items-center border border-gray-300  bg-gray-50 w-[51px] h-[15px]">
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700 bg-gray-200">
                      <FaMinus />
                    </button>
                    <div className="w-12 text-center text-xs ">1</div>
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700">
                      <FaPlus />
                    </button>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">£219.00</p>
                  </div>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/cart-4.jpg"}
                      alt="image"
                      height={83}
                      width={87}
                      className="object-cover h-[83px] w-[87px] radius-[3px]"
                    />
                    <div className="">
                      <h3 className="text-sm text-black">Elit massa diam</h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>

                  <div className="flex items-center border border-gray-300  bg-gray-50 w-[51px] h-[15px]">
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700 bg-gray-200">
                      <FaMinus />
                    </button>
                    <div className="w-12 text-center text-xs ">1</div>
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700">
                      <FaPlus />
                    </button>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">£219.00</p>
                  </div>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/cart-3.jpg"}
                      alt="image"
                      height={83}
                      width={87}
                      className="object-cover h-[83px] w-[87px] radius-[3px]"
                    />
                    <div className="">
                      <h3 className="text-sm text-black">
                        Ac vitae vestibulum
                      </h3>
                      <p className="flex text-xs text-[#A1A8C1]">
                        color:<span className="text-sm">Brown</span>
                      </p>
                      <p className="flex text-xs text-[#A1A8C1]">
                        Size:<span className="text-sm">XL</span>
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">$32.00</p>
                  </div>

                  <div className="flex items-center border border-gray-300  bg-gray-50 w-[51px] h-[15px]">
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700 bg-gray-200">
                      <FaMinus />
                    </button>
                    <div className="w-12 text-center text-xs ">1</div>
                    <button className="flex items-center justify-center w-4 h-full text-base text-gray-700">
                      <FaPlus />
                    </button>
                  </div>

                  <div className="">
                    <p className="text-sm text-[#15245E]">£219.00</p>
                  </div>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
              </div>
              <div className="flex justify-between mt-6">
              <button className="bg-secondary text-white py-2 px-4 rounded">
                Continue Shopping
              </button>
              <button className="bg-secondary text-white py-2 px-4 rounded">
                Checkout
              </button>
            </div>


            </div>

            <div>
              <div>
                <h2 className=" text-lg text-center font-semibold lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] my-10">
                  Cart Total
                </h2>
              </div>

              <div className="h-[260px] w-[270px] md:h-[264px] md:w-[371px] mx-4 md:mx-0 p-4 bg-maingray">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg text-[#15245E]">
                    Subtotals:
                  </h4>
                  <h4 className="font-semibold text-base text-[#15245E]">
                    £219.00
                  </h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <div className="flex items-center justify-between mt-4">
                  <h4 className="font-semibold text-lg text-[#15245E]">
                    Totals:
                  </h4>
                  <h4 className="font-semibold text-base text-[#15245E]">
                    £219.00
                  </h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />

                <p className="font-normal text-xs flex gap-2 my-3">
                  <span>
                    <FaCircle className="text-[#19d16f]" />
                  </span>{" "}
                  Shipping & taxes calculated at checkout
                </p>

                <button className="w-full h-[40px] text-center font-bold text-sm bg-[#19d16f] py-2 my-3 text-white">
                  Proceed To Checkout
                </button>
              </div>

              <div>
                <h2 className=" text-lg text-center font-semibold lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] my-5">
                  Calculate Shopping
                </h2>
              </div>

              <div className="h-[260px] w-[270px] md:h-[264px] md:w-[371px] mx-4 md:mx-0 p-4 bg-maingray space-y-3">
                <div className="">
                  <h4 className=" text-sm text-[#c5cbe3] mb-2">Bangladesh</h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />

                <div className="">
                  <h4 className=" text-sm text-[#c5cbe3] mb-2">
                    Mirpur Dhaka - 1200
                  </h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2 " />
                <div className="">
                  <h4 className=" text-sm text-[#c5cbe3] mb-2">Postal Code</h4>
                </div>
                <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
                <button className="w-[70%] md:w-1/2 h-[41px] text-center font-bold text-base bg-secondary py-2 my-3 text-white">
                  Calculate Shiping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default shoppingCart;
