import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'
import MakeGoodThings from '../modules/HomePage/makeGoodThings'
import Footer from '../components/Footer'
import OurPartners from '../modules/HomePage/ourPartners'
import WhatWeDo from '../modules/HomePage/WhatWeDo'

const Homepage = () => {
  return (
    <Layout title='Home'>
      <Navbar />
      <HeroSection />
      <MakeGoodThings />
      <WhatWeDo />
      <OurPartners />
      <Footer/>
    </Layout>
  )
}

export default Homepage
