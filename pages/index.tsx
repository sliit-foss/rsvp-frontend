import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'

const Homepage = () => {
  return (
    <Layout title='Home'>
      <Navbar />
      <HeroSection />
    </Layout>
  )
}

export default Homepage
