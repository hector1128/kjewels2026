import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return(
        <nav className="flex items-center justify-between p-8 m-8 z-10 bg-yellow-900 drop-shadow rounded-md font-serif text-xl shadow-black">
            <div className="flex items-center">
            
                
            <Link href="/">
            <span className="hidden md:block">
                KJEWELS
            </span>
            </Link>
            <Link href="/">
            <Image
                src="/kjewels.png"
                alt="KJEWELS"
                width={65}
                height={70}
                className="hover:opacity-80 transition-opacity md:hidden">

                </Image>
            </Link>
            
            </div>
            <div className="flex items-center gap-4">

            <ul className="hidden md:flex gap-3"></ul>
            
            <Link href="/">
                <Image
                src="/w_login.png"
                alt="LOGIN"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity">

                </Image>
            </Link>
            <Link href="/">
                <Image
                src="/w_cart.png"
                alt="CART"
                width={50}
                height={50}
                className="hover:opacity-80 transition-opacity">

                </Image>
            </Link>
            </div>
        </nav>
    )
}