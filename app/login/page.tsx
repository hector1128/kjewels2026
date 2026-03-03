import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-6">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-black p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-900">
        
        {/* Brand Header */}
        <div className="text-center">
          <Link href="/" className="text-2xl font-serif font-medium tracking-[0.25em]">
            <span className="text-primary italic text-yellow-600">K</span>JEWELS
          </Link>
          <h2 className="mt-6 text-3xl font-display italic text-gray-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                Username
              </Label>
              <Input 
                id="username" 
                name="username" 
                type="text" 
                placeholder="Enter your username" 
                required 
                className="rounded-none border-gray-300 dark:border-gray-800 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300">
                  Password
                </Label>
                <Link href="#" className="text-[10px] uppercase tracking-widest text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="rounded-none border-gray-300 dark:border-gray-800 focus-visible:ring-primary"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest uppercase text-xs py-6 rounded-none">
            Sign In
          </Button>
        </form>

        {/* Toggle to Register */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary font-bold hover:underline">
              CREATE ONE
            </Link>
          </p>
        </div>
        
      </div>
    </div>
  );
}