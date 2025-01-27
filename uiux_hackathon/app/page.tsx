import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { fetchData } from "@/data/migrateData";
import {allProducts} from "./components/fetchData/page";
import CarouselPlugin from "./components/carousel/page";

interface IData {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  description: string;
  imagePath: string;
  category: string;
  isFeaturedProduct: boolean;
  stockLevel: string;
}

export default async function Home() {

  await fetchData()
  const  [
    featuredProducts,
    latestProducts,
    trendingProducts,
    topProducts
   ] = await allProducts()

  return (
    <div>
      <CarouselPlugin />

      <section className="my-10 md:py-16 ">
        <div className=" mx-auto lg:mx-[150px] 2xl:mx-default-margin ">
          <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10  ">
            Featured Products
          </h2>

          <div className="md:mx-5 md:space-y-5 lg:space-y-0 lg:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-36 2xl:flex  justify-center 2xl:mt-24">
            {featuredProducts.map((item: IData, i:number) => (
              <div key={i}
                className="bg-white shadow-lg h-auto transition w-[240px] 2xl:h-auto sm:w-[280px] md:w-full hover:bg-[#2F1AC4] mx-auto lg:mx-0"
              >
                <div className="h-[200px] w-[240px] md:h-[270px] md:w-full  2xl:h-[380px] bg-[#F6F7FB] ">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
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

                <div className="p-4 text-center">
                  <Link href={`/products/id?name=${item.name}&description=${item.description
                    }&price=${item.price}&imagePath=${item.imagePath
                    }&category=${item.category}&discountPercentage=${item.discountPercentage}&stockLevel=${item.stockLevel}&isFeaturedProduct=${item.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText 2xl:text-2xl">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex gap-2 justify-center my-2">
                    <div className="h-1 w-[14px] rounded-md bg-green-200"></div>
                    <div className="h-1 w-[14px] rounded-md bg-secondary"></div>
                    <div className="h-1 w-[14px] rounded-md bg-headingsText"></div>
                  </div>
                  <p className="text-secondary font-bold my-2 2xl:text-2xl">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="md:py-16 2xl:my-32">
  <div className="mx-auto px-4 lg:px-[170px] 2xl:px-default-margin">
    <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
      Latest Products
    </h2>

    <ul className="flex flex-wrap justify-center gap-4 md:gap-8 my-8 2xl:my-20">
      <li className="text-secondary underline decoration-solid cursor-pointer 2xl:text-2xl">
        New Arrival
      </li>
      <li className="text-textStyle underline decoration-solid cursor-pointer 2xl:text-2xl">
        Best Seller
      </li>
      <li className="text-textStyle underline decoration-solid cursor-pointer 2xl:text-2xl">
        Featured
      </li>
      <li className="text-textStyle underline decoration-solid cursor-pointer 2xl:text-2xl">
        Special Offer
      </li>
    </ul>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] 2xl:gap-36 justify-center">
      {latestProducts.map((product: IData, i: number) => (
        <div
          key={i}
          className="bg-white shadow-lg h-[310px] sm:h-[320px] lg:h-[340px] w-full sm:w-[280px] lg:w-[300px] 2xl:w-full 2xl:h-[450px] mx-auto"
        >
          <div className="h-[200px] sm:h-[250px] 2xl:h-[380px] w-full bg-[#F6F7FB] flex items-center justify-center">
            <Image
              src={product.imagePath}
              alt={product.name}
              height={200}
              width={230}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex justify-between items-center mt-4 px-4">
            <div>
              <Link
                href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath}&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
              >
                <h3 className="text-sm lg:text-base font-bold text-headingsText 2xl:text-2xl">
                  {product.name}
                </h3>
              </Link>
              <div className="bg-[#EEEFFB] border-[2px] w-[100px] h-1 mt-2"></div>
            </div>
            <div className="flex flex-row gap-2 items-end text-sm md:text-base 2xl:text-2xl">
              <p className="text-textStyle font-bold">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <div className=" my-10 md:my-20 2xl:my-32">
        <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 2xl:mb-20">
          What Shopex Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto md:mx-5 lg:mx-0 justify-center gap-[30px] 2xl:gap-36 2xl:mx-default-margin lg:mx-[170px]">
          <div className="h-[320px] w-[250px] sm:w-[280px] md:w-full 2xl:h-[450px] mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
            <Image
              src={"/truck.png"}
              alt="truck"
              height={65}
              width={65}
              className="object-cover h-[65px] w-[85px]"
            />
            <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
              Fast Delivery
            </h2>
            <p className="font-normal text-center text-base mx-auto 2xl:text-2xl 2x:mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] 2xl:h-[450px] sm:w-[280px] md:w-full mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
            <Image
              src={"/cashback-1.png"}
              alt="truck"
              height={65}
              width={65}
              className="object-cover h-[65px] w-[65px]"
            />

            <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
              100% Cashback
            </h2>
            <p className="font-normal text-center text-base mx-auto 2xl:text-2xl 2xl:mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] 2xl:h-[450px] sm:w-[280px] md:w-full mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
            <Image
              src={"/medal.png"}
              alt="truck"
              height={65}
              width={65}
              className="object-cover h-[85px] w-[65px]"
            />

            <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
              Quality Product
            </h2>
            <p className="font-normal text-center text-base mx-auto 2xl:text-2xl 2xl:mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] 2xl:h-[450px] sm:w-[280px] md:w-full mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
            <Image
              src={"/24-hours-support-1.png"}
              alt="truck"
              height={65}
              width={65}
              className="object-cover h-[65px] w-[65px]"
            />
            <h2 className="text-center mt-2 text-[22px] leading-[25.78px] font-bold">
              24/7 Support
            </h2>
            <p className="font-normal text-center text-base mx-auto 2xl:text-2xl 2xl:mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>


<div className="h-auto lg:h-[579px] w-full my-8 py-14 bg-maingray px-4 lg:px-0">
  <div className="2xl:mx-default-margin lg:mx-[170px] mx-auto justify-center flex flex-col md:flex-row items-center gap-[30px] md:gap-[40px]">
       <div className="relative flex items-center justify-center md:w-1/2">
      <Image
        src={"/Ellipse-63.png"}
        alt="ellipse"
        height={300}
        width={280}
        className="object-cover w-full h-auto 2xl:h-[450px] 2xl:w-[450px]"
      />
      <div className="absolute">
        <Image
          src={'/hero-3.png'}
          alt={'home4'}
          height={100}
          width={300}
          className="h-[270px] w-[270px] md:h-[350px] md:w-[350px] lg:h-[449px] lg:w-[481px] object-cover"
        />
      </div>
    </div>

    <div className="flex flex-col md:w-1/2">
      <h1 className="text-2xl md:w-[90%] lg:w-full lg:text-[35px] lg:leading-[46.2px] text-headingsText font-semibold text-center md:text-left">
        Unique Features Of Latest & Trending Products
      </h1>

      <ul className="my-10 space-y-4 md:w-[90%]">
        <li className="flex items-center gap-3">
          <span className="bg-secondary h-[11px] w-[11px] rounded-full"></span>
          <p className="font-medium text-[16px] leading-[21.12px] text-[#ABACC3]">
            All frames constructed with hardwood solids and laminates
          </p>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-[#2B2BF5] h-[11px] w-[11px] rounded-full"></span>
          <p className="font-medium text-[16px] leading-[28px] text-[#ABACC3]">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-[#2BF5CC] h-[11px] w-[11px] rounded-full"></span>
          <p className="font-medium text-[16px] leading-[21.12px] text-[#ABACC3]">
            Arms, backs and seats are structurally reinforced
          </p>
        </li>
      </ul>

      <div className="flex items-center gap-3 lg:gap-5">
        <Link href={'/products'}>
        <button className="bg-secondary text-white font-bold text-xs lg:text-[16px] p-3 lg:px-8 lg:py-4 mt-6">
          View more
        </button>
        </Link>
        <div className="mt-4">
          <h3 className="text-headingsText text-[14px] leading-[16.41px]">
            B&B Italian Sofa
          </h3>
          <p className="text-headingsText text-[14px] leading-[16.41px] font-normal">
            $32.00
          </p>
        </div>
      </div>
    </div>
  
  </div>
</div>


      <section className="my-10 md:py-16 ">
        <div className=" mx-auto lg:mx-[170px] 2xl:mx-default-margin">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 2xl:mt-24">
            Trending Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:mx-5 lg:mx-0 gap-[30px] 2xl:gap-36 2xl:flex justify-center ">
            {trendingProducts.map((product:IData, i:number) => (
              <div
                key={i}
                className="bg-white shadow-lg transition w-[240px] md:h-auto md:w-full 2xl:h-auto sm:w-[280px]  md:my-0 mx-auto"
              >
                <div className="h-[200px] w-[240px] sm:w-[280px] md:w-full md:h-[300px] lg:h-[250px] 2xl:h-[356px] md:w-full bg-[#F6F7FB]  items-center mx-auto">
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

                <div className="p-4 text-center">
                  <Link href={`/products/id?name=${product.name}&description=${product.description
                    }&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText 2xl:text-2xl">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex  gap-2 text-center justify-center">
                    <p className="text-headingsText font-normal text-[14px] leading-[14px] mt-2 2xl:text-2xl">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-4 lg:px-0">
        <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
          Discount Item
        </h2>

        <div className="flex flex-col lg:flex-row mx-auto items-center lg:mx-[170px] 2xl:mx-default-margin lg:my-32">
          <div className=" mx-3 lg:mx-0 md:w-1/2 lg:w-full">
            <h2 className=" text-2xl md:text-[35px] md:leading-[46.2px] text-[#00008B] mb-4 font-semibold ">
              20% Discount Of All Products
            </h2>
            <h3 className=" text-xl md:text-2xl text-secondary font-semibold mb-4">
              Eams Sofa Compact
            </h3>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>
            <ul className="space-y-2 mb-6">
              <div className="flex gap-8 items-center">
                <li className="flex items-center gap-2 text-[#B8B8DC] font-normal text-[16px] leading-[30px]">
                  <FaCheck className="text-[#7562B9]" />
                  Material expose like metals
                </li>
                <li className="flex items-center gap-2 text-[#B8B8DC] font-normal text-[16px] leading-[30px]">
                  <FaCheck className="text-[#7562B9]" />
                  Clear lines and geometric figures
                </li>
              </div>
              <div className="flex items-center gap-4">
                <li className="flex items-center gap-2 text-[#B8B8DC] font-normal text-[16px] leading-[30px]">
                  <FaCheck className="text-[#7562B9]" />
                  Simple neutral colours
                </li>
                <li className="flex items-center gap-2 text-[#B8B8DC] font-normal text-[16px] leading-[30px]">
                  <FaCheck className="text-[#7562B9]" />
                  Material expose like metals
                </li>
              </div>
            </ul>
            <Link href={'/products'}>
            <button className="bg-secondary text-white px-4 py-2  text-[18px] leading-[19.92px] mx-[25%] lg:mx-0 transition-all">
              Shop Now
            </button>
            </Link>
          </div>

          <div className="relative  mt-10 lg:mt-0 flex ">
            <div className=" flex flex-col lg:flex-row h-[300px] w-[330px] mx-auto lg:mx-0 bg-pink-100 rounded-full items-center justify-center ">
              <Image
                src="/sofa-1.png"
                alt="Eams Sofa"
                width={699}
                height={597}
                className="2xl:w-[699px] 2xl:h-[597px] h-[400px] md:h-[470px] w-[400px] object-cover absolute "
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" my-10 md:my-36 md:py-16">
        <div className=" lg:mx-[130px] 2xl:mx-default-margin mx-auto">
          <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
            Top Categoriese
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] 2xl:gap-36 2xl:flex justify-center 2xl:mt-24 ">
            {topProducts.map((product: IData, i: number) => (
              <div
                key={i}
                className="h-[280px] w-[220px]  2xl:h-auto 2xl:w-full mx-auto relative group"
              >
                <div className=" h-[200px] w-[220px] md:w-full 2xl:h-[340px] 2xl:w-[340px] bg-[#F6F7FB] rounded-full mx-auto hover:border-b-4 hover:border-l-4 hover:border-[#31208a] relative">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    height={178}
                    width={178}
                    className={`h-full w-full object-contain mx-auto my-4 `}
                  />

                  <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/products/id?name=${product.name}&description=${product.description
                      }&price=${product.price}&imagePath=${product.imagePath
                      }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}>

                      <button className="px-3 py-2 bg-green-500 text-white rounded">
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <Link href={`/products/id?name=${product.name}&description=${product.description
                    }&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText 2xl:text-2xl">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-secondary font-bold mt-2 2xl:text-2xl">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[462px] w-full mx-auto py-14 bg-maingray relative">
        <Image
          src="/hero-4.jpg"
          alt="Hero Section"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-[28px] md:text-[35px] leading-[1.5] max-w-[90%] md:max-w-[574px] text-headingsText font-bold">
            Get Latest Updates By Subscribing To Our Newsletter
          </h1>
          <Link href={'/products'}>
          <button className="bg-secondary text-white text-[15px] md:text-[17px] leading-[1.2] px-6 py-2 md:px-8 md:py-3 mt-4">
            Shop Now
          </button>       
          </Link>
        </div>
      </div>

      <div className="lg:mx-[170px] 2xl:mx-default-margin mx-auto my-20 ">
        <Image
          src={"/logos.png"}
          alt="logos"
          height={93}
          width={904}
          className=" h-full w-full object-cover"
        />
      </div>

      <section className="lg:py-16 my-10 lg:mb-32">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
          Our Blogs
        </h2>

        <div className="2xl:mx-default-margin lg:mx-[150px] mx-auto mb-20 flex items-center justify-between lg:mb-20 2xl:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
            <div className="2xl:h-[493px] h-[300px] mx-auto">
             <div>
             <Image
                src={"/blog-1.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-[250px] 2xl:h-[350px] rounded-[8px] mx-auto"
              />
              <div className="">
                <div className="flex gap-3 justify-between my-3">
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-secondary text-md">
                      <FaPenNib />
                    </span>
                    SaberAli
                  </p>
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-[#FFA454] text-md">
                      <FaCalendarAlt />
                    </span>
                    21 August,2020
                  </p>
                </div>
                <h1 className="text-headingsText text-[18px] leading-[21.09px] font-semibold ">
                  Top esssential Trends in 2021
                </h1>
                <p className="font-normal text-[16px] leading-[30px] text-[#72718F] my-2">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>

                <p className="text-[#72718F] font-normal text-[16px] leading-[30px] my-2">
                  Read More
                </p>
              </div>
             </div>
            </div>

            <div className="2xl:h-[493px] h-[300px] mx-auto">
             <div>
             <Image
                src={"/blog-2.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-[250px] 2xl:h-[350px] rounded-[8px]"
              />
              <div className="">
                <div className="flex gap-3 justify-between my-3">
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-secondary text-md">
                      <FaPenNib />
                    </span>
                    SaberAli
                  </p>
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-[#FFA454] text-md">
                      <FaCalendarAlt />
                    </span>
                    21 August,2020
                  </p>
                </div>
                <h1 className="text-secondary text-[18px] leading-[21.09px] font-semibold">
                  Top esssential Trends in 2021
                </h1>
                <p className="font-normal text-[16px] leading-[30px] text-[#72718F] my-2">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>

                <p className="text-secondary font-normal text-[16px] leading-[30px] my-2">
                  Read More
                </p>
              </div>
             </div>
            </div>

            <div className="2xl:h-[493px] h-[300px] mx-auto">
              <div>
              <Image
                src={"/blog-3.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-[250px] 2xl:h-[350px] rounded-[8px]"
              />
              <div className="">
                <div className="flex gap-3 justify-between my-3">
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-secondary text-md">
                      <FaPenNib />
                    </span>
                    SaberAli
                  </p>
                  <p className="flex text-headingsText text-[14px] leading-[16.41px]">
                    <span className="text-[#FFA454] text-md">
                      <FaCalendarAlt />
                    </span>
                    21 August,2020
                  </p>
                </div>
                <h1 className="text-headingsText text-[18px] leading-[21.09px] font-semibold">
                  Top esssential Trends in 2021
                </h1>
                <p className="font-normal text-[16px] leading-[30px] text-[#72718F] my-2">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>

                <p className="text-[#72718F] font-normal text-[16px] leading-[30px] my-2">
                  Read More
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

