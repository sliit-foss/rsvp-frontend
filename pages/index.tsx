import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// modules
import HeroSection from '../modules/HomePage/HeroSection'
import MakeGoodThings from '../modules/HomePage/MakeGoodThings'
import WhatWeDo from '../modules/HomePage/WhatWeDo'
import OurPartners from '../modules/HomePage/OurPartners'
import Footer from '../components/Footer'

const Homepage = (): JSX.Element => {
	return (
		<Layout title="Home">
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
