import React from "react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import FilterProduct from "../components/filterProduct/page";
import allProducts from "../components/fetchData/page";
import HeroSection from "../components/Hero/page";

async function Products({ searchParams }: { searchParams: { category?: string } }) {
  const { allProduct } = await allProducts(); 
  const category = searchParams?.category || ""; 

  const filteredProducts = category
    ? allProduct.filter((product) => product.category === category)
    : allProduct;

  return (
    <div>
      <HeroSection name={'Shop'} />

      <div className="my-16 lg:my-32 mx-auto lg:mx-[200px] 2xl:mx-default-margin block space-y-3 lg:flex lg:items-center lg:justify-between">
        <div>
          <h1 className="text-headingsText text-2xl text-center md:text-left md:text-[22px] md:leading-[25.78px] font-semibold">
            Ecommerce Accessories & Fashion item
          </h1>
          <p className="font-normal text-[12px] leading-[14.4px] text-[#8A8FB9] text-center md:text-left">
            About {filteredProducts.length} results
          </p>
        </div>
        <div className="block md:flex items-center justify-between gap-2 mx-4 md:mx-0">
          <FilterProduct />
        </div>
      </div>

      <section className="lg:mb-14">
        <div className="lg:mx-[170px] 2xl:mx-default-margin mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="bg-white transition h-[380px] w-[270px] lg:h-[361px] md:my-4 mx-auto lg:mx-0"
              >
                <div className="h-[250px] w-[240px] lg:h-[236px] lg:w-[270px] bg-[#F6F7FB] flex items-center">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    height={178}
                    width={178}
                    className="h-full w-full object-contain mx-auto"
                  />
                </div>
                <div className="p-4 md:text-center">
                <Link href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                  >
                    <h3 className=" text-sm lg:text-base font-bold text-headingsText">
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
                  <p className="text-secondary font-bold mt-2 text-center">${product.price}</p>
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
