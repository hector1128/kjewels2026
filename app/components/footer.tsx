import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, Mail } from "lucide-react";

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
            <ul className="space-y-3 md:space-y-4 text-sm opacity-80">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Return Policy
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 text-primary">
              Contact
            </h5>
            <ul className="space-y-3 md:space-y-4 text-sm opacity-80">
              <li className="flex items-center space-x-2">
                <Mail />
                <span>kjewelsbiz@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                
                <MapPin />
              
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
                <Camera />
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
        <p>© 2025 K Jewels. All rights reserved.</p>
        <p className="mt-4 md:mt-0 italic font-display lowercase">
          Jewelry, your way.
        </p>
      </div>
    </footer>
  );
}