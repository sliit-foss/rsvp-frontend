import Image from 'next/image'

// components
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Container from '../components/Layout/Container'

// images
import foss from '../public/clubs/foss.png'
import mozilla from '../public/clubs/mozilla.png'
import ms from '../public/clubs/ms.png'
import sliit from '../public/clubs/sliit.png'

const ClubsPage = () => {
  return (
    <Layout title='SLIIT RSVP | Clubs'>
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className='bg-no-repeat bg-right-top bg-cover py-10'
      >
        <Container>
          <div className='grid grid-cols-2 grid-rows-1 md:gap-8 sm:gap-6 gap-5 max-w-4xl mx-auto'>
            <div className='relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md rounded-xl'>
              <Image
                className='rounded-xl'
                src={foss}
                alt='SLIIT FOSS'
                quality={90}
                layout='intrinsic'
                placeholder='blur'
              />
              <div className='absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-gradientBlue to-gradientPurple rounded-xl md:group-hover:p-4'>
                <h2 className='text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4'>
                  SLIIT FOSS Community
                </h2>
                {/* TODO: add the club or society link to the button */}
                <button className='text-white border-2 border-white hover:bg-gradientBlue transition ease-in rounded-md shadow py-1 px-4'>
                  More info
                </button>
              </div>
            </div>
            <div className='relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md rounded-xl'>
              <Image
                className='rounded-xl'
                src={mozilla}
                alt='Mozilla club of SLIIT'
                quality={90}
                layout='intrinsic'
                placeholder='blur'
              />
              <div className='absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-gradientBlue to-gradientPurple rounded-xl md:group-hover:p-4'>
                <h2 className='text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4'>
                  Mozilla Campus Club
                </h2>
                {/* TODO: add the club or society link to the button */}
                <button className='text-white border-2 border-white hover:bg-gradientBlue transition ease-in rounded-md shadow py-1 px-4'>
                  More info
                </button>
              </div>
            </div>
            <div className='relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md rounded-xl'>
              <Image
                className='rounded-xl'
                src={ms}
                alt='MS club of SLIIT'
                quality={90}
                layout='intrinsic'
                placeholder='blur'
              />
              <div className='absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-gradientBlue to-gradientPurple rounded-xl md:group-hover:p-4'>
                <h2 className='text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4'>
                  MS Club of SLIIT
                </h2>
                {/* TODO: add the club or society link to the button */}
                <button className='text-white border-2 border-white hover:bg-gradientBlue transition ease-in rounded-md shadow py-1 px-4'>
                  More info
                </button>
              </div>
            </div>

            <div className='relative group flex items-center justify-end max-w-md mx-auto overflow-hidden shadow-md rounded-xl'>
              <Image
                className='rounded-xl'
                src={sliit}
                alt='SLIIT'
                quality={90}
                layout='intrinsic'
                placeholder='blur'
              />
              <div className='absolute bottom-0 h-0 w-full group-hover:h-full transition-all ease-out duration-500 flex flex-col items-center justify-center bg-gradient-to-r from-gradientBlue to-gradientPurple rounded-xl md:group-hover:p-4'>
                <h2 className='text-base sm:text-2xl md:text-3xl font-bold text-white group-hover:text-opacity-100 text-opacity-0 text-center mb-4'>
                  Other Societies
                </h2>
                {/* TODO: add the club or society link to the button */}
                <button className='text-white border-2 border-white hover:bg-gradientBlue transition ease-in rounded-md shadow py-1 px-4'>
                  More info
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default ClubsPage
