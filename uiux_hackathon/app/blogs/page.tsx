import React from "react";
import HeroSection from "../components/Hero/page";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

function blog() {
  return (
    <div>
      <HeroSection name={"Blog Page"} />

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
        <div className="flex flex-col lg:flex-row justify-center lg:justiify-start  gap-4">
          <div className="my-3 lg:my-6">
            <div className="px-4 lg:px-0">
              <div className="mx-auto flex justify-center lg:mx-0 lg:justify-start">
                <Image
                  src={"/blogs-1.jpg"}
                  alt="blog1"
                  height={453}
                  width={870}
                  className="object-cover h-auto w-full lg:h-[350px] lg:w-[650px] 2xl:h-[453px] 2xl:w-[870px] rounded-md"
                />
              </div>

              <div className="flex items-center flex-row gap-5 my-3 lg:my-6">
                <div className="flex gap-1 lg:gap-3 items-center ">
                  <FaPenNib className="text-secondary text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText font-normal text-sm">
                      Surf Auxion
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 lg:gap-3 items-center  lg:mt-0">
                  <FaCalendarAlt className="text-yellow-500 text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText text-xs lg:text-sm font-semibold">
                      Aug 09 2020
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-3 text-left">
                <h1 className="font-bold text-xl lg:text-2xl 2xl:text-[30px] 2xl:leading-[30px] text-headingsText">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h1>
                <p className="mt-4 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[80%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
              </div>

              <Link href={`blogs/1`}>
                <p className="text-headingsText font-semibold text-left  text-lg my-3 lg:mt-5">
                  Read More <span className="text-red-600 text-base">*</span>
                </p>
              </Link>
            </div>

            <div className="px-4 lg:px-0 my-10">
              <div className="mx-auto flex justify-center lg:mx-0 lg:justify-start">
                <Image
                  src={"/blogs-2.jpg"}
                  alt="blog1"
                  height={453}
                  width={870}
                  className="object-cover h-auto w-full lg:h-[350px] lg:w-[650px] 2xl:h-[453px] 2xl:w-[870px] rounded-md"
                />
              </div>

              <div className="flex items-center flex-row gap-5 my-3 lg:my-6">
                <div className="flex gap-1 lg:gap-3 items-center ">
                  <FaPenNib className="text-secondary text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText font-normal text-sm">
                      Surf Auxion
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 lg:gap-3 items-center  lg:mt-0">
                  <FaCalendarAlt className="text-yellow-500 text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText text-xs lg:text-sm font-semibold">
                      Aug 09 2020
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-3 text-left">
                <h1 className="font-bold text-xl lg:text-2xl 2xl:text-[30px] 2xl:leading-[30px] text-headingsText">
                  Aenean vitae in aliquam ultrices lectus. Etiam.
                </h1>
                <p className="mt-4 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[80%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
              </div>

              <Link href={`blogs/2`}>
                <p className="text-headingsText font-semibold text-left  text-lg my-3 lg:mt-5">
                  Read More <span className="text-red-600 text-base">*</span>
                </p>
              </Link>
            </div>

            <div className="px-4 lg:px-0">
              <div className="mx-auto flex justify-center lg:mx-0 lg:justify-start">
                <Image
                  src={"/blogs-3.jpg"}
                  alt="blog1"
                  height={453}
                  width={870}
                  className="object-cover h-auto w-full lg:h-[350px] lg:w-[650px] 2xl:h-[453px] 2xl:w-[870px] rounded-md"
                />
              </div>

              <div className="flex items-center flex-row gap-5 my-3 lg:my-6">
                <div className="flex gap-1 lg:gap-3 items-center ">
                  <FaPenNib className="text-secondary text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText font-normal text-sm">
                      Surf Auxion
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 lg:gap-3 items-center  lg:mt-0">
                  <FaCalendarAlt className="text-yellow-500 text-sm lg:text-lg" />
                  <div className="h-[23px] w-[100px] lg:w-[160px] text-center bg-pink-100">
                    <p className="text-headingsText text-xs lg:text-sm font-semibold">
                      Aug 09 2020
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-3 text-left">
                <h1 className="font-bold text-xl lg:text-2xl 2xl:text-[30px] 2xl:leading-[30px] text-headingsText">
                  Sit nam congue feugiat nisl, mauris amet nisi.
                </h1>
                <p className="mt-4 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[80%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
              </div>

              <Link href={`blogs/3`}>
                <p className="text-headingsText font-semibold text-left  text-lg my-3 lg:mt-5">
                  Read More <span className="text-red-600 text-base">*</span>
                </p>
              </Link>
            </div>
          </div>

          <hr className="mx-4 lg:mx-0 lg:hidden" />

          <div className="my-3 lg:my-6 ">
            <div className="hidden lg:block">
              <h2 className="text-headingsText text-xl 2xl:text-2xl font-bold">
                Search
              </h2>
              <input type="text" className=" px-2 my-3 border-[1px]" />
            </div>

            <div className=" hidden lg:block">
              <h2 className="text-headingsText my-3 lg:my-6 text-xl 2xl:text-2xl font-bold">
                Categoriese
              </h2>

              <div className="space-y-2">
                <div className="flex flex-row gap-[15px] ">
                  <div className="bg-secondary py-2 px-1 text-center font-normal text-sm ">
                    Hobbies (14)
                  </div>
                  <div className=" py-1 px-1 text-center font-normal text-sm ">
                    Women (21)
                  </div>
                </div>

                <div className="flex flex-row gap-[15px] ">
                  <div className="py-2 px-1 text-center font-normal text-sm ">
                    Women (21)
                  </div>
                  <div className=" py-2 px-1 text-center font-normal text-sm ">
                    Women (21)
                  </div>
                </div>

                <div className="flex flex-row gap-[15px] ">
                  <div className="py-2 px-1 text-center font-normal text-sm ">
                    Women (21)
                  </div>
                  <div className=" py-2 px-1 text-center font-normal text-sm ">
                    Women (21)
                  </div>
                </div>
              </div>
            </div>

            <div className=" grid grid-rows-4 space-y-4 px-4 lg:px-0 ">
              <h2 className="text-headingsText  my-3 lg:my-6 text-xl 2xl:text-2xl font-bold">
                Related Posts
              </h2>

              <div className="flex items-center gap-2 ">
                <div className="">
                  <Image
                    src={"/blogside-1.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[51px] w-[70px]"
                  />
                </div>
                <div className="">
                  <p className="text-xs font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <div className="">
                  <Image
                    src={"/blogside-1.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[51px] w-[70px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <div className="">
                  <Image
                    src={"/blogside-1.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[51px] w-[70px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex items-center gap-2 ">
                <div className="">
                  <Image
                    src={"/blogside-1.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[51px] w-[70px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>
            </div>

            <div className=" lg:grid grid-rows-3 hidden ">
              <h2 className="text-headingsText my-3 lg:my-6 text-xl 2xl:text-2xl  font-bold">
                Sale Product
              </h2>

              <div className="flex items-center gap-2">
                <div className="">
                  <Image
                    src={"/blogside-5.jpg"}
                    alt=""
                    height={57}
                    width={71}
                    className="object-cover h-[57px] w-[71px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="">
                  <Image
                    src={"/blogside-6.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[57px] w-[71px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="">
                  <Image
                    src={"/blogside-7.jpg"}
                    alt=""
                    height={51}
                    width={70}
                    className="object-cover h-[57px] w-[71px]"
                  />
                </div>
                <div className="">
                  <p className="text-sm font-normal text-[#3f509e]">
                    It is a long established fact
                  </p>
                  <p className="text-[11px] ">Aug 09 2020</p>
                </div>
              </div>
            </div>

            <h2 className="text-headingsText my-6 text-xl 2xl:text-2xl px-4  lg:px-0 font-bold">
              Offer Product
            </h2>
            <div className="grid grid-cols-2 gap-[15px]  px-4 lg:px-0 ">
              <div className="">
                <Image
                  src={"/offerProduct-1.jpg"}
                  alt=""
                  width={126}
                  height={80}
                  className="w-full lg:w-[126px]  md:h-[150px] h-[80px] lg:h-[80px] object-cover"
                />
                <p className="font-semibold text-sm text-center text-headingsText">
                  Duis lectus
                </p>
                <p className="font-semibold text-[#8a8fb9] text-xs text-center">
                  $12.00 - $15.00
                </p>
              </div>

              <div className="">
                <Image
                  src={"/offerProduct-2.jpg"}
                  alt=""
                  width={126}
                  height={80}
                  className=" w-full lg:w-[126px]  md:h-[150px] h-[80px] lg:h-[80px] object-cover"
                />
                <p className="font-semibold text-sm text-center text-headingsText">
                  Sed placerat.
                </p>
                <p className="font-semibold text-[#8a8fb9] text-xs text-center">
                  $12.00 - $15.00
                </p>
              </div>

              <div className="">
                <Image
                  src={"/offerProduct-3.jpg"}
                  alt=""
                  width={126}
                  height={80}
                  className=" w-full lg:w-[126px] md:h-[150px] h-[80px] lg:h-[80px] object-cover"
                />
                <p className="font-semibold text-sm text-center text-headingsText">
                  Netus proin.
                </p>
                <p className="font-semibold text-[#8a8fb9] text-xs text-center">
                  $12.00 - $15.00
                </p>
              </div>

              <div className="">
                <Image
                  src={"/offerProduct-4.jpg"}
                  alt=""
                  width={126}
                  height={80}
                  className="w-full lg:w-[126px] md:h-[150px] h-[80px] lg:h-[80px] object-cover"
                />
                <p className="font-semibold text-sm text-center text-headingsText">
                  Platea in..
                </p>
                <p className="font-semibold text-[#8a8fb9] text-xs text-center">
                  $12.00 - $15.00
                </p>
              </div>
            </div>

            <h2 className="text-headingsText my-6 text-xl 2xl:text-2xl font-bold px-4 lg:px-0">
              Follow
            </h2>
            <div className="flex gap-3 items-center px-4 lg:px-0">
              <FaFacebook className="text-white bg-purple-700 p-1 rounded-full text-xl" />
              <FaInstagram className="text-white bg-pink-600 p-1 rounded-full text-xl" />
              <FaTwitter className="text-white bg-sky-400 p-1 rounded-full text-xl" />
            </div>

            <h2 className="text-headingsText my-6 text-xl 2xl:text-2xl font-bold px-4 lg:px-0">
              Tags
            </h2>
            <div className="flex gap-5 px-4 lg:px-0">
              <p className="font-normal text-sm underline decoration-solid text-headingsText">
                General
              </p>
              <p className="font-normal text-sm underline decoration-solid text-secondary">
                Atsanil
              </p>
              <p className="font-normal text-sm underline decoration-solid text-headingsText">
                Insas.
              </p>
            </div>
            <div className="flex gap-5 my-3 px-4 lg:px-0">
              <p className="font-normal text-sm underline decoration-solid text-headingsText">
                Bibsaas
              </p>
              <p className="font-normal text-sm underline decoration-solid text-headingsText">
                Nulla.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto gap-5 lg:gap-8 my-14">
          <button className="bg-secondary py-1 px-4 text-center font-semibold text-base text-white">
            1
          </button>
          <button className="border-[1px] py-1 px-3 text-center font-semibold text-base text-gray-300">
            2
          </button>
          <button className="border-[1px] py-1 px-3 text-center font-semibold text-base text-gray-300">
            3
          </button>
          <button className="border-[1px] py-1 px-3 text-center font-semibold text-base text-gray-300">
            4
          </button>
        </div>

        <div className="my-20 ">
          <Image
            src={"/logos.png"}
            alt="logos"
            height={93}
            width={904}
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default blog;
