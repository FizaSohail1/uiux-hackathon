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
  id:string,
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

    console.log("name test:", name);

    if (name && price && description && imagePath) {
      const isDuplicate = updatedCart.some(
        (item: IProduct) => item.name === name
      );

      if (!isDuplicate) {
        updatedCart.push({ name, price, description, imagePath, quantity:1 });
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


  function handleQuantity(index:number, num:string){
    const updatedCart = [...cart]
    updatedCart[index].quantity = +num
    localStorage.setItem("cart",JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    ).toFixed(2);
  };

  return (
    // <div>
    //   <HeroSection name={"Shopping Cart"} />
    //   <div className="my-10 md:my-20 2xl:my-32">
    //     <div className="mx-auto lg:mx-[150px] 2xl:mx-default-margin">
    //       <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
    //         <div className="my-10 md:my-14 px-4 lg:px-0">
    //           <Table className="w-[600px]">
    //             <TableCaption>Your shopping Cart!</TableCaption>
    //             <TableHeader>
    //               <TableRow>
    //                 <TableHead>Product</TableHead>
    //                 <TableHead>Price</TableHead>
    //                 <TableHead>Quantity</TableHead>
    //                 <TableHead>Total</TableHead>
    //               </TableRow>
    //             </TableHeader>
    //             <TableBody>
    //               {cart.map((item: IProduct, i: number) => (
    //                 <TableRow key={i}>
    //                   <TableCell>
    //                     <div className="flex items-center gap-2">
    //                       <Image
    //                         src={item.imagePath}
    //                         alt={item.name}
    //                         height={83}
    //                         width={87}
    //                         className="object-cover h-[83px] w-[87px] rounded"
    //                       />
    //                       <div>
    //                         <h3 className="text-sm text-black">{item.name}</h3>
    //                       </div>
    //                     </div>
    //                   </TableCell>
    //                   <TableCell className="text-sm text-[#15245E]">
    //                     ${item.price}
    //                   </TableCell>
    //                   <TableCell>
    //                   <div className="">
    //                   <input
    //                     type="number"
    //                     min={1}
    //                     value={item.quantity}
    //                     onChange={(e) =>
    //                     {handleQuantity(i,e.target.value)}
    //                     }
    //                     className="w-16 text-center border rounded"
    //                   />
    //                 </div>
    //                   </TableCell>
    //                   <TableCell className="text-sm text-[#15245E]">
    //                    ${Number(item.price) * (item.quantity || 1)}
    //                   </TableCell>

    //                   <TableCell>
    //                   <button onClick={() => removeItem(item.name)} className="ml-4 text-red-500 hover:text-red-700">
    //                 <Trash2 size={20} />
    //                  </button>
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //           <div className="flex justify-between mt-6">
    //             <Link href={'/products'}>
    //             <button className="bg-secondary text-white py-2 px-4 rounded">
    //               Continue Shopping
    //             </button>
    //             </Link>
    //           <Link href={'/checkout'}>
    //           <button className="bg-secondary text-white py-2 px-4 rounded">
    //               Next Step
    //             </button>
    //           </Link>
    //           </div>
    //         </div>

    //         <div className="my-10 md:my-14 px-4 lg:px-0">
    //         <div className="h-[260px] w-[270px] md:h-[264px] md:w-[371px] mx-4 md:mx-0 p-4 bg-maingray">
    //             <div className="flex items-center justify-between">
    //               <h4 className="font-semibold text-lg text-[#15245E]">
    //                 Subtotals:
    //               </h4>
    //               <h4 className="font-semibold text-base text-[#15245E]">
    //                 ${getTotalPrice()}
    //               </h4>
    //             </div>
    //             <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
    //             <div className="flex items-center justify-between mt-4">
    //               <h4 className="font-semibold text-lg text-[#15245E]">
    //                 Totals: 
    //               </h4>
    //               <h4 className="font-semibold text-base text-[#15245E]">
    //               ${getTotalPrice()}
    //               </h4>
    //             </div>
    //             <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />

    //             <p className="font-normal text-xs flex gap-2 my-3">
    //               <span>
    //                 <FaCircle className="text-[#19d16f]" />
    //               </span>{" "}
    //               Shipping & taxes calculated at checkout
    //             </p>

    //             <Link href={'/checkout'}>
    //             <button className="w-full h-[40px] text-center font-bold text-sm bg-[#19d16f] py-2 my-3 text-white">
    //               Proceed To Checkout
    //             </button>
    //             </Link>
    //           </div>

    //           <div>
    //             <h2 className=" text-lg text-center font-semibold lg:text-[20px] lg:leading-[23.44px] text-[#1D317B] my-5">
    //               Calculate Shopping
    //             </h2>
    //           </div>

    //           <div className="h-[260px] w-[270px] md:h-[264px] md:w-[371px] mx-4 md:mx-0 p-4 bg-maingray space-y-3">
    //             <div className="">
    //               <h4 className=" text-sm text-[#c5cbe3] mb-2">Bangladesh</h4>
    //             </div>
    //             <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />

    //             <div className="">
    //               <h4 className=" text-sm text-[#c5cbe3] mb-2">
    //                 Mirpur Dhaka - 1200
    //               </h4>
    //             </div>
    //             <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2 " />
    //             <div className="">
    //               <h4 className=" text-sm text-[#c5cbe3] mb-2">Postal Code</h4>
    //             </div>
    //             <hr className="border-1px border-solid border-[#E1E1E4] shadow-sm mt-2" />
    //             <button className="w-[70%] md:w-1/2 h-[41px] text-center font-bold text-base bg-secondary py-2 my-3 text-white">
    //               Calculate Shiping
    //             </button>
    //           </div>   
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
  <HeroSection name={"Shopping Cart"} />
  <div className="my-10 md:my-20 2xl:my-32">
    <div className="mx-auto lg:mx-[150px] 2xl:mx-default-margin px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
        {/* Cart Table Section */}
        <div className="my-10 md:my-14 w-full lg:w-[65%]">
          {/* <Table className="w-full">
            <TableCaption>Your Shopping Cart!</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item: IProduct, i: number) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.imagePath}
                        alt={item.name}
                        height={80}
                        width={80}
                        className="object-cover h-20 w-20 rounded"
                      />
                      <div>
                        <h3 className="text-sm text-black font-medium">{item.name}</h3>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-[#15245E]">${item.price}</TableCell>
                  <TableCell>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleQuantity(i, e.target.value)}
                      className="w-16 text-center border rounded-md"
                    />
                  </TableCell>
                  <TableCell className="text-sm text-[#15245E]">
                    ${Number(item.price) * (item.quantity || 1)}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => removeItem(item.name)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}

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
          {/* Product */}
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
          {/* Quantity */}
          <TableCell className="p-3">
            <input
              type="number"
              min={1}
              value={item.quantity}
              onChange={(e) => handleQuantity(i, e.target.value)}
              className="w-16 text-center border rounded-md text-xs md:text-sm p-1 2xl:text-3xl"
            />
          </TableCell>
          {/* Total */}
          <TableCell className="p-3 text-xs md:text-sm text-gray-600 2xl:text-3xl">
            ${Number(item.price) * (item.quantity || 1)}
          </TableCell>
          {/* Action */}
          <TableCell className="p-3">
            <button
              onClick={() => removeItem(item.name)}
              className="text-red-500 hover:text-red-700 transition duration-150 2xl:text-3xl"
            >
              <Trash2 className="text-lg 2xl:text-3xl"/>
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
            <Link href={'/checkout'}>
              <button className="bg-secondary text-white py-2 px-4 rounded hover:bg-secondary-dark 2xl:text-3xl">
                Next Step
              </button>
            </Link>
          </div>
        </div>

        {/* Summary Section */}
        <div className="my-10 md:my-14 w-full lg:w-[30%] space-y-6">
          {/* Subtotals and Totals */}
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
            <Link href={'/checkout'}>
              <button className="w-full bg-[#19d16f] text-white font-bold py-2 mt-4 rounded hover:bg-[#17c062] 2xl:text-3xl">
                Proceed To Checkout
              </button>
            </Link>
          </div>

          {/* Calculate Shipping */}
          <div>
            <h2 className="text-lg text-center font-semibold text-[#1D317B] mb-4 2xl:text-3xl">
              Calculate Shipping
            </h2>
            <div className="p-6 bg-maingray rounded-md space-y-4 2xl:text-3xl">
              <p className="text-sm text-gray-500">Bangladesh</p>
              <hr className="border-[#E1E1E4]" />
              <p className="text-sm text-gray-500">Mirpur Dhaka - 1200</p>
              <hr className="border-[#E1E1E4]" />
              <p className="text-sm text-gray-500">Postal Code</p>
              <hr className="border-[#E1E1E4]" />
              <button className="w-full bg-secondary text-white font-bold py-2 rounded hover:bg-secondary-dark 2xl:text-3xl">
                Calculate Shipping
              </button>
            </div>
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
       <Cart/>
      </Suspense>
    </div>
  )
}

export default ShoppingCart
