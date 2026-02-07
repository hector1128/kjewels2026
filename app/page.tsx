export default function Home() {
  return (
    <main>
      <div className="flex flex-row p-15 rounded-lg border-4 border-black">
        <div className="basis-2/4 self-start">KJewels</div>
        <div className="basis-1/4 self-center">Cart</div>
        <div className="basis-1/4 object-right">Login</div>
      </div>
      <div>Welcome to Kjewels</div>
      <div>UCF's Finest Jewelry</div>
      <div className="grid border border-width-2px border-black md: grid-cols-2">
        <div className="border border-width-2px p-25 border-black">Earrings</div>
        <div className="border border-width-2px p-25 border-black">Bracelets</div>
        <div className="border border-width-2px p-25 border-black">Necklaces</div>
        <div className="border border-width-2px p-25 border-black">Rings</div>
        <div className="border border-width-2px p-25 border-black">Other</div>
      </div>
    </main>
    

  )
}