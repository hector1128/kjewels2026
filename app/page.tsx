import CategoryButton from "./components/CategoryButton";

export default function Home() {
  const categories = ["Earrings", "Bracelets", "Necklaces", "Rings", "Other"];
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="flex gap-4 flex-row p-14 rounded-lg border-4 border-black">
        <button className="button cursor-pointer basis-2/4 text-left">KJewels</button>
        <button className="button cursor-pointer basis-1/4 text-center">Cart</button>
        <button className="button cursor-pointer basis-1/4 text-right">Login</button>
      </div>
      <h1 className="text-2xl font-bold">Welcome to Kjewels</h1>
      <p>UCF's Finest Jewelry</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {categories.map((item) => (
          <CategoryButton key={item} label={item} />
        ))}
      </div>
    </main>
  )
}