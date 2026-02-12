import CategoryButton from "./components/catButton";

export default function Home() {
  const categories = [
  { name: "Earrings", slug: "/earrings" },
  { name: "Bracelets", slug: "/bracelets" },
  { name: "Necklaces", slug: "/necklaces" },
  { name: "Rings", slug: "/rings" },
  { name: "Other", slug: "/other" },
];
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
          <button className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform tracking-wide">
            KJEWELS
          </button>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
              Cart
            </button>
            <button className="px-6 py-2.5 rounded-xl border-2 border-amber-500 text-amber-700 font-medium hover:bg-amber-50 hover:scale-105 transition-all">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-block mb-6">
          <img 
            src="/1.png" 
            alt="KJewels Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight">
          Welcome to KJewels
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-900/70 font-light tracking-wide mb-4">
          UCF's Finest Jewelry
        </p>
        
        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-amber-500/10 border border-blue-200">
          <p className="text-sm text-blue-800 font-medium">
            Stainless Steel, Hypoallergenic
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <CategoryButton
              key = {item.slug}
              label = {item.name}
              href = {item.slug}
            />
          ))}
          </div>
          </div>

      {/* Footer accent */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600" />
    </main>
  );
}