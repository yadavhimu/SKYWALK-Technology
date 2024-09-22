import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import ContactUs from './pages/ContactUs'
import OtherServices from './pages/OtherServices'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WebsiteDesigning from './pages/WebsiteDesigning'
import WebsiteDevelopment from './pages/WebsiteDevelopment'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import GoogleAdwords from './pages/GoogleAdwords'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/otherservices" element={<OtherServices/>}/>
        <Route path="/websitedesigning" element={<WebsiteDesigning/>}></Route>
        <Route path="/websitedevelopment"element={<WebsiteDevelopment/>}></Route>
        <Route path="/softwaredevelopment"element={<SoftwareDevelopment/>}></Route>
        <Route path="/googleadwords"element={<GoogleAdwords/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
