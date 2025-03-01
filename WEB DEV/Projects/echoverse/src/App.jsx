import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import Pricing from './components/Pricing'
import Team from './components/Team'
import Footer from './components/Footer'




function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero></Hero>
      <Features></Features>
      <Work></Work>
      <Pricing></Pricing>
      <Team></Team>
      <Footer></Footer>
      </div>     
    </>
  )
}

export default App
