"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, X } from "lucide-react"; // Added X for the mobile close button
import { Button } from "@/components/ui/button";

type Product = {
  id: string | number;
  name: string;
  price: number;
  category: string;
  material: string;
  image_url: string; 
};

const CATEGORY_OPTIONS = ['Necklaces', 'Earrings', 'Rings', 'Bracelets'];
const MATERIAL_OPTIONS = ['18k Gold Plated', 'Stainless Steel', 'Sterling Silver'];
const PRICE_OPTIONS = ['Any Price', 'Under $25', '$25 - $50', 'Over $50']; 

export default function ShopGrid({ initialProducts }: { initialProducts: Product[] }) {
  // 1. FILTER & SORT STATE
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("Any Price");
  const [sortOption, setSortOption] = useState<string>("Featured");
  
  // 2. MOBILE UI STATE
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // 3. TOGGLE LOGIC
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]);
  };

  // 4. THE CHECKER (Filter + Sort)
  const sortedAndFilteredProducts = initialProducts
    .filter(product => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      
      let matchesPrice = true;
      if (selectedPrice === 'Under $25') matchesPrice = product.price < 25;
      else if (selectedPrice === '$25 - $50') matchesPrice = product.price >= 25 && product.price <= 50;
      else if (selectedPrice === 'Over $50') matchesPrice = product.price > 50;
      
      return matchesCategory && matchesMaterial && matchesPrice;
    })
    .sort((a, b) => {
      // The Sorting Logic!
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Newest') return Number(b.id) - Number(a.id);
      return 0; // Default "Featured" order
    });

  // 5. REUSABLE FILTER UI
  // We extract this so we don't have to write the checkboxes twice (once for desktop, once for mobile)
  const FilterContent = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">Category</h3>
        <div className="space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => toggleCategory(cat)} className="w-4 h-4 border-gray-300 text-primary focus:ring-primary rounded-sm" />
              <span className="text-sm text-white dark:text-gray-400 group-hover:text-primary transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">Material</h3>
        <div className="space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" checked={selectedMaterials.includes(mat)} onChange={() => toggleMaterial(mat)} className="w-4 h-4 border-gray-300 text-primary focus:ring-primary rounded-sm" />
              <span className="text-sm text-white dark:text-gray-400 group-hover:text-primary transition-colors">{mat}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">Price</h3>
        <div className="space-y-3">
          {PRICE_OPTIONS.map((priceOption) => (
            <label key={priceOption} className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="price" checked={selectedPrice === priceOption} onChange={() => setSelectedPrice(priceOption)} className="w-4 h-4 border-gray-300 text-primary focus:ring-primary" />
              <span className="text-sm text-white dark:text-gray-400 group-hover:text-primary transition-colors">{priceOption}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* MOBILE FILTER FULL-SCREEN OVERLAY */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          {/* Dimmed Background */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          {/* Slide-out Menu */}
          <div className="relative w-[85%] max-w-sm h-full bg-background-light dark:bg-background-dark p-6 overflow-y-auto shadow-2xl flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
              <h2 className="font-display italic text-3xl">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)} className="hover:text-primary transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Inject the reusable checkboxes here */}
            <div className="flex-1">
              <FilterContent />
            </div>

            <div className="pt-8 mt-auto">
              <Button onClick={() => setIsMobileFilterOpen(false)} className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none">
                View {sortedAndFilteredProducts.length} Results
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN GRID LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Mobile Toolbar */}
        <div className="lg:hidden flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
          <button onClick={() => setIsMobileFilterOpen(true)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
          
          {/* Mobile Sort Dropdown */}
          <div className="relative flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            Sort <ChevronDown className="w-4 h-4" />
            <select 
              className="absolute inset-0 opacity-0 cursor-pointer w-full"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
             <FilterContent />
          </div>
        </aside>

        {/* Product Grid Area */}
        <section className="flex-1">
          {/* Desktop Top Bar */}
          <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
            <span className="text-xs uppercase tracking-widest text-gray-500">Showing {sortedAndFilteredProducts.length} products</span>
            <select 
              className="bg-transparent text-xs font-bold uppercase tracking-widest border-none focus:ring-0 cursor-pointer hover:text-primary transition-colors"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {sortedAndFilteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">No products found matching your filters.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {sortedAndFilteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative aspect-[4/5] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={product.image_url} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      <Button className="w-full bg-white/90 hover:bg-white text-black font-bold tracking-widest uppercase text-[10px] py-4 rounded-none backdrop-blur-sm shadow-lg">
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-serif font-medium text-gray-900 dark:text-white leading-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">
                      {product.category}
                    </p>
                    <p className="text-sm font-medium mt-auto">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </div>
    </>
  );
}