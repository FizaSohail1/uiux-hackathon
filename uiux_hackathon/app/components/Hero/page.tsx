import React from 'react'

function HeroSection({name}) {
  return (
    <div>
         <main className='bg-maingray w-full h-[266px] flex items-center'>
        <div className="mx-auto lg:mx-[200px] 2xl:mx-default-margin ">
            <h1 className="text-headingsText text-[36px] leading-[42.19px] text-center lg:text-left">{name}</h1>
            <p className= "font-medium text-[16px] leading-[19.2px] text-center lg:text-left text-black my-3">Home. Pages. <span className='text-secondary'>{name}</span></p>
        </div>
      </main>
    </div>
  )
}

export default HeroSection
