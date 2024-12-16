import Image from "next/image";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaTruckFast, FaCheck } from "react-icons/fa6";
import { PiHandCoinsFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { FaDiamond } from "react-icons/fa6";
import { GoDiamond } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/product-1.png",
      height: 178,
      width: 178,
      category: "featured",
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/product-2.png",
      height: 150,
      width: 130,
      category: "featured",
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/product-3.png",
      height: 175,
      width: 175,
      category: "featured",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/trending-4.png",
      height: 151,
      width: 216,
      category: "featured",
    },
  ];

  const latestProducts = [
    {
      id: 5,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-5.png",
      height: 229,
      width: 223,
      category: "latest",
    },
    {
      id: 6,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-6.png",
      height: 245,
      width: 245,
      category: "latest",
    },
    {
      id: 7,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-7.png",
      height: 222.2,
      width: 221.84,
      category: "latest",
    },
    {
      id: 8,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-8.png",
      height: 277,
      width: 267,
      category: "latest",
    },
    {
      id: 9,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-9.png",
      height: 264,
      width: 303,
      category: "latest",
    },
    {
      id: 10,
      name: "Comfort Handy Craft",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-4.png",
      height: 178,
      width: 178,
      category: "latest",
    },
  ];

  const trendingProducts = [
    {
      id: 11,
      name: "Cantiliver Chair",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-1.png",
      height: 171,
      width: 171,
      category: "trending",
    },
    {
      id: 12,
      name: "Cantiliver Chair",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-12.png",
      height: 187,
      width: 187,
      category: "trending",
    },
    {
      id: 13,
      name: "Cantiliver Chair",
      price: 42.0,
      discountPrice: 65.0,
      image: "/trending-4.png",
      height: 189,
      width: 197,
      category: "trending",
    },
    {
      id: 14,
      name: "Cantiliver Chair",
      price: 42.0,
      discountPrice: 65.0,
      image: "/product-2.png",
      height: 211,
      width: 253,
      category: "trending",
    },
  ];

  const topProducts = [
    {
      id: 15,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/product-1.png",
      height: 178,
      width: 178,
      category: "featured",
    },
    {
      id: 16,
      name: "Cantilever chair",
      code: "Y523201",
      price: 42.0,
      image: "/product-2.png",
      height: 150,
      width: 130,
      category: "featured",
    },
    {
      id: 17,
      name: "Cantiliver Chair",
      price: 42.0,
      image: "/trending-4.png",
      height: 189,
      width: 197,
      category: "trending",
    },
    {
      id: 18,
      name: "Comfort Handy Craft",
      price: 42.0,
      image: "/product-8.png",
      height: 277,
      width: 267,
      category: "latest",
    },
  ];

  return (
    <div>
      <main className="w-full bg-maingray py-2 ">
        <div className=" h-auto lg:h-[650px] 2xl:h-[764px]  ">
          <div className="flex items-start  2xl:pl-[71px] absolute ">
            <div className="w-[150px] h-[120px] lg:w-[290px] lg:h-[240px] 2xl:w-[387px] 2xl:h-[387px] flex-shrink-0">
              <Image
                src="/hero-1.png"
                alt="Hero 1"
                height={387}
                width={387}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="items-center flex flex-col lg:flex-row mx-2 lg:ml-[220px] 2xl:ml-default-margin">
            <div className=" 2xl:mt-10 mt-32 lg:mt-0 max-w-[700px] justify-center text-center md:text-left">
              <h3 className=" text-secondary font-bold text-sm md:text-[16px] leading-7">
                Best Furniture For Your Castle....
              </h3>
              <h1 className="font-bold text-xl 2xl:text-[53px] 2xl:leading-[81.98px] md:text-[47px] md:leading-[50px] mt-4 ">
                New Furniture Collection Trends in 2020
              </h1>
              <p className="font-bold text-[16px] leading-[28px] text-[#8A8FB9] mt-4 max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-secondary text-white font-bold text-[16px] px-8 py-4 mt-6 rounded">
                Shop Now
              </button>
            </div>

            <div className="relative flex h-[400px] lg:w-[706px] lg:h-[689px] lg:items-start items-center justify-center">
              <div className="absolute rounded-full h-[300px] w-[300px] 2xl:w-[651px] 2xl:h-[651px] lg:w-[450px] lg:h-[450px] bg-[#ECD2FA] opacity-40 lg:mt-10 2xl:ml-36">
                {" "}
              </div>

              <div className="absolute rounded-full h-[300px] w-[300px] 2xl:w-[648px] 2xl:h-[648px] lg:w-[450px] lg:h-[450px] bg-[#ECD2FA] lg:my-20 2xl:ml-44">
                <Image
                  src="/hero-2.png"
                  alt="Hero 2"
                  height={629}
                  width={629}
                  className="h-[250px] w-[250px] 2xl:h-[629px] 2xl:w-[629px] lg:h-[500px] lg:w-[500px] object-cover mt-10 mx-auto"
                />
                <div className="absolute top-[-35px] lg:top-[-70px] left-[70%] transform -translate-x-1/2">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src="/Vector-14.png"
                      alt="Vector"
                      height={138}
                      width={132}
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-[35px] lg:leading-[43.89px] font-bold text-center">
                      50% Off
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mx-auto items-center justify-center mb-5">
          <FaDiamond className="text-secondary" />
          <GoDiamond className="text-secondary" />
          <GoDiamond className="text-secondary" />
        </div>
      </main>

      <section className="my-10 md:py-16 ">
        <div className=" mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
          <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10  ">
            Featured Products
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] 2xl:gap-[70px] 2xl:flex  justify-center 2xl:mt-24">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg  transition w-[240px] 2xl:w-[270px] 2xl:h-[361px] md:w-full hover:bg-[#2F1AC4] mx-auto lg:mx-0"
              >
                <div className="h-[200px]  w-[240px] md:w-full 2xl:w-[270px] 2xl:h-[236px]  bg-[#F6F7FB] ">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={178}
                    width={178}
                    className={`h-[${item.height}px] w-[${item.width}px] object-cover mx-auto `}
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
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-xl font-bold text-headingsText">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex gap-2 justify-center my-2">
                    <div className="h-1 w-[14px] rounded-md bg-green-200"></div>
                    <div className="h-1 w-[14px] rounded-md bg-secondary"></div>
                    <div className="h-1 w-[14px] rounded-md bg-headingsText"></div>
                  </div>
                  <p className="text-gray-500">Code - {item.code}</p>
                  <p className="text-secondary font-bold my-2">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center mt-8 lg:mt-20">
            <div className="h-1 w-6 rounded-md bg-secondary"></div>
            <div className="h-1 w-5 rounded-md bg-pink-200"></div>
            <div className="h-1 w-5 rounded-md bg-pink-200"></div>
            <div className="h-1 w-5 rounded-md bg-pink-200"></div>
          </div>
        </div>
      </section>

      <section className="md:py-16">
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10  ">
            Latest Products
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 my-8 2xl:mx-[450px] ">
            <li className="text-secondary underline decoration-solid cursor-pointer">
              New Arrival
            </li>
            <li className="text-textStyle underline decoration-solid cursor-pointer">
              Best Seller
            </li>
            <li className="text-textStyle underline decoration-solid cursor-pointer">
              Featured
            </li>
            <li className="text-textStyle underline decoration-solid cursor-pointer">
              Special Offer
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]  justify-center 2xl:mt-24">
            {latestProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg 2xl:h-[306px] md:w-full 2xl:w-[365px] h-[310px] w-[250px] lg:h-[310px] lg:w-[300px] mx-auto  my-5"
              >
                <div className="h-[250px] w-full bg-[#F6F7FB] flex items-center  ">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={product.height}
                    width={product.width}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex justify-between items-center mt-4 px-2">
                  <div>
                    <Link href={`/products/${product.id}`}>
                      <h3 className=" text-sm lg:text-base font-bold text-headingsText">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="bg-[#EEEFFB] border-[2px] w-[100px] h-1 mt-2"></div>
                  </div>
                  <div className="flex flex-row gap-2 items-end text-sm md:text-base">
                    <p className="text-textStyle font-bold  ">
                      ${product.price}
                    </p>
                    <p className="text-[#FB2448] font-bold">
                      ${product.discountPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className=" my-10 md:my-20">
        <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
          What Shopex Offer
        </h2>

        <div className="flex flex-col lg:flex-row  mx-auto justify-center gap-[30px] 2xl:gap-[70px] 2xl:flex 2xl:mx-default-margin lg:mx-[200px]">
          <div className="h-[320px] w-[250px] md:w-[270px] mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
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
            <p className="font-normal text-center text-base mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] md:w-[270px] mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
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
            <p className="font-normal text-center text-base mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] md:w-[270px] mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
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
            <p className="font-normal text-center text-base mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="h-[320px] w-[250px] md:w-[270px] mt-4 cursor-pointer bg-white shadow-md p-4 flex flex-col items-center justify-center mx-auto">
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
            <p className="font-normal text-center text-base mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>

      <div className="h-auto lg:h-[579px] w-full my-8  py-14 bg-maingray px-4 lg:px-0 ">
        <div className="2xl:mx-default-margin lg:mx-[200px] mx-auto justify-center  flex flex-col lg:flex-row  items-center gap-[30px]">
          <div className=" relative flex items-center justify-center  ">
            <Image
              src={"/Ellipse-63.png"}
              alt="ellipse"
              height={300}
              width={280}
              className="object-cover w-full h-auto  "
            />

            <div className="absolute">
              <Image
                src={"/hero-3.png"}
                alt="hero3"
                height={100}
                width={300}
                className=" h-[270px] w-[270px] lg:h-[449.62px] lg:w-[481px]  object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col 2xl:mx-4">
            <h1 className=" text-2xl md:text-[35px] md:leading-[46.2px] text-headingsText font-semibold text-center md:text-left">
              Unique Features Of Latest & Trending Products
            </h1>

            <ul className="my-10 space-y-4">
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
              <button className="bg-secondary text-white font-bold text-xs lg:text-[16px] p-3 lg:px-8 lg:py-4 mt-6">
                Add To Cart
              </button>
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
        <div className=" mx-auto lg:mx-[200px] 2xl:mx-default-margin">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 2xl:mt-24">
            Trending Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] 2xl:gap-[70px] 2xl:flex justify-center ">
            {trendingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg  transition   w-[240px]  2xl:h-[361px] md:w-full  md:my-0 mx-auto"
              >
                <div className="h-[200px]  w-[240px] md:w-full 2xl:h-[236px] 2xl:w-[270px] bg-[#F6F7FB]  items-center mx-auto">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={178}
                    width={178}
                    className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto `}
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
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-headingsText">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex  gap-2 text-center justify-center">
                    <p className="text-headingsText font-normal text-[14px] leading-[14px] mt-2">
                      ${product.price}
                    </p>
                    <p className="text-blue-100 font-normal text-[12px] leading-[12px] mt-2 line-through">
                      ${product.discountPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-[30px] items-center mt-7 px-4 lg:px-0">
            <div className="h-[270px] w-full lg:w-[350px] 2xl:w-[420px] bg-[#fff6fb] p-3">
              <div className="">
                <h3 className="font-semibold text-[26px] leading-[26px] text-headingsText mt-3">
                  23% off in all products
                </h3>
                <p className="text-base underline decoration-solid text-secondary my-2">
                  Shop Now
                </p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={"/trending-1.png"}
                  alt=""
                  height={207}
                  width={213}
                  className="object-cover h-[150px] lg:h-[207px] w-[213px]"
                />
              </div>
            </div>

            <div className="h-[270px] w-full lg:w-[350px] 2xl:w-[420px] bg-maingray p-3">
              <div className="">
                <h3 className="font-semibold text-[26px] leading-[26px] text-headingsText mt-3">
                  23% off in all products
                </h3>
                <p className="text-base underline decoration-solid text-secondary my-2">
                  Shop Now
                </p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={"/trending-2.png"}
                  alt=""
                  height={173}
                  width={312}
                  className="object-cover h-[173px] w-[312px]"
                />
              </div>
            </div>

            <div className="grid grid-rows-3 space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="bg-maingray w-[107px] h-[74px]">
                  <Image
                    src={"/trending-3.png"}
                    alt=""
                    height={57}
                    width={71}
                    className="object-cover h-[71px] w-[64px]"
                  />
                </div>
                <div className="">
                  <p className="text-base text-headingsText">
                    Executive Seat chair
                  </p>
                  <p className="text-[11px] text-headingsText ">$32.00</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="bg-maingray w-[107px] h-[74px]">
                  <Image
                    src={"/trending-4.png"}
                    alt=""
                    height={57}
                    width={71}
                    className="object-cover h-[71px] w-[64px]"
                  />
                </div>
                <div className="">
                  <p className="text-base text-headingsText">
                    Executive Seat chair
                  </p>
                  <p className="text-[11px] text-headingsText ">$32.00</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="bg-maingray w-[107px] h-[74px]">
                  <Image
                    src={"/trending-5.png"}
                    alt=""
                    height={57}
                    width={71}
                    className="object-cover h-[71px] w-[64px]"
                  />
                </div>
                <div className="">
                  <p className="text-base text-headingsText">
                    Executive Seat chair
                  </p>
                  <p className="text-[11px] text-headingsText ">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
          Discount Item
        </h2>

        <ul className="flex flex-wrap justify-center 2xl:justify-start gap-4 md:gap-8 my-8 2xl:mx-[450px] ">
          <li className="text-secondary underline decoration-solid cursor-pointer">
            Wood Chair
          </li>
          <li className="text-textStyle underline decoration-solid cursor-pointer">
            Plastic Chair
          </li>
          <li className="text-textStyle underline decoration-solid cursor-pointer">
            Sofa Collection
          </li>
        </ul>

        <div className="flex flex-col lg:flex-row mx-auto items-center lg:mx-[200px] 2xl:mx-default-margin lg:my-32">
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
            <button className="bg-secondary text-white px-4 py-2  text-[18px] leading-[19.92px] mx-[25%] lg:mx-0 transition-all">
              Shop Now
            </button>
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
        <div className=" lg:mx-[200px] 2xl:mx-default-margin mx-auto">
          <h2 className=" text-2xl md:text-4xl font-bold text-center text-headingsText mb-10 ">
            Top Categoriese
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] 2xl:gap-[70px] 2xl:flex justify-center 2xl:mt-24 ">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="h-[280px] w-[220px]  2xl:h-[361px] mx-auto"
              >
                <div className="`h-[200px] w-[220px] 2xl:h-[236px] 2xl:w-[270px] bg-[#F6F7FB] rounded-full mx-auto hover:border-b-4 hover:border-l-4 hover:border-[#31208a]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={178}
                    width={178}
                    className={`h-[${product.height}px] w-[${product.width}px] object-cover mx-auto my-4 `}
                  />
                </div>
                <div className="p-4 text-center">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-headingsText">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-secondary font-bold mt-2">
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
          <button className="bg-secondary text-white text-[15px] md:text-[17px] leading-[1.2] px-6 py-2 md:px-8 md:py-3 mt-4">
            Shop Now
          </button>
        </div>
      </div>

      <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20 ">
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

        <div className="2xl:mx-default-margin lg:mx-[200px] mx-auto mb-20 flex items-center justify-between lg:mb-20 2xl:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-[70px] 2xl:flex space-y-44 lg:space-y-0 mx-auto">
            <div className="2xl:h-[493px] 2xl:w-[370px] h-[300px] w-[250px] lg:h-[300px] lg:w-[320px] mx-auto">
              <Image
                src={"/blog-1.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-full rounded-[8px] mx-auto"
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

            <div className="2xl:h-[493px] 2xl:w-[370px] h-[300px] w-[250px] lg:h-[300px] lg:w-[320px] mx-auto">
              <Image
                src={"/blog-2.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-full rounded-[8px]"
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

            <div className="2xl:h-[493px] 2xl:w-[370px] h-[430px] w-[250px] lg:h-[300px] lg:w-[320px] mx-auto">
              <Image
                src={"/blog-3.jpg"}
                alt="blog-1"
                height={255}
                width={370}
                className="object-cover w-full h-[300px] rounded-[8px]"
              />
              <div className="mb-24">
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
      </section>
    </div>
  );
}
