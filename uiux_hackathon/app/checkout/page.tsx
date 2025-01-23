"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import HeroSection from "../components/Hero/page"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  imagePath: string,
  description:string
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(()=>{
    const storedCartItem = localStorage.getItem("cart");
    if (storedCartItem) {
        setCartItems(JSON.parse(storedCartItem));
      }
  },[])


const updateQuantity = (itemName: string, num: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.name === itemName) {
        return { ...item, quantity: num };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };


  const removeItem = (name: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== name);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <>
    <HeroSection name={"Check Out"} />
    <div className=" lg:mx-[150px] 2xl:mx-default-margin min-h-screen mx-auto  py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full px-4 md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
          {cartItems.map((item,i) => (
           <div className="" key={i} >
             <div className="flex flex-col md:flex-row items-center border-b py-4">
             <div className="flex items-start">
             <Image
                src={item.imagePath}
                alt={item.name}
                width={100}
                height={80}
                className="rounded-md border-[1px]"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 md:w-[80%]">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
               <div>
               <span>QTY:</span>
                  <input type="number" value={item.quantity} min={1} onChange={(e) =>
                    updateQuantity(item.name, parseInt(e.target.value))
                  } className="w-16 text-center border rounded">
                  </input>
               </div>
                 <div className="flex gap-3">
                 <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
             <button onClick={() => removeItem(item.name)} className="ml-4 text-red-500 hover:text-red-700">
               <Trash2 size={20} />
             </button>
                 </div>
                </div>
             </div>
              </div>
            </div>
           </div>
          ))}
        </div>
        <div className="md:w-1/2 my-14">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-secondary text-white py-2 px-4 rounded-md mt-4 hover:bg-pink-500 transition duration-300">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

