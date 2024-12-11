import React from 'react'
import Header from '../components/Header/page'
import Navbar from '../components/Navbar/page'
import HeroSection from '../components/Hero/page'
import { FaAngleDown } from 'react-icons/fa6';
import { TiThLargeOutline } from "react-icons/ti";
import { TiThList } from "react-icons/ti";
import { FaCircle, FaSearch } from "react-icons/fa";
import { TfiZoomIn } from "react-icons/tfi";
import { IoCartOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import { IoIosCheckboxOutline } from "react-icons/io";
import { IoMdCheckbox } from "react-icons/io";
import StarRating from '../components/DynamicStar/page';
import Image from 'next/image';
import Footer from '../components/Footer/page';

function shopLeftSidebar() {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection name={'Shop List'} />

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

      <div className="my-16 mx-auto lg:mx-[200px]  2xl:gap-[30px] 2xl:mx-default-margin ">
        <div className="flex  flex-col lg:flex-row justify-center lg:justify-start">
            <div className="hidden md:block">
                <div className="">
                   <div className="">
                   <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Product Brand</h1>
                    <ul className='list-none my-3'>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gp-2 flex items-center"><span><IoIosCheckboxOutline className='text-[#666988]' /> </span> Coaster Furniture</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-[#666988]' /> </span> Fusion Dot High Fashion</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoMdCheckbox className='text-[#666988]'/> </span> Unique Furnitture Restor</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-[#666988]' /> </span> Dream Furnitture Flipping</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-[#666988]'/> </span> Young Repurposed</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-[#666988]'/> </span> Green DIY furniture</li>                     
                    </ul>
                   </div>

                   <div className=" my-5">
                   <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Discount Offer</h1>
                    <ul className='list-none my-3'>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>20% Cashback</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span> 5% Cashback Offer</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>25% Discount Offer</li>        
                    </ul>
                   </div>

                   <div className=" ">
                   <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Rating Item</h1>
                    <ul className='list-none my-3'>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-yellow-600' /> </span><StarRating rating={4}/><span className='text-black'>(254)</span> </li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-yellow-600' /> </span> <StarRating rating={3}/><span className='text-black'>(154)</span></li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-yellow-600'/> </span><StarRating rating={2}/><span className='text-black'>(54)</span></li> 
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-yellow-600' /> </span><StarRating rating={2}/><span className='text-black'>(25)</span></li>        

                    </ul>
                   </div>

                   <div className=" my-5">
                   <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Categoriese</h1>
                    <ul className='list-none my-3'>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600' /> </span>Prestashop</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600' /> </span> Magento</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoMdCheckbox className='text-pink-600'/> </span>Bigcommerce</li>   
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600' /> </span></li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span> 3dcart</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600' /> </span>osCommerce</li> 
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>Bags</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"> Accessories</li>
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"> Jewellery</li>  
                        <li className="text-[#7e81a2] font-normal text-[16px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>Watches</li> 

                    </ul>
                   </div>

                   <div className="">
                   <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Price filter</h1>
                    <ul className='list-none my-3'>
                        <li className="text-[#7e81a2] font-normal text-[15px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>$0.00 - $150.00</li>
                        <li className="text-[#7e81a2] font-normal text-[15px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span> $150.00 - $350.00</li>
                        <li className="text-[#7e81a2] font-normal text-[15px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>$150.00 - $504.00</li> 
                        <li className="text-[#7e81a2] font-normal text-[15px] leading-[30px] gap-2 flex items-center"><span><IoIosCheckboxOutline className='text-pink-600'/> </span>$450.00 +</li>        

                    </ul>

                    <div className='h-[31px] w-[203px] my-3 px-1'>
                        <FaSearch className='justify-end' />
                    </div>
                   </div>

                   <div className="">
                    <h1 className='text-[20px] leading-[30px] text-headingsText underline decoration-solid'>Filter By Color</h1>
                    <div className="flex gap-4 items-center mt-3">
                        <div className="flex gap-2 items-center">
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-blue-800 text-xs'/></span>Blue</p>
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-yellow-600 text-xs'/></span>Yellow</p>
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-yellow-800 text-xs'/></span>Brown</p>
                        </div>

                    </div>
                    <div className="flex gap-4 items-center my-2">
                        <div className="flex gap-2 items-center">
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-green-600 text-xs'/></span>Green</p>
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-purple-600 text-xs'/></span>Purple</p>
                            <p className=' text-[#7e81a2] font-normal text-[15px] leading-[30px] flex gap-1 items-center'> <span><FaCircle className='text-sky-400 text-xs'/></span>Sky</p>
                        </div>

                    </div>
                   </div>
                </div>
            </div>

           <div>
           <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-1.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-4">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Accumsan tincidunt</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-2.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>In nulla</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-3.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Vel sem</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                 
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-4.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Porttitor cum</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-5.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Nunc in</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-6.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Vitae facilisis</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:h-[230px] lg:w-[921px] bg-white p-3 gap-[30px]">
            <div>
                <Image src={'/shoplist-7.jpg'} height={218} width={314} alt='image' className='object-cover h-[181px] w-[284px]' />
            </div>

            <div className="">
                <div className="flex gap-7">
                    <h1 className='text-[19.33px] leading-[23.29px] text-[#111c83]'>Curabitur lectus</h1>
                    <p className="flex items-center gap-2">
                  <span>< FaCircle className='text-[#DE9034] text-xs' /></span>
                  <span>< FaCircle className='text-[#EC42A2] text-xs'/></span>
                  <span>< FaCircle className='text-[#3F509E] text-xs'/></span>
                  </p>
                </div>

                <div className="flex gap-3 items-center my-2">
                   <p className='flex gap-2 text-headingsText text-[15.46px] leading-[19px] my-2'>$25.00 <span className='text-secondary'>$32.00</span></p>
                   <StarRating rating={4} />

                </div>

                <p className='text-[17px] leading-[29px] text-[#9295aa] md:max-w-[549px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>

                <div className="flex gap-5 items-center mt-4">
                    <IoCartOutline />
                    <BsHeart />
                    <TfiZoomIn />
                </div>

            </div>
        </div>
           </div>
        </div>
      </div>

      <div className="lg:mx-[200px] 2xl:mx-default-margin mx-auto my-20 ">
   <Image src={'/logos.png'} alt="logos" height={93} width={904} className=" h-full w-full object-cover" />
   </div>

   <Footer />


    </div>
  )
}

export default shopLeftSidebar
