export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";

interface IProductDetails {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  quantity: number;
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { cartItems } = await request.json();
    console.log('Cart Items:', cartItems); 

    if (!cartItems || cartItems.length === 0) {
      throw new Error('Cart is empty');
    }

    const lineItems = cartItems.map((item: IProductDetails) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.imagePath],
        },
        unit_amount: item.price * 100, 
      },
      quantity: item.quantity,
    }));

    console.log('Line Items:', lineItems);

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/orders`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    });

    console.log('Checkout Session:', session); 

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Error in API route:', error); // Log the error
    return NextResponse.json({ error: 'Something went wrong!' }, { status: 500 });
  }
}