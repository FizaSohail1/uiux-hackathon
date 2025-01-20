import { client } from '@/sanity/lib/client';
import React from 'react'


interface IData {
    id: number;
    name: string;
    price: number;
    discountPercentage:number;
    description: string;
    imagePath: string;
    category: string;
    isFeaturedProduct:boolean;
    stockLevel:string;
  }
  
async function allProducts() {

          const featuredProducts:IData[] = await client.fetch('*[_type == "product" && isFeaturedProduct == true][0...4]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage,"imagePath": image.asset->url,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')
          
          const latestProducts:IData[] = await client.fetch('*[_type == "product"][3...9]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage,"imagePath": image.asset->url,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')
        
          const trendingProducts:IData[] = await client.fetch('*[_type == "product"][10...14]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage,"imagePath": image.asset->url,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')
        
          const topProducts:IData[] =await client.fetch('*[_type == "product"][17...21]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage,"imagePath": image.asset->url,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')
            const allProduct: IData[] = await client.fetch('*[_type == "product"]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage, "imagePath":image.asset->url ,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')

            const relatedProducts = await client.fetch('*[_type == "product"][11...15]{"name":name,"description":description,"price" : price,"discoutPercentage": discountPercentage, "imagePath":image.asset->url ,"isFeaturedProduct": isFeaturedProduct,"stockLevel": stockLevel,"category": category}')
            
          

  return (
   {
    featuredProducts,
    latestProducts,
    trendingProducts,
    topProducts,
    allProduct,
    relatedProducts
   }
  )
}

export default allProducts


export async function fetchProductsByCategory(category: string) {
  return await client.fetch(
    `*[_type == "product" && category match category]{
      "name": name,
      "price": price,
      "description": description,
      "imagePath": image.asset->url
    }`,
    { category } 
  );
}

