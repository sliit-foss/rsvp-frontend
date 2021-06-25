import Image from 'next/image'

import Container from '../../components/Layout/Container'

// partners logos
import foss_dark from '../../public/logos/foss_dark.svg'
import Cs2 from '../../public/logos/CS2.png'
import fcsc from '../../public/logos/fcsc.png'
import se from '../../public/logos/se.png'
import media from '../../public/logos/media.png'
import mozilla from '../../public/logos/mozilla.png'
import MSClubLogo from '../../public/logos/MSClubLogo.png'

const OurPartners = () => {
  return (
    <Container>
      <section className='flex flex-col items-center md:pb-24 pb-16'>
        <h2 className='text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-10'>
          Our Partners
        </h2>
        <p className='text-gray-default text-center'>
          A very big thank you to all our partners for their continued
          partnership. If you’re interested in being showcased throughout ,
          contact SLIIT FCSC to discuss sponsorship opportunities.
        </p>
        <div className='inline-flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-6'>
          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={foss_dark}
              alt='SLIIT FOSS'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={fcsc}
              alt='Faculty of computing Student Community'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={MSClubLogo}
              alt='SLIIT MS CLUB'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={media}
              alt='SLIIT Media'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={mozilla}
              alt='SLIIT Mozilla club'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={Cs2}
              alt='Cyber security community of SLIIT'
              layout='intrinsic'
              quality={90}
            />
          </div>

          <div className='flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8'>
            <Image
              src={se}
              alt='Software engineering Student community'
              layout='intrinsic'
              quality={90}
            />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default OurPartners
