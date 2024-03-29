import Layout from '../components/Layout'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import Container from '../components/Layout/Container'
import Club from '../components/Club'
import { clubs } from '../lib/clubData'
import { HiArrowRight } from 'react-icons/hi'



const ClubsPage = (): JSX.Element => {
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
          <div className="grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-3xl my-10 mx-auto">
            {clubs.map((club, index) => (
              <div
                key={index}
                data-aos={index % 2 == 0 ? 'fade-right' : 'fade-left'}
              >
                <Club logo={club.logo} title={club.title} url={club.url}/>
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
