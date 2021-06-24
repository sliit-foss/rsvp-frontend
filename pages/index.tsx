import Layout from '../components/Layout'
import Container from '../components/Layout/Container'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/hero'

const Homepage = () => {
  return (
    <Layout title='Home'>
      <Navbar />
      {/* hero section */}
      <HeroSection />
    </Layout>
  )
}

export default Homepage
