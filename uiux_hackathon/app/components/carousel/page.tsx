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
                <div className="h-auto lg:h-[650px] 2xl:h-[964px]">
                  <div className="flex items-start 2xl:pl-[71px] absolute">
                    <div className="w-[150px] h-[120px] lg:w-[270px] lg:h-[240px] 2xl:w-[487px] 2xl:h-[487px] flex-shrink-0">
                      <Image
                        src={'/hero-1.png'}
                        alt={slide.altHero}
                        height={387}
                        width={387}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="items-center flex flex-col lg:flex-row mx-2 2xl:justify-center 2xl:mr-36 lg:ml-[200px] 2xl:mx-default-margin">
                    <div className="2xl:mt-10 mt-32 lg:mt-0 max-w-[700px] 2xl:w-full justify-center text-center md:text-left ">
                      <h3 className="text-secondary font-bold text-sm md:text-[16px] 2xl:text-3xl leading-7">
                        {slide.headline}
                      </h3>
                      <h1 className="font-bold text-xl 2xl:text-5xl 2xl:leading-[81.98px] md:text-[47px] md:leading-[50px] mt-4">
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
                      <div className="absolute rounded-full h-[300px] w-[300px] 2xl:w-[651px] 2xl:h-[651px] lg:w-[450px] lg:h-[450px] 2xl:w-[930px] 2xl:h-[900px] bg-[#ECD2FA] opacity-40 lg:mt-10 2xl:ml-36" />

                      <div className="absolute rounded-full h-[300px] w-[300px] 2xl:h-[829px] 2xl:w-[829px] lg:w-[450px] lg:h-[450px] 2xl:w-[930px] 2xl:h-[900px] bg-[#ECD2FA] lg:my-20 2xl:ml-44">
                        <Image
                          src={slide.heroImage}
                          alt={slide.altHero}
                          height={629}
                          width={629}
                          className="h-[250px] w-[250px] 2xl:h-[829px] 2xl:w-[829px] lg:h-[500px] lg:w-[500px] object-cover mt-10 mx-auto"
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

{/* <main className="w-full bg-maingray py-2">
  <div className="h-auto lg:h-[650px] 2xl:h-[964px] relative">
    <div className="flex items-start 2xl:pl-[71px] absolute top-0 left-0">
      <div className="w-[150px] h-[120px] lg:w-[270px] lg:h-[240px] 2xl:w-[487px] 2xl:h-[487px] flex-shrink-0">
        <Image
          src={'/hero-1.png'}
          alt={slide.altHero}
          height={487}
          width={487}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="relative z-10 flex flex-col lg:flex-row items-center mx-2 lg:mx-10 2xl:mx-default-margin lg:justify-between">
      <div className="mt-32 lg:mt-0 2xl:mt-10 max-w-[700px] 2xl:max-w-full 2xl:ml-default-margin text-center lg:text-left">
        <h3 className="text-secondary font-bold text-sm md:text-[16px] 2xl:text-3xl leading-7">
          {slide.headline}
        </h3>
        <h1 className="font-bold text-xl md:text-[47px] md:leading-[50px] 2xl:text-6xl 2xl:leading-[82px] mt-4">
          {slide.title}
        </h1>
        <p className="font-bold text-[16px] leading-[28px] text-[#8A8FB9] mt-4 max-w-[500px] 2xl:max-w-full 2xl:text-4xl">
          {slide.description}
        </p>
        <button className="bg-secondary text-white font-bold text-[16px] px-8 py-4 2xl:text-2xl mt-6 rounded">
          {slide.buttonText}
        </button>
      </div>

      <div className="relative flex items-center justify-center lg:items-start lg:w-[706px] lg:h-[689px]">
        <div className="absolute rounded-full bg-[#ECD2FA] opacity-40 h-[300px] w-[300px] lg:w-[450px] lg:h-[450px] 2xl:w-[930px] 2xl:h-[900px] lg:mt-10"></div>
        <div className="absolute rounded-full bg-[#ECD2FA] h-[300px] w-[300px] lg:w-[450px] lg:h-[450px] 2xl:w-[829px] 2xl:h-[829px] lg:my-20">
          <Image
            src={slide.heroImage}
            alt={slide.altHero}
            height={629}
            width={629}
            className="h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] 2xl:h-[829px] 2xl:w-[829px] object-cover mx-auto"
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
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-[35px] lg:leading-[44px] font-bold text-center">
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
</main> */}

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

