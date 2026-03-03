import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dummy data to visualize the skeleton
const CART_ITEMS = [
  
];

export default function CartPage() {
  // Simple calculations for the skeleton
  const subtotal = CART_ITEMS.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping over $50 logic!

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-display italic text-gray-900 dark:text-white">
            Your Bag
          </h1>
          <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {CART_ITEMS.length} items in your order
          </p>
        </div>

        {/* Main Grid: Cart Items (Left) & Summary (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            {CART_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-gray-200 dark:border-gray-800"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 dark:bg-gray-900 rounded-md overflow-hidden shrink-0">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-serif font-medium">{item.name}</h3>
                      <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                        {item.material}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>

                  {/* Controls: Quantity & Remove */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-md">
                      <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button className="text-xs uppercase tracking-widest text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 dark:bg-black p-8 rounded-xl border border-gray-100 dark:border-gray-900 sticky top-28">
              <h2 className="text-xl font-display italic mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Estimated Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold uppercase tracking-widest">Total</span>
                    <span className="text-xl font-serif font-medium">${(subtotal + shipping).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none flex items-center justify-center gap-2">
                Secure Checkout
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="mt-6 text-center">
                <Link href="/#shop" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-primary transition-colors hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}