import React from 'react'
import HeroSection from '../components/Hero/page';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function FAQ() {
  return (
    <div>
      <HeroSection name={'FAQ'} />

      <div className="my-16 lg:my-32  mx-auto lg:mx-[170px] 2xl:mx-default-margin">
        <div className='flex flex-col lg:flex-row justify-between 2xl:justify-center gap-[30px]'>
        <div className="px-4 lg:px-0 flex flex-col lg:flex-row  gap-[30px]">

        {/* <div className="">
            <h1 className='text-2xl text-center lg:text-left lg:text-3xl'>Generel Information</h1>

            <div className="my-7 space-y-4">
              <div className="">
                <h3 className='text-[17px] leading-[30px] text-headingsText'>Eu dictumst cum at sed euismood condimentum?</h3>
                <p className='text-[16px] leading-[30px] text-[#a1abcc]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>

              <div className="">
                <h3 className='text-[17px] leading-[30px] text-headingsText'>Magna bibendum est fermentum eros.</h3>
                <p className='text-[16px] leading-[30px] text-[#a1abcc]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>

              <div className="">
                <h3 className='text-[17px] leading-[30px] text-headingsText'>Odio muskana hak eris conseekin sceleton?</h3>
                <p className='text-[16px] leading-[30px] text-[#a1abcc]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>

              <div className="">
                <h3 className='text-[17px] leading-[30px] text-headingsText'>Elit id blandit sabara boi velit gua mara?</h3>
                <p className='text-[16px] leading-[30px] text-[#a1abcc]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
              </div>
            </div>
            </div> */}

            <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-left'>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
        You can reach out to our customer support team via the Contact Us page. Simply fill out the form, and we&apos;ll get back to you as soon as possible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-left'>What if I receive a damaged or incorrect product?</AccordionTrigger>
        <AccordionContent>
        We apologize for the inconvenience! If you receive a damaged or incorrect item, please contact our customer support team immediately with your order details and a photo of the product. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-left'>How do I care for the products I purchase?</AccordionTrigger>
        <AccordionContent>
        We include care instructions on each product page. Be sure to follow these guidelines to maintain the quality and longevity of your items.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-left'>Do I need to create an account to place an order?</AccordionTrigger>
        <AccordionContent>
        No, you can place an order as a guest. However, creating an account allows you to track your orders, and enjoy a faster checkout experience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>

            <div className="h-[600px] 2xl:h-[738px] lg:w-[566px] bg-maingray p-2 lg:p-6 ">
            <h1 className='text-2xl text-headingsText'>Ask a Question</h1>

            <form action="" className='mt-10'>
            <input type="text" placeholder="Your Name" className="p-2 border-[1px] w-full" />

            <input type="text" placeholder="Subject" className="p-2 border-[1px] w-full my-7" />


             <textarea rows={5} placeholder="Type Yor Message" className="border-[1px] p-4 my-10 w-full" />

             <button className="bg-secondary text-center text-white w-[45%] lg:w-1/3 text-[17.98px] leading-[21.07px] my-6 p-2">Send Mail</button>

            </form>


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
  )
}

export default FAQ
