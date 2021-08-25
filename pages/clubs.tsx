import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/Layout'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import Container from '../components/Layout/Container'
import Club from '../components/Club'
import foss from '../public/clubs/foss.png'
import mozilla from '../public/clubs/mozilla.png'
import ms from '../public/clubs/ms.png'
import sliit from '../public/clubs/sliit.png'
import wif from '../public/clubs/wif.png'
import { HiArrowRight } from 'react-icons/hi'

const clubs = [
  {
    title: 'SLIIT FOSS Community',
    logo: foss,
  },
  {
    title: 'Mozilla Campus Club',
    logo: mozilla,
  },
  {
    title: 'MS Club of SLIIT',
    logo: ms,
  },
  {
    title: 'SLIIT Women in FOSS Community',
    logo: wif,
  },
  {
    title: 'Other Societies',
    logo: sliit,
  },
]

const ClubsPage = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  return (
    <Layout title="Clubs | RSVP SLIIT">
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10"
      >
        <Container>
          <div className="w-full lg:hidden mb-16 mt-20">
            <h1
              className="flex flex-row items-center text-3xl
            font-semibold"
            >
              Clubs{''}
              <span className="inline-block">
                <HiArrowRight className="ml-3" />
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-3xl mx-auto">
            {clubs.map((club, index) => (
              <div
                key={index}
                data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              >
                <Club logo={club.logo} title={club.title} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default ClubsPage
