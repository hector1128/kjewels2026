import Navbar from "../components/navBar";
import Footer from "../components/footer";
import ShopGrid from "../components/ShopGrid";
import { supabase } from "@/lib/supabase";

// Next.js will re-fetch this data every 60 seconds so your inventory stays fresh
export const revalidate = 60; 

export default async function ShopPage() {
  
  // 1. Fetch the data directly from your Supabase 'products' table
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching products from Supabase:", error);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
      <Navbar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display italic text-gray-900 dark:text-white mb-4">
            The Collection
          </h1>
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Waterproof. Hypoallergenic. Effortless.
          </p>
        </div>

        {/* 2. Pass the fetched Supabase data into the Client Component */}
        <ShopGrid initialProducts={products || []} />
        
      </main>

      <Footer />
    </div>
  );
}