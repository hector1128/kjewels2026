"use client";

import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Footer() {
  return (
    <footer
      className="bg-background-light dark:bg-background-dark py-12 md:py-16 border-t border-gray-100 dark:border-gray-900"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        <div className="col-span-1">
          <Link
            className="text-2xl font-serif font-medium tracking-[0.25em] block mb-6"
            href="/"
          >
            <span className="text-primary italic text-yellow-600">K</span>JEWELS
          </Link>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs">
            Designed for the dreamers and the doers. High quality jewelry that
            doesn't break the bank.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-8 col-span-1 lg:col-span-1">
          <div>
            <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 text-primary">
              Links
            </h5>
            <ul className="space-y-3 md:space-y-4 text-sm opacity-80 flex flex-col items-start">
              
              {/* Shipping Policy Modal */}
              <li>
                <Dialog>
                  <DialogTrigger className="hover:text-primary transition-colors text-left cursor-pointer">
                    Shipping Policy
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 rounded-none sm:rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="font-display italic text-2xl mb-2">Shipping Policy</DialogTitle>
                      <DialogDescription>
                        Review our shipping times and delivery methods.
                      </DialogDescription>
                    </DialogHeader>
                    {/* NEW: Safe div container for the actual paragraphs */}
                    <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 mt-4">
                      <p>All orders are shipped every <strong>TUESDAYS</strong> and <strong>THURSDAYS</strong> (excluding holidays).</p>
                      <p><strong>Local Delivery:</strong> We offer fast local delivery directly from the UCF campus for students in the surrounding Orlando area.</p>
                      <p><strong>Standard Shipping:</strong> Free standard shipping on all orders over $50. For orders under $50, shipping is calculated at checkout.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>

              {/* Return Policy Modal */}
              <li>
                <Dialog>
                  <DialogTrigger className="hover:text-primary transition-colors text-left cursor-pointer">
                    Return Policy
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 rounded-none sm:rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="font-display italic text-2xl mb-2">Return Policy</DialogTitle>
                      <DialogDescription>
                        Learn about our 14-day return window.
                      </DialogDescription>
                    </DialogHeader>
                    {/* NEW: Safe div container for the actual paragraphs */}
                    <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 mt-4">
                      <p>We want you to love your jewelry. We accept returns up to 14 days after delivery, provided the item is unused and in its original condition.</p>
                      <p>If your item arrives damaged in any way, please contact us immediately at kjewelsbiz@gmail.com with your order number and a photo of the item's condition.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>

              {/* Terms of Service Modal */}
              <li>
                <Dialog>
                  <DialogTrigger className="hover:text-primary transition-colors text-left cursor-pointer">
                    Terms of Service
                  </DialogTrigger>
                  <DialogContent className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 rounded-none sm:rounded-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-display italic text-2xl mb-2">Terms of Service</DialogTitle>
                      <DialogDescription>
                        Our general terms and conditions.
                      </DialogDescription>
                    </DialogHeader>
                    {/* NEW: Safe div container for the actual paragraphs */}
                    <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 mt-4">
                      <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.</p>
                      <p>We reserve the right to refuse service to anyone for any reason at any time. Prices for our products are subject to change without notice.</p>
                      <p>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>

            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 text-primary">
              Contact
            </h5>
            <ul className="space-y-3 md:space-y-4 text-sm opacity-80">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kjewelsbiz@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Orlando, FL (UCF Campus)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 text-primary">
            Follow Our Journey
          </h5>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Link href={'https://www.instagram.com/kjewels.us/'}>
                <Camera className="w-5 h-5" />
              </Link>
            </div>
            <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all relative overflow-hidden">
              <Link href={'/'} className="w-full h-full flex items-center justify-center">
                <Image
                  src={'/tik-tok_3046115-removebg-preview.png'}
                  alt="TikTok"
                  fill
                  className="object-cover p-1"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-12 md:mt-16 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between opacity-40 text-[10px] uppercase tracking-widest">
        <p>© 2026 K Jewels. All rights reserved.</p>
        <p className="mt-4 md:mt-0 italic font-display lowercase">
          Jewelry, your way.
        </p>
      </div>
    </footer>
  );
}