import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-6">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-black p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-900">
        
        {/* Brand Header */}
        <div className="text-center">
          <Link href="/" className="text-2xl font-serif font-medium tracking-[0.25em]">
            <span className="text-primary italic text-yellow-600">K</span>JEWELS
          </Link>
          <h2 className="mt-6 text-3xl font-display italic text-gray-900 dark:text-white">
            Join the Club
          </h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Create your new account
          </p>
        </div>

        {/* Register Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                Choose a Username
              </Label>
              <Input 
                id="username" 
                name="username" 
                type="text" 
                placeholder="e.g., modern_minimalist" 
                required 
                className="rounded-none border-gray-300 dark:border-gray-800 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                Create a Password
              </Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="rounded-none border-gray-300 dark:border-gray-800 focus-visible:ring-primary"
              />
            </div>

            {/* NEW: Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                Confirm Password
              </Label>
              <Input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="rounded-none border-gray-300 dark:border-gray-800 focus-visible:ring-primary"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none">
            Create Account
          </Button>
        </form>

        {/* Toggle to Login */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline">
              SIGN IN
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}