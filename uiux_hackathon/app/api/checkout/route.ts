export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { currentUser } from "@clerk/nextjs/server";
import { getUserFromClerk } from "@/data/userApi";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

interface IProductDetails {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  quantity: number;
}

let totalAmount: number | null = null;

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    const { cartItems } = await request.json();
    console.log("Cart Items:", cartItems);

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // 1️⃣ **Process Stripe Checkout**
    const lineItems = cartItems.map((item: IProductDetails) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.imagePath],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    totalAmount = session.amount_total;

    // 2️⃣ **Save Order in Sanity**
    const productLength = cartItems.length;
    const userDetails =await getUserFromClerk()

   console.log('testing id', userDetails.userID)

    const result = await client.create({
      _type: "shipment",
      _id: `${userDetails.userID}`,
      userID: user.id,
      userName: userDetails.userName,
      orderDate: new Date().toISOString(),
      productLength,
      totalAmount,
      status: "shipped",
    });

    console.log("Order saved in Sanity:", result);

    return NextResponse.json({ id: session.id, message: "Order placed successfully" });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}

export function getAmountTotal() {
  return totalAmount;
}