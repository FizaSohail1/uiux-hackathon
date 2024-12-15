import HeroSection from "@/app/components/Hero/page";
import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import StarRating from "@/app/components/DynamicStar/page";

async function singleBlogPage({ params }) {
  const { id } = await params;
  return (
    <div>
      <HeroSection name={"Single Blog Page"} />

      <div className="my-16 lg:my-32  mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
        <div className="flex flex-col lg:flex-row justify-center lg:justiify-start  gap-4">
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
                <p className="mt-4 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[90%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                  <br /> <br className="mt-5" /> Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Velit dapibus est,
                  nunc, montes, lacus consequat integer viverra. Sit morbi etiam
                  quam rhoncus. Velit in arcu platea donec vitae ante posuere
                  malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Velit dapibus est, nunc, montes, lacus consequat integer
                  viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea
                  donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Velit dapibus est, nunc,
                </p>

                <div className="flex gap-3">
                  <p className="mt-4 border-l-secondary border-l-4 font-normal text-sm lg:text-[18px] leading-[21.9px] text-[#8a85b9] lg:w-[90%] bg-maingray p-3">
                    <i>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Commodo dictum sapien, amet, consequat. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Commodo dictum
                      sapien, amet, consequat toamk risusu”
                    </i>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-[20px] justify-center my-10">
               <div className="">
               <Image src={'/blogside-1.jpg'} alt="" height={245} width={411} className="object-cover h-[245px] w-[411px]" />
               </div>

               <div className="">
               <Image src={'/singleblog-1.jpg'} alt="" height={245} width={411} className="object-cover h-[245px] w-[331px]" />
               </div>
              </div>
 
              <p className="mt-8 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                <div className="">
                  <Image src={'/singleblog-2.jpg'} alt="" height={254} width={209} className="object-cover h-[254.7px] " />

                  <h3 className="mx-4 text-[19.68px] leading-[23.06px] my-3">Quam sed</h3>
                  <div className="flex gap-2">
                    <p className="text-headingsText text-[13.89px] leading-[16.28px]">$32.00 <span className="text-secondary ">$56.00</span></p>
                    <StarRating rating={4} />
                  </div>
                </div>

                <div className="">
                  <Image src={'/singleblog-3.jpg'} alt="" height={254} width={209} className="object-cover h-[254.7px] " />

                  <h3 className="mx-4 text-[19.68px] leading-[23.06px] my-3">Quam sed</h3>
                  <div className="flex gap-2">
                    <p className="text-headingsText text-[13.89px] leading-[16.28px]">$32.00 <span className="text-secondary ">$56.00</span></p>
                    <StarRating rating={4} />
                  </div>
                </div>

                <div className="">
                  <Image src={'/demo-4.jpg'} alt="" height={254} width={209} className="object-cover h-[254.7px] " />

                  <h3 className="mx-4 text-[19.68px] leading-[23.06px] my-3">Quam sed</h3>
                  <div className="flex gap-2">
                    <p className="text-headingsText text-[13.89px] leading-[16.28px]">$32.00 <span className="text-secondary ">$56.00</span></p>
                    <StarRating rating={4} />
                  </div>
                </div>

                <div className="">
                  <Image src={'/singleblog-4.jpg'} alt="" height={254} width={209} className="object-cover h-[254.7px] " />

                  <h3 className="mx-4 text-[19.68px] leading-[23.06px] my-3">Quam sed</h3>
                  <div className="flex gap-2">
                    <p className="text-headingsText text-[13.89px] leading-[16.28px]">$32.00 <span className="text-secondary ">$56.00</span></p>
                    <StarRating rating={4} />
                  </div>
                </div>
              </div>

              <p className="my-8 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

              <p className="mt-4 font-normal text-sm lg:text-[16px] leading-[25.6px] text-[#8a85b9] lg:w-[90%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>

              <div className="flex items-center justify-center mx-auto mt-14">
              <div className="flex gap-5 items-center">
              <FaFacebook className="text-white bg-purple-700 p-1 rounded-full text-xl" />
              <FaInstagram className="text-white bg-pink-600 p-1 rounded-full text-xl" />
              <FaTwitter className="text-white bg-sky-400 p-1 rounded-full text-xl" />
            </div>
              </div>

              <div className="bg-maingray flex justify-between items-center px-2 py-1 w-full h-[45px] mt-10">
                <p className="flex gap-2 items-center"><FaArrowLeft className="text-gray-500 text-lg" />Previous Post </p>
                <p className="flex gap-2 items-center">Next Post <FaArrowRight className="text-gray-500 text-lg" /> </p>
              </div>

              <div className="my-20 space-y-8">
                <div className="shadow-md w-full h-auto lg:w-[667.68px] lg:h-[137.89px]  lg:justify-start p-4">
                  <div className="flex items-center  gap-3 justify-center mx-auto">
                  <Image src={'/singleblog-5.jpg'} alt="" height={103} width={106} className="object-cover rounded-[2.27px] h-[103px] w-[106px]" />
                 <div className="">
                  <div className="flex gap-4 ">
                    <p className="text-[18.14px] leading-[21.25px] text-headingsText">Sapien ac</p>
                    <p className="text-xs font-normal text-[#8a85b9]">Jan 09 2020</p>
                  </div>
                  <p className="text-[12.47px] leading-[20px] mt-2 lg:mt-0 lg:leading-[28.34px] font-normal text-[#8a85b9] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>

                 </div>
                  </div>

                </div>

                 <div className="shadow-md w-full h-auto lg:w-[667.68px] lg:h-[137.89px]  lg:justify-start p-4">
                  <div className="flex items-center  gap-3 justify-center mx-auto">
                  <Image src={'/img.jpg'} alt="" height={103} width={106} className="object-cover rounded-[2.27px] h-[103px] w-[106px]" />
                 <div className="">
                  <div className="flex gap-4 ">
                    <p className="text-[18.14px] leading-[21.25px] text-headingsText">Augue conva</p>
                    <p className="text-xs font-normal text-[#8a85b9]">Aug 18 2020</p>
                  </div>
                  <p className="text-[12.47px] leading-[20px] mt-2 lg:mt-0 lg:leading-[28.34px] font-normal text-[#8a85b9] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>

                 </div>
                  </div>

                </div>

              </div>

              <div className="lg:w-[717px]">
                <form action="">
                  <div className="flex items-center justify-between gap-7">
                    <input type="text" placeholder="Your Name *" className="p-2 border-[1px] w-full" />
                    <input type="text" placeholder="Write Your Email*" className="p-2 border-[1px] w-full" />
                  </div>

                  <textarea rows={5} placeholder="Write Your Comment" className="border-[1px] p-4 my-10 w-full" />
                  <p className="font-medium text-xs text-[#8a85b9] my-2 ">Save my name, email, and website in this browser for the next time I comment.</p>

                  <button className="bg-secondary text-center text-white w-full text-[17.98px] leading-[21.07px] my-6 p-2">Continue Shipping</button>

                </form>
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

            <div className=" lg:grid grid-rows-4 space-y-4 px-4 lg:px-0  hidden ">
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
                    src={"/blogside-2.jpg"}
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
                    src={"/blogside-3.jpg"}
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
                    src={"/blogside-4.jpg"}
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

            <h2 className="text-headingsText my-6 text-xl 2xl:text-2xl px-4  lg:px-0 font-bold  hidden lg:block">
              Offer Product
            </h2>
            <div className="lg:grid grid-cols-2 gap-[15px]  px-4 lg:px-0 hidden ">
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

            <h2 className="text-headingsText my-6 text-xl 2xl:text-2xl font-bold px-4 lg:px-0  hidden lg:block">
              Follow
            </h2>
            <div className="lg:flex gap-3 items-center px-4 lg:px-0  hidden ">
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

export default singleBlogPage;
