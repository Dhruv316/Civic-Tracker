import React, {useState} from 'react'

export default function Hero(){
  const [email,setEmail] = useState('')
  const subscribe = async (e)=>{
    e.preventDefault()
    try{
      await fetch('http://localhost:5000/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})})
      alert('Subscribed!')
      setEmail('')
    }catch(err){
      alert('Failed to subscribe. Make sure backend is running on port 5000.')
    }
  }
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold mb-4">Keep your city clean, connected, and informed.</h2>
          <p className="text-gray-600 mb-6">CityKeep helps citizens report issues, receive updates, and engage with local authorities — all in one simple platform.</p>
          <form onSubmit={subscribe} className="flex max-w-md gap-2">
            <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded border"/>
            <button className="px-5 py-3 bg-sky-600 text-white rounded">Subscribe</button>
          </form>
          <div className="mt-6 flex space-x-4 text-sm text-gray-500">
            <div>Trusted by municipalities</div>
            <div>•</div>
            <div>Secure & Private</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-gray-400">[Hero graphic placeholder]</div>
          </div>
        </div>
      </div>
    </section>
  )
}