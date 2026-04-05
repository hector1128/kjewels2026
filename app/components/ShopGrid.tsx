"use client";
 
import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, X, ShoppingBag, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
 
// 1. UPDATED TYPES: Added Variant tracking
type ProductVariant = {
  id: string | number;
  product_id: string | number;
  size: string | null;
  width: string | null;
  stock: number;
};

type Product = {
  id: string | number;
  name: string;
  price: number;
  category: string;
  material: string;
  gender: string;
  image_url: string;
  variants: ProductVariant[]; // The new array coming from your Supabase join
};
 
const GENDER_OPTIONS = ['Feminine', 'Masculine', 'Unisex'];
const CATEGORY_OPTIONS = ['Necklaces', 'Earrings', 'Rings', 'Bracelets', 'Other'];
const MATERIAL_OPTIONS = ['Gold', 'Silver', 'Other'];
const PRICE_OPTIONS = ['Any Price', 'Under $25', '$25 - $50', 'Over $50'];
 
export default function ShopGrid({ initialProducts }: { initialProducts: Product[] }) {
  // 1. FILTER & SORT STATE
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("Any Price");
  const [sortOption, setSortOption] = useState<string>("Featured");
 
  // 2. UI SLIDE-OUT STATES
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);

  // 3. PRODUCT VARIATION STATES
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedWidth, setSelectedWidth] = useState<string>("");
 
  // 4. DERIVE AVAILABLE OPTIONS FROM VARIANTS
  // We use useMemo so this only recalculates when the selected product changes
  const availableSizes = useMemo(() => {
    if (!quickAddProduct?.variants) return [];
    // Extract unique sizes that aren't null
    const sizes = quickAddProduct.variants.map(v => v.size).filter(Boolean) as string[];
    return Array.from(new Set(sizes));
  }, [quickAddProduct]);

  const availableWidths = useMemo(() => {
    if (!quickAddProduct?.variants) return [];
    // Extract unique widths that aren't null
    const widths = quickAddProduct.variants.map(v => v.width).filter(Boolean) as string[];
    return Array.from(new Set(widths));
  }, [quickAddProduct]);
 
  // 5. TOGGLE LOGIC
  const toggleGender = (gender: string) => {
    setSelectedGenders(prev =>
      prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
    );
  };
 
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };
 
  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  const handleOpenQuickAdd = (product: Product) => {
    setQuickAddProduct(product);
    setQuantity(1);
    setSelectedSize("");
    setSelectedWidth("");
  };
 
  // 6. THE CHECKER (Filter + Sort)
  const sortedAndFilteredProducts = initialProducts
    .filter(product => {
      const matchesGender =
        selectedGenders.length === 0 || selectedGenders.includes(product.gender);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesMaterial =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
 
      let matchesPrice = true;
      if (selectedPrice === 'Under $25') matchesPrice = product.price < 25;
      else if (selectedPrice === '$25 - $50') matchesPrice = product.price >= 25 && product.price <= 50;
      else if (selectedPrice === 'Over $50') matchesPrice = product.price > 50;
 
      return matchesGender && matchesCategory && matchesMaterial && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Newest') return Number(b.id) - Number(a.id);
      return 0;
    });
 
  // 7. REUSABLE FILTER UI
  const FilterContent = () => (
    <div className="space-y-10">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
          Gender
        </h3>
        <div className="space-y-3">
          {GENDER_OPTIONS.map((gender) => (
            <label key={gender} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedGenders.includes(gender)}
                onChange={() => toggleGender(gender)}
                className="w-4 h-4 border-gray-300 text-primary focus:ring-primary rounded-sm"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-primary transition-colors">
                {gender}
              </span>
            </label>
          ))}
        </div>
      </div>
 
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
          Category
        </h3>
        <div className="space-y-3">
          {CATEGORY_OPTIONS.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 border-gray-300 text-primary focus:ring-primary rounded-sm"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-primary transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>
 
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
          Material
        </h3>
        <div className="space-y-3">
          {MATERIAL_OPTIONS.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="w-4 h-4 border-gray-300 text-primary focus:ring-primary rounded-sm"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-primary transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>
 
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {PRICE_OPTIONS.map((priceOption) => (
            <label key={priceOption} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === priceOption}
                onChange={() => setSelectedPrice(priceOption)}
                className="w-4 h-4 border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-primary transition-colors">
                {priceOption}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
 
  return (
    <>
      {/* MOBILE FILTER FULL-SCREEN OVERLAY */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ease-in-out ${
          isMobileFilterOpen ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMobileFilterOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />
        <div 
          className={`absolute top-0 left-0 w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 p-6 overflow-y-auto shadow-2xl flex flex-col text-gray-900 dark:text-white transform transition-transform duration-300 ease-out ${
            isMobileFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="font-display italic text-3xl">Filters</h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1">
            <FilterContent />
          </div>
          <div className="pt-8 mt-auto">
            <Button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none"
            >
              View {sortedAndFilteredProducts.length} Results
            </Button>
          </div>
        </div>
      </div>

      {/* QUICK ADD DRAWER OVERLAY */}
      <div 
        className={`fixed inset-0 z-[110] transition-all duration-300 ease-in-out ${
          quickAddProduct !== null ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            quickAddProduct !== null ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setQuickAddProduct(null)}
        />
        <div 
          className={`absolute top-0 right-0 w-full max-w-md h-full bg-white dark:bg-gray-900 p-6 overflow-y-auto shadow-2xl flex flex-col text-gray-900 dark:text-white transform transition-transform duration-300 ease-out ${
            quickAddProduct !== null ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            <h2 className="font-display italic text-3xl">Quick Add</h2>
            <button
              onClick={() => setQuickAddProduct(null)}
              className="hover:text-primary transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {quickAddProduct && (
            <div className="flex-1 flex flex-col gap-6">
              <div className="relative aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={quickAddProduct.image_url}
                  alt={quickAddProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-medium mb-1">{quickAddProduct.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{quickAddProduct.category}</p>
                <p className="text-lg font-medium">${quickAddProduct.price.toFixed(2)}</p>
              </div>
              
              <div className="space-y-6">
                
                {/* DYNAMIC SIZE SELECTION (Rings or Bracelets) */}
                {availableSizes.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-3">Size</span>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map(size => {
                        // Check if this specific size is out of stock across all widths
                        const isOutOfStock = !quickAddProduct.variants.some(v => v.size === size && v.stock > 0);
                        
                        return (
                          <button
                            key={size}
                            onClick={() => !isOutOfStock && setSelectedSize(size)}
                            disabled={isOutOfStock}
                            className={`px-4 py-2 min-w-[40px] flex items-center justify-center text-sm border transition-colors rounded-sm
                              ${selectedSize === size 
                                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-gray-900 dark:border-white' 
                                : isOutOfStock 
                                  ? 'border-gray-200 text-gray-300 dark:border-gray-800 dark:text-gray-600 cursor-not-allowed bg-gray-50 dark:bg-gray-900 line-through'
                                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white'
                              }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* DYNAMIC WIDTH SELECTION (Usually Bracelets) */}
                {availableWidths.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-3">Width</span>
                    <div className="flex flex-wrap gap-2">
                      {availableWidths.map(width => {
                        // Check if this specific width is out of stock (respecting selected size if applicable)
                        const isOutOfStock = !quickAddProduct.variants.some(v => 
                          v.width === width && 
                          (selectedSize ? v.size === selectedSize : true) && 
                          v.stock > 0
                        );

                        return (
                          <button
                            key={width}
                            onClick={() => !isOutOfStock && setSelectedWidth(width)}
                            disabled={isOutOfStock}
                            className={`px-4 py-2 text-sm font-medium border transition-colors rounded-sm
                              ${selectedWidth === width 
                                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-gray-900 dark:border-white' 
                                : isOutOfStock
                                  ? 'border-gray-200 text-gray-300 dark:border-gray-800 dark:text-gray-600 cursor-not-allowed bg-gray-50 dark:bg-gray-900 line-through'
                                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white'
                              }`}
                          >
                            {width}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* QUANTITY SELECTION */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest block mb-3">Quantity</span>
                  <div className="flex items-center w-32 border border-gray-300 dark:border-gray-600 rounded-sm">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center font-medium">
                      {quantity}
                    </div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          <div className="pt-8 mt-auto shrink-0">
            <Button
              onClick={() => {
                // Determine the specific variant ID chosen
                const selectedVariant = quickAddProduct?.variants.find(v => 
                  (availableSizes.length === 0 || v.size === selectedSize) &&
                  (availableWidths.length === 0 || v.width === selectedWidth)
                );

                if (!selectedVariant && (availableSizes.length > 0 || availableWidths.length > 0)) {
                  alert("Please select all options before adding to cart.");
                  return;
                }

                console.log("Added to cart:", {
                  product_id: quickAddProduct?.id,
                  variant_id: selectedVariant?.id,
                  name: quickAddProduct?.name,
                  quantity: quantity,
                  size: selectedSize || "N/A",
                  width: selectedWidth || "N/A"
                });
                
                setQuickAddProduct(null);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Add to Cart - ${(quickAddProduct ? (quickAddProduct.price * quantity).toFixed(2) : "0.00")}
            </Button>
          </div>
        </div>
      </div>
 
      {/* MAIN GRID LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-12">
 
        {/* Mobile Toolbar */}
        <div className="lg:hidden flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-4">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
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
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Showing {sortedAndFilteredProducts.length} products
            </span>
            <select
              className="bg-transparent text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest border-none focus:ring-0 cursor-pointer hover:text-primary transition-colors"
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
            <div className="text-center py-20 text-gray-500">
              No products found matching your filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {sortedAndFilteredProducts.map((product) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative aspect-[4/5] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      <Button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenQuickAdd(product);
                        }}
                        className="w-full bg-white/90 hover:bg-white text-black font-bold tracking-widest uppercase text-[10px] py-4 rounded-none backdrop-blur-sm shadow-lg"
                      >
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