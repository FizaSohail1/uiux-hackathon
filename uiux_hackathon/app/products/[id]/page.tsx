import React from 'react';
import ProductDetails from '@/app/components/productDetail/page';
import RelatedProducts from '@/app/components/relatedProduct/page';
import { syncUsersToSanity } from '@/data/userApi';

async function singleProductPage({searchParams} : {searchParams: Promise<{
  name:string,
  price:string,
  description:string,
  imagePath:string,
  discountPercentage:number,
  category:string,
  stockLevel:number,

}>}) {

  syncUsersToSanity()


  const {name,price,description,imagePath,category,discountPercentage,stockLevel} = await searchParams 

  return (
 <>
 <ProductDetails
  name={name}
  price={parseFloat(price)}
  discountPercentage={discountPercentage}
  description={description}
  imagePath={imagePath}
  category={category}
  stockLevel={stockLevel}  
/>

        <RelatedProducts category={`${category}`} />
 </>
  
    

  )
}

export default singleProductPage
