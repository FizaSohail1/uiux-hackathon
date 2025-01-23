import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface IProduct {
    id ?: number,
    name : string,
    price : number,
    discountPercentage: number,
    imagePath : string,
    category : string  
    description:string,
    stockLevel:number,
    isFeaturedProduct:boolean
}

const RelatedProducts = async ({ category }: { category?: string }) => {

  const sofaProducts = await client.fetch(`*[_type == "product" && category == 'Sofa'][3...7]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage, "imagePath":image.asset->url ,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}`)

  const chairProducts = await client.fetch(`*[_type == "product" && category == 'Chair'][5...9]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage, "imagePath":image.asset->url ,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}`)

  const relatedProducts = category === 'Sofa' ? sofaProducts : chairProducts;


  return (
   <div className='mx-auto lg:mx-[150px] 2xl:mx-default-margin my-28'>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-headingsText mb-10">
             Related Products
           </h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  justify-center mx-5'>
             {relatedProducts.map((product:IProduct,i:number)=>{
               return (
                 <div className="h-auto lg:h-[270px] 2xl:h-[380px] w-full" key={i}>
                 <div className="flex items-center justify-center border-[2px]  lg:h-[240px] 2xl:h-[380px] ">
                 <Image src={product.imagePath}  alt='image' width={270} height={340} className="h-[200px] w-[270px]  object-cover"  />
                 </div>
   
                   <div className='my-3 flex justify-between '>
                   <div className="">
                   <Link href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath
                       }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                     >
                       <h3 className="text-headingsText text-[16px] leading-[18.75px] font-semibold">
                         {product.name}
                       </h3>
                     </Link>
                   <p className='text-[13px] leading-[15.23px] mt-1'>${product.price}</p>
                   </div>
               </div> 
               </div>
               )
             })}
   
           </div>
           </div> 
  );
};

export default RelatedProducts;
