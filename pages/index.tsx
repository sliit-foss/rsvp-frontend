import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'
import MakeGoodThings from '../modules/HomePage/makeGoodThings'

const Homepage = () => {
  return (
    <Layout title='Home'>
      <Navbar />
      <HeroSection />
      <MakeGoodThings />
    </Layout>
  )
}

export default Homepage
