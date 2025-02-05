'use client';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

export function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      const cartData = localStorage.getItem('cart');
      const cartItems = cartData ? JSON.parse(cartData) : [];

      if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }), // Send cart items as JSON
      });


      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { id } = await response.json();

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

      if (!stripe) {
        console.error('Failed to load Stripe.js');
        return;
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      if (error) {
        console.error('Checkout error:', error);
      }
    } catch (error) {
      console.log('some error occured')
    }
  };

  return (
    <div>
      <button onClick={handleCheckout} className="bg-secondary hover:bg-pink-600 text-white text-sm lg:text-base py-3 px-6 rounded-md shadow-md transition-all">
        CheckOut
      </button>
    </div>
  );
}