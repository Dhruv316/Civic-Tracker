import React from 'react'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-teal-400 rounded flex items-center justify-center text-white font-bold">CK</div>
          <h1 className="text-xl font-semibold">CityKeep</h1>
        </div>
        <nav className="space-x-6">
          <a className="text-gray-600 hover:text-gray-900" href="#features">Features</a>
          <a className="text-gray-600 hover:text-gray-900" href="#pricing">Pricing</a>
          <a className="text-gray-600 hover:text-gray-900" href="#contact">Contact</a>
          <a className="px-4 py-2 bg-sky-600 text-white rounded hover:opacity-95" href="#subscribe">Get Started</a>
        </nav>
      </div>
    </header>
  )
}