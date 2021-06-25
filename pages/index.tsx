import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'
import MakeGoodThings from '../modules/HomePage/makeGoodThings'
import WhatWeDo from '../modules/HomePage/WhatWeDo'

const Homepage = () => {
  return (
    <Layout title='Home'>
      <Navbar />
      <HeroSection />
      <MakeGoodThings />
      <WhatWeDo />
    </Layout>
  )
}

export default Homepage
