export default function Home() {
  return (
    <main>
      <div className="flex flex-row p-14 rounded-lg border-4 border-black">
        <button className="basis-2/4 self-">KJewels</button>
        <button className="basis-1/4 self-center">Cart</button>
        <button className="basis-1/4 object-right">Login</button>
      </div>
      <div>Welcome to Kjewels</div>
      <div>UCF's Finest Jewelry</div>
      <div className="grid border border-2 border-black md: grid-cols-2">
        <button className="button cursor-pointer justify-self-center p-20 border-black">Earrings</button>
        <button className="button cursor-pointer justify-self-center p-20 border-black">Bracelets</button>
        <button className="button cursor-pointer justify-self-center p-20 border-black">Necklaces</button>
        <button className="button cursor-pointer justify-self-center p-20 border-black">Rings</button>
        <button className="button cursor-pointer justify-self-center p-20 border-black">Other</button>
      </div>
    </main>
  )
}