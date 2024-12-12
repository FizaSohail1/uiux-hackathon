import React from 'react'
import HeroSection from '../components/Hero/page'
import Image from 'next/image'

function pageNotFound() {
  return (
    <div>
      <HeroSection name={'404 Page not Found'}/>

      <div className="items-center  jusify-center mx-auto my-16 lg:my-32 ">
        <Image src={'/page.jpg'} alt='' height={100} width={300} className='h-[300px] w-[270px] lg:h-[500px] lg:w-[500px] object-cover mx-auto' />

        <p className='font-bold text-2xl text-headingsText text-center my-5'>Oops! The page you requested was not found!</p>

        <div className="mt-10 flex justify-center">
                <button className='bg-secondary text-white px-3 py-2 text-lg font-semibold text-center rounded-[3px]'>Contact us</button>
            </div>

      </div>
    </div>
  )
}

export default pageNotFound
