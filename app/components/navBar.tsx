"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  // State to track if the mobile dropdown is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* LEFT SIDE: Navigation Links & Mobile Menu Button */}
        <div className="flex items-center">
          
          {/* Mobile Menu Button (Hidden on Large Screens) */}
          <button 
            className="lg:hidden hover:text-primary transition-colors flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Links (Hidden on Small/Medium Screens) */}
          <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-bold">
            <Link href="/#about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
          </div>
        </div>

        {/* CENTER: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <Link
            className="text-2xl md:text-3xl font-serif font-medium tracking-[0.25em] leading-none whitespace-nowrap"
            href="/"
          >
            <span className="text-primary italic text-yellow-600">K</span>JEWELS
          </Link>
        </div>

        {/* RIGHT SIDE: Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href={'/login'} className="flex items-center hover:text-primary transition-colors">
            <User className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
          <Link href={'/cart'} className="flex items-center hover:text-primary transition-colors">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-xl px-6 py-6 flex flex-col space-y-6 text-xs uppercase tracking-widest font-bold">
          <Link 
            href="/#about" 
            className="hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)} // Closes menu when clicked
          >
            About Us
          </Link>
          <Link 
            href="/shop" 
            className="hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)} // Closes menu when clicked
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}