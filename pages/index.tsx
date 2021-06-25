import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'
import MakeGoodThings from '../modules/HomePage/makeGoodThings'
import WhatWeDo from '../modules/HomePage/WhatWeDo'
import OurPartners from '../modules/HomePage/ourPartners'
import Footer from '../components/Footer'

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
