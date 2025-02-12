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
        <div className=''>
          <div className="px-4 lg:px-0 ">
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
