import Layout from '../components/Layout'
import Navbar from '../components/Layout/Navbar'
import HeroSection from '../modules/HomePage/HeroSection'
import MakeGoodThings from '../modules/HomePage/MakeGoodThings'
import WhatWeDo from '../modules/HomePage/WhatWeDo'
import OurPartners from '../modules/HomePage/OurPartners'
import Footer from '../components/Layout/Footer'

const Homepage = (): JSX.Element => {
  return (
    <Layout>
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
