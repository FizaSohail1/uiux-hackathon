"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function FilterProduct() {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category}`); // Push category as query param
  };

  return (
    <div>
      <div className="hidden lg:flex space-x-8 text-[16px] leading-[20px]">
        <ul className="flex">
          <li className="relative">
            <div className="flex gap-7 md:gap-2 items-center mt-2 md:mt-0 border border-gray-300">
              <input
                type="text"
                className="px-2 py-1 text-sm 2xl:px-32 2xl:py-4 2xl:text-2xl focus:outline-none w-full"
                placeholder="Sort By..."
              />
              <button
                className="bg-secondary text-white px-1 py-1  2xl:px-10 2xl:py-4 "
                onClick={() => setDropdown(!dropdown)}
              >
                <FaAngleDown />
              </button>
            </div>

            {dropdown && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-md text-gray-800 2xl:text:2xl z-10 w-[200px] 2xl:w-[600px]">
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleCategoryClick("Chair")}
                >
                  Chairs
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleCategoryClick("Sofa")}
                >
                  Sofa
                </li>
                <li
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleCategoryClick("")} 
                >
                  All Products
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterProduct;
