"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailsProps {
  id: number;
  name: string;
  price: number;
  discountPercentage: number;
  imagePath: string;
  category: string;
  description: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
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
        { searchQuery: `${searchQuery}*` }
      );
      setProducts(results);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
        <div className="flex items-center w-full border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={handleInputChange}
            placeholder="Search products..."
          />
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 hover:bg-blue-600"
          >
            <FaSearch />
          </button>
        </div>
      </form>
      {products.length > 0 && (
        <div className="absolute z-10 left-0 top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            <ScrollArea className="h-[300px]">
            {products.map((product, index) => (
              <li key={index}>
                <Link
                  href={`/products/id?name=${product.name}&description=${product.description}&price=${product.price}&imagePath=${product.imagePath}&category=${product.category}&discountPercentage=${product.discountPercentage}&stockLevel=${product.stockLevel}&isFeaturedProduct=${product.isFeaturedProduct}`}
                >
                  <div className="flex items-center gap-4 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-md"
                      width={40}
                      height={40}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {product.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            </ScrollArea>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
