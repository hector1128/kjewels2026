import Link from "next/link";
import { User, ShoppingBag, Menu, Camera,  } from "lucide-react"
import Image from "next/image";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-serif antialiased min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury jewelry display with gold elements"
            className="w-full h-full object-cover opacity-80 dark:opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_XYyQO-N0n8YF2OESr23J_NSLyc1QPd_y8bOQRuOIrPmgVA8MiK-gNSZJ5fdLX1KUEfxppgWjk-0G2sdQnOjoUU27PItQk1Fy7QsYvlCNmfU1CU7Nql_uxvPYxKmVTo3PCInDxgMbGR3OWeaOLte5h97SCWvlMiKb1c36OhaiBy71fw4SJZFOxrI3PJpkf-LmMl18-n_He6_S7ZxjJi2xTWN-d2erGfsctF_CMc2xLL7IXmiikOETnThtnSdkhWSBTIp56UnI1RdG"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-light/20 via-transparent to-background-light dark:from-background-dark/20 dark:to-background-dark"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-[1px] bg-primary/50"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display italic mb-4">
            Jewelry, Your Way
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-xl mx-auto opacity-90">
            Affordable luxury crafted for the modern student.
          </p>
          <div className="mt-8 md:mt-10">
            <a
              className="inline-block border border-gray-900 dark:border-white px-8 md:px-10 py-3 md:py-4 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
              href="#shop"
            >
              Discover Collection
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center"
        id="about"
      >
        <div className="relative">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden border-[8px] md:border-[12px] border-white dark:border-gray-800 shadow-xl">
            <img
              alt="Student wearing elegant gold jewelry"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS3jTHk2K4JBVZTadxDlG2lvSGrHD37oPyY0rbWXF4dtXm3shAePqTXe1ME5MSVn5qu-IdNnNn35o1euFlvQfOvK4QdM_81_zU5Mb0uFph3q3Y08YoCGLzGv89UzYXyd6a-93FvQnrF0dWJQlAdXd4nlAqt0tj8M3ZtVD-0bmhj6FedmqQTMVCwcwXZ3Fng3_WYOQ38r1OW3htSbMqUVrCq5oXgNUgzmPJRK0igEWi-4UMEMKeVEf56483YbdQ63ipeMbe75F2zCst"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 opacity-20 dark:opacity-40">
            <svg
              className="w-full h-full stroke-primary fill-none"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 100 C50 70 30 50 10 50 M50 100 C50 70 70 50 90 50 M50 70 C40 40 60 40 50 10"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-xs uppercase tracking-[0.5em] text-primary font-bold">
            About Us
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display leading-tight">
            Small Business. <br />
            Big Heart. Based at UCF.
          </h3>
          <p className="text-lg md:text-xl leading-relaxed opacity-80">
            We sell <span className="text-primary font-medium italic">affordable modern</span>{" "}
            jewelry made for everyday wear. As students ourselves, we understand
            the balance between style and budget.
          </p>
          <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <span className="block text-xl md:text-2xl font-display text-primary">
                01
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                Stainless Steel
              </span>
            </div>
            <div className="text-center">
              <span className="block text-xl md:text-2xl font-display text-primary">
                02
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                Waterproof
              </span>
            </div>
            <div className="text-center">
              <span className="block text-xl md:text-2xl font-display text-primary">
                03
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold">
                Hypoallergenic
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Categories Section */}
      <section
        className="py-16 md:py-20 lg:py-24 bg-gray-50/50 dark:bg-black/20"
        id="shop"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Shop Categories
            </h2>
            <div className="w-16 h-[2px] bg-primary mx-auto mb-4"></div>
            <p className="uppercase tracking-widest text-[10px] md:text-xs opacity-60">
              Handpicked selections for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 h-auto md:min-h-[800px]">
            <div className="lg:col-span-4 h-80 md:h-[400px] lg:h-full relative group cursor-pointer overflow-hidden rounded">
              <img
                alt="Elegant Gold Necklaces"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIjfBFwhKdWcdL8CY_3BnRRIw87debAkKdM4JVWhwe2y_Q4KhBpGTY468L18IIdvS_K6AA8apHt-KAGPOu_cWIIMiKvmbgsEqEnQX-ag4FsYWnLcbwGXwya5n1K7FXQTTrNTif2n0a3_7hoxlSsxgG4zF228WkqZF7DB1gk1r2n2tnI-XJei5_7u-5xUQyhkUj2oXcerfDi0nd-H2jkDlCJ7Yine2-HieaN9RAxkkdSDbRjrOqIFxuGWDN9Vijm7DOjmWTGDquT5ZG"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-6 md:p-8">
                <div className="text-white">
                  <h4 className="text-xl md:text-2xl font-display italic">
                    Necklaces
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now →
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 h-80 md:h-[400px] lg:h-full relative group cursor-pointer overflow-hidden rounded">
              <img
                alt="Golden Hoop Earrings"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY2dKKpvTYqwt6coSY6154ZCyRhZTXZzdIycFux0jg61VcRiygiP8xdQgcbsiJWv34OR24JyuGH9yAiRsktkVzA9-VPsdy7GPj8DsEyh7cOQITtf9VwDGwsPi0asoxH2zxXvXvnLvqDP6mswkz3CHQdPRos7PSziV_I6-0GUlpDRg1fB32SzDnfY6i6DSFQOFAJU0nXGVhwEpE6XmdNdZ--MJ4GK1UVdsSJyFPqP4Ra-KjRQA5ZeqB1Kz-Rkyx7BRhzFWHQ-jU2Z52"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-6 md:p-8">
                <div className="text-white">
                  <h4 className="text-xl md:text-2xl font-display italic">
                    Earrings
                  </h4>
                  <span className="text-[10px] uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now →
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-2 lg:grid lg:grid-rows-2 gap-6 space-y-6 lg:space-y-0">
              <div className="relative h-80 md:h-[400px] lg:h-full group cursor-pointer overflow-hidden rounded">
                <img
                  alt="Bracelet stacks"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJHmQ-QYtT9F_pXDNPllrnrF9DyxjBzfsRnhlHd5aXvUmpoOEDzGRoZw-tqeuj9dXTeQkvllHHngd-I1pLfMLwkgT3Nx2y-Jq-4e09PfDJQMP-fjHEukhNvzXnuMCyYI0_h2rsScQN0oMqU-RtBRx-EoZfU370mD6CYWfJ9DY9ZSad8XOH2Bq_29ZKFtbuBup2hmW3UVWPpsA8iiE8s1ybZzb_Ama8zDNkZaJkyZiyrZsIHJ-wR9LG1XBrX11R-xvIVHNrKCStbGZ"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-6 md:p-8">
                  <div className="text-white">
                    <h4 className="text-xl md:text-2xl font-display italic">
                      Bracelets
                    </h4>
                    <span className="text-[10px] uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 h-80 md:h-[400px] lg:h-full">
                <div className="relative group cursor-pointer overflow-hidden rounded">
                  <img
                    alt="Modern gold rings"
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAEYjoc-LfPVEWoA9nf5WjdeWn1BNiNJShETnvh5AsoKCkbYjEkrc6tSYT147tREZqjGKWVkEPU6b02XcQLM6gtY8NFczfctoXGdC3FQUPjnnPygQP8ZbtpZiPQWXvolOR8mmsWaTg4Xm55v7yQ8WFrbvCcEWKUuagkXMg-uANrEZVQKC1wL3WfI0_ookczLvA8Oi-Vf2YyXBEW3HQcWUxrsy8zUz7_NwO4FuOsfv85SIBn6UDzqQQ4pJ2WTUHMMTT0dgEPQDqisX9"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <h4 className="text-lg md:text-xl font-display italic text-white text-center">
                      Rings
                    </h4>
                  </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded border border-primary/20 bg-primary/5 flex items-center justify-center p-4">
                  <div className="text-center group-hover:scale-110 transition duration-500">
                    <h4 className="text-lg md:text-xl font-display italic text-primary">
                      Others
                    </h4>
                    <p className="text-[8px] uppercase tracking-[0.3em] opacity-60">
                      Accessories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interested Section */}
      <section className="py-16 md:py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              r="40"
              stroke="white"
              strokeWidth="0.1"
            />
            <path
              d="M0 50 L100 50 M50 0 L50 100"
              stroke="white"
              strokeWidth="0.1"
            />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display italic mb-6 md:mb-8">
            Interested?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-90 tracking-wide font-light">
            DM US FOR MORE INFO <br className="hidden md:block" />
            MAKE SURE TO{" "}
            <span className="font-bold border-b border-white">FOLLOW</span> AND{" "}
            <span className="font-bold border-b border-white">REPOST</span> FOR{" "}
            <br className="hidden md:block" />
            <span className="text-xl md:text-2xl font-display italic block mt-4">
              20% OFF YOUR FIRST ORDER!!!
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              className="w-full md:w-auto bg-white text-primary px-10 md:px-12 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:shadow-2xl transition-all"
              href="https://www.instagram.com/kjewels.us/"
            >
              Follow on IG
            </a>
            <a
              className="w-full md:w-auto border border-white/50 text-white px-10 md:px-12 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-primary transition-all"
              href="mailto:[kjewelsbiz@gmail.com]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}