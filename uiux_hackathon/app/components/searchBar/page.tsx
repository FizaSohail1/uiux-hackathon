"use client"
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailsProps {
  id : number,
  name : string,
  price : number,
  discountPercentage: number,
  imagePath : string,
  category : string  
  description:string,
  stockLevel:number,
  isFeaturedProduct:boolean
}
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<ProductDetailsProps[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      fetchProducts(e.target.value);
    } else {
      setProducts([]);
    }
  };

  const fetchProducts = async (searchQuery: string) => {
    try {
      const results = await client.fetch(
        `*[_type == 'product' && name match $searchQuery]{
          "name": name,
          "imagePath": image.asset->url
        }`,
        { searchQuery: `${searchQuery}*` } // GROQ search
      );
      setProducts(results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center border border-gray-300 px-2">
          <input
            type="text"
            className="px-4 py-2 text-sm focus:outline-none w-full"
            value={query}
            onChange={handleInputChange}
            placeholder="Search products..."
          />
          <button className="bg-secondary text-white px-2 py-2">
            <FaSearch />
          </button>
        </div>
      </form>
      {products.length > 0 && (
        <ScrollArea className="absolute z-10 top-[120px] w-full max-h-72 bg-white border border-gray-300 mt-2 rounded-md shadow-lg overflow-y-auto">
          <div className="p-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 mb-4 hover:bg-gray-100 p-2 rounded-md"
              >
               <Link href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath
                    }&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}>
               <Image
                  src={product.imagePath}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md"
                  width={40}
                  height={42}
                />
                <span className="text-sm font-medium">{product.name}</span>
               </Link>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export default SearchBar;
