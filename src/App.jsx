import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Inviteeviews from './pages/Inviteeviews'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'

function App() {
  const path = window.location.pathname
  console.log('path', path)
  return (
    <>
      <main className='min-h-screen flex flex-col justify-between overflow-x-hidden'>
        <Navbar />
        <div className='top-0'>
          {path === '/' && <Slider />}
        </div>
        <div className='mt-[8rem]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inviteeviews" element={<Inviteeviews />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
