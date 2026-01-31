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
      <div className="grid ">
        <div>Earrings</div>
        <div>Bracelets</div>
        <div>Necklaces</div>
        <div>Rings</div>
        <div>Other</div>
      </div>
    </main>
    

  )
}