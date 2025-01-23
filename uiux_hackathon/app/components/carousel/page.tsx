"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { FaDiamond } from "react-icons/fa6"
import { GoDiamond } from "react-icons/go"

export default function CarouselPlugin() {
  // Array containing data for each slide
  const slides = [
    {
      heroImage: "/hero-2.png",
      altHero: "Hero 1",
      headline: "Best Furniture For Your Castle....",
      title: "New Furniture Collection Trends in 2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      buttonText: "Shop Now",
      discountText: "50% Off",
    },
    {
      heroImage: "/hero-3.png",
      altHero: "Hero 2",
      headline: "Exclusive Deals Just For You!",
      title: "Discover Timeless Furniture Styles",
      description: "Elevate your living space with our exclusive collection of elegant and comfortable furniture.",
      buttonText: "Explore Now",
      discountText: "30% Off",
    },
    {
      heroImage: "/product-4.png",
      altHero: "Hero 3",
      headline: "Unmatched Quality & Comfort",
      title: "Experience the Future of Furniture",
      description: "Crafted with precision and care to deliver the best in comfort and design.",
      buttonText: "View Collection",
      discountText: "20% Off",
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
    plugins={[plugin.current]}
    className="w-full "
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <main className="w-full bg-maingray py-2">
                <div className="h-auto lg:h-[650px] 2xl:h-[764px]">
                  <div className="flex items-start 2xl:pl-[71px] absolute">
                    <div className="w-[150px] h-[120px] lg:w-[270px] lg:h-[240px] 2xl:w-[387px] 2xl:h-[387px] flex-shrink-0">
                      <Image
                        src={'/hero-1.png'}
                        alt={slide.altHero}
                        height={387}
                        width={387}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="items-center flex flex-col lg:flex-row mx-2 lg:ml-[200px] 2xl:ml-default-margin">
                    <div className="2xl:mt-10 mt-32 lg:mt-0 max-w-[700px] justify-center text-center md:text-left">
                      <h3 className="text-secondary font-bold text-sm md:text-[16px] leading-7">
                        {slide.headline}
                      </h3>
                      <h1 className="font-bold text-xl 2xl:text-[53px] 2xl:leading-[81.98px] md:text-[47px] md:leading-[50px] mt-4">
                        {slide.title}
                      </h1>
                      <p className="font-bold text-[16px] leading-[28px] text-[#8A8FB9] mt-4 max-w-[500px]">
                        {slide.description}
                      </p>
                      <button className="bg-secondary text-white font-bold text-[16px] px-8 py-4 mt-6 rounded">
                        {slide.buttonText}
                      </button>
                    </div>

                    <div className="relative flex h-[400px] lg:w-[706px] lg:h-[689px] lg:items-start items-center justify-center">
                      <div className="absolute rounded-full h-[300px] w-[300px] 2xl:w-[651px] 2xl:h-[651px] lg:w-[450px] lg:h-[450px] bg-[#ECD2FA] opacity-40 lg:mt-10 2xl:ml-36" />

                      <div className="absolute rounded-full h-[300px] w-[300px] 2xl:w-[648px] 2xl:h-[648px] lg:w-[450px] lg:h-[450px] bg-[#ECD2FA] lg:my-20 2xl:ml-44">
                        <Image
                          src={slide.heroImage}
                          alt={slide.altHero}
                          height={629}
                          width={629}
                          className="h-[250px] w-[250px] 2xl:h-[629px] 2xl:w-[629px] lg:h-[500px] lg:w-[500px] object-cover mt-10 mx-auto"
                        />
                        <div className="absolute top-[-35px] lg:top-[-70px] left-[70%] transform -translate-x-1/2">
                          <div className="relative flex items-center justify-center">
                            <Image
                              src={'/Vector-14.png'}
                              alt={'img'}
                              height={138}
                              width={132}
                              className="object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-[35px] lg:leading-[43.89px] font-bold text-center">
                              {slide.discountText}
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

