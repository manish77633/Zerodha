import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/HomePage.jsx'
import Signup from './components/signup/Signup.jsx'
import AboutPage from './components/about/AboutPage.jsx'
import PricingPage from './components/pricing/PricingPage.jsx' 
import ProductPage from './components/products/ProductPage.jsx' 
import SupportPage from './components/support/SupportPage.jsx' 
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import NotFound from './NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      {/* Dhyaan dein: Navbar mein agar /product lowercase hai toh yahan bhi wahi rakhein */}
      <Route path="/product" element={<ProductPage />} /> 
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)