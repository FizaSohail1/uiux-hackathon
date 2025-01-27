import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import FilterProduct from "../components/filterProduct/page";
import {allProducts} from "../components/fetchData/page";
import HeroSection from "../components/Hero/page";


interface IData {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  description: string;
  imagePath: string;
  category: string;
  isFeaturedProduct: boolean;
  stockLevel: string;
}
async function Products({ searchParams }: { searchParams: { category?: string } }) {
  const [
    featuredProducts,
    latestProducts,
    trendingProducts,
    topProducts,
    allProduct,
    relatedProducts
   ]= await allProducts();
  const category = await searchParams?.category || ""; 

  const filteredProducts = category
    ? allProduct.filter((product:IData) => product.category === category)
    : allProduct;

  return (
    <div>
      <HeroSection name={'Shop'} />

      <div className="my-16 lg:my-32 mx-5 lg:mx-[200px] 2xl:mx-default-margin block space-y-3 lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold 2xl:text-4xl">
            Ecommerce Accessories & Fashion item
          </h1>
          <p className="font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left 2xl:text-2xl">
            About {filteredProducts.length} results
          </p>
        </div>
        <div className="block md:flex items-center justify-between gap-2 mx-4 md:mx-0">
          <FilterProduct />
        </div>
      </div>

      <section className="lg:mb-14 2xl:mb-[400px]">
        <div className="lg:mx-[170px] 2xl:mx-default-margin mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 space-y-10 2xl:gap-32 justify-center">
            {filteredProducts.map((product:IData, i:number) => (
              <div
                key={i}
                className="bg-white shadow-lg h-[310px] sm:h-[320px] sm:h-auto w-[250px] sm:w-[280px] lg:w-[280px] 2xl:w-full 2xl:h-auto mx-auto"
              >
                <div className="h-[200px] sm:h-[250px] 2xl:h-[380px] w-full bg-[#F6F7FB] flex items-center justify-center">
                            <Image
                              src={product.imagePath}
                              alt={product.name}
                              height={200}
                              width={230}
                              className="h-full w-full object-contain"
                            />
                          </div>
                <div className="p-4 md:text-center">
                <Link href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText 2xl:text-2xl">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="flex items-center gap-2 justify-center my-2">
                    <span>
                      <FaCircle className="text-[#DE9034] text-xs" />
                    </span>
                    <span>
                      <FaCircle className="text-[#EC42A2] text-xs" />
                    </span>
                    <span>
                      <FaCircle className="text-[#3F509E] text-xs" />
                    </span>
                  </p>
                  <p className="text-secondary font-bold mt-2 text-center 2xl:text-2xl">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
