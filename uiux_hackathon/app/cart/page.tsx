"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/Hero/page";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCircle } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { Suspense } from "react";

interface IProduct {
  id: string,
  name: string;
  price: number;
  description: string;
  imagePath: string;
  quantity?: number;
}

function Cart() {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const updatedCart = storedCart ? JSON.parse(storedCart) : [];

    const name = searchParam.get("name");
    const description = searchParam.get("description");
    const price = searchParam.get("price");
    const imagePath = searchParam.get("imagePath");

    if (name && price && description && imagePath) {
      const isDuplicate = updatedCart.some(
        (item: IProduct) => item.name === name
      );

      if (!isDuplicate) {
        updatedCart.push({ name, price, description, imagePath, quantity: 1 });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      router.replace("/cart");
    } else {
      // Set the cart state directly from localStorage on initial load
      setCart(updatedCart);
    }
  }, [searchParam, router]);

  const removeItem = (name: string) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  function handleQuantity(index: number, num: string) {
    const updatedCart = [...cart]
    updatedCart[index].quantity = +num
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    ).toFixed(2);
  };

  return (
    <div>
      <HeroSection name={"Shopping Cart"} />
      <div className="my-10 md:my-20 2xl:my-32">
        <div className="mx-auto lg:mx-[150px] 2xl:mx-default-margin px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">

            <div className="my-10 md:my-14 w-full lg:w-[65%]">

              <div className="overflow-x-auto">
                <Table className="min-w-full border border-gray-200">
                  <TableCaption className="text-sm text-gray-600">Your Shopping Cart!</TableCaption>
                  <TableHeader className="bg-gray-100">
                    <TableRow>
                      <TableHead className="text-xs md:text-sm font-semibold text-left p-3 2xl:text-3xl">Product</TableHead>
                      <TableHead className="text-xs md:text-sm font-semibold text-left p-3 2xl:text-3xl">Price</TableHead>
                      <TableHead className="text-xs md:text-sm font-semibold text-left p-3 2xl:text-3xl">Quantity</TableHead>
                      <TableHead className="text-xs md:text-sm font-semibold text-left p-3 2xl:text-3xl">Total</TableHead>
                      <TableHead className="text-xs md:text-sm font-semibold text-left p-3 2xl:text-3xl">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cart.map((item: IProduct, i: number) => (
                      <TableRow
                        key={i}
                        className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
                      >

                        <TableCell className="p-3">
                          <div className="flex  items-center gap-3 2xl:gap-16">
                            <div>
                              <Image
                                src={item.imagePath}
                                alt={item.name}
                                height={64}
                                width={64}
                                className="h-16 w-16 2xl:h-36 2xl:w-36 object-cover rounded"
                              />
                              <div className="md:hidden text-[12px] md:text-sm font-medium text-gray-800">
                                {item.name}
                              </div>
                            </div>
                            <div className="hidden md:flex text-[12px] md:text-sm 2xl:text-3xl font-medium text-gray-800">
                              {item.name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="p-3 text-xs md:text-sm text-gray-600 2xl:text-3xl">
                          ${item.price}
                        </TableCell>

                        <TableCell className="p-3">
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) => handleQuantity(i, e.target.value)}
                            className="w-16 text-center border rounded-md text-xs md:text-sm p-1 2xl:text-3xl"
                          />
                        </TableCell>

                        <TableCell className="p-3 text-xs md:text-sm text-gray-600 2xl:text-3xl">
                          ${Number(item.price) * (item.quantity || 1)}
                        </TableCell>

                        <TableCell className="p-3">
                          <button
                            onClick={() => removeItem(item.name)}
                            className="text-red-500 hover:text-red-700 transition duration-150 2xl:text-3xl"
                          >
                            <Trash2 className="text-lg 2xl:text-3xl" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between mt-6">
                <Link href={'/products'}>
                  <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark 2xl:text-3xl">
                    Continue Shopping
                  </button>
                </Link>
                <Link href={'/information'}>
                  <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark 2xl:text-3xl">
                    Next Step
                  </button>
                </Link>
              </div>
            </div>

            <div className="my-10 md:my-14 w-full lg:w-[30%] space-y-6">
              <div className="p-6 bg-maingray rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg text-[#15245E] 2xl:text-3xl">Subtotals:</h4>
                  <h4 className="font-semibold text-base text-[#15245E] 2xl:text-3xl">${getTotalPrice()}</h4>
                </div>
                <hr className="border-[#E1E1E4]" />
                <div className="flex items-center justify-between mt-4">
                  <h4 className="font-semibold text-lg text-[#15245E] 2xl:text-3xl">Totals:</h4>
                  <h4 className="font-semibold text-base text-[#15245E] 2xl:text-3xl">${getTotalPrice()}</h4>
                </div>
                <hr className="border-[#E1E1E4] mt-4" />
                <p className="text-sm text-gray-600 mt-4 flex items-center gap-22xl:text-2xl">
                  <FaCircle className="text-green-500" />
                  Shipping & taxes calculated at checkout
                </p>
                <Link href={'/information'}>
                  <button className="w-full bg-[#19d16f] text-white font-bold py-2 mt-4 rounded hover:bg-[#17c062] 2xl:text-3xl">
                    Continue to Shipping Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


function ShoppingCart() {
  return (
    <div>
      <Suspense>
        <Cart />
      </Suspense>
    </div>
  )
}

export default ShoppingCart
