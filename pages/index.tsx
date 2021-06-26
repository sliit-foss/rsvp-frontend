import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// modules
import HeroSection from '../modules/HomePage/hero'
import MakeGoodThings from '../modules/HomePage/makeGoodThings'
import WhatWeDo from '../modules/HomePage/WhatWeDo'
import OurPartners from '../modules/HomePage/ourPartners'

const Homepage = () => {
  return (
    <Layout title='SLIIT RSVP'>
      <Navbar />
      <HeroSection />
      <MakeGoodThings />
      <WhatWeDo />
      <OurPartners />
      <Footer />
    </Layout>
  )
}

export default Homepage
