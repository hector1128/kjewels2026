import Link from "next/link"
export default function CategoryButton({label, href}:{label: string, href: string}) {
    return (
        <Link href={href} className="border-2 border-black p-10 hover:bg-black hover:text-white transition-colors cursor-pointer">
            {label}
        </Link>
    )
}