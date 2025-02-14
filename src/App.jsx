import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import SubHeroSection from './Components/SubHeroSection/SubHeroSection.jsx'
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <>
    <div className='bg-white'>
      <Navbar/>
      <div id="shopNotification" className='bg-[#1D1D1F] font-semi bold text-center text-sm text-white'>
      Get up to 24 months of No Cost EMI‡ plus up to ₹10000.00 instant cashback* on selected products with eligible cards. <a className='text-[#2997FF] cursor-pointer '>Shop</a>
      </div>
      <Hero/>
      <SubHeroSection/>
    </div>
    <div className='w-full flex items-center justify-center'>
      <Footer/>
    </div>
    </>
  )
}

export default App