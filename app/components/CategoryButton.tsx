export default function CategoryButton({label}:{label: string}) {
    return (
        <button className="border-2 border-black p-10 hover:bg-black hover:text-white transition-colors cursor-pointer">
            {label}
        </button>
    )
}