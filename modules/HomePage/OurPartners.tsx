import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Container from '../../components/Layout/Container'
import NextImage from '../../components/NextImage'

// partners logos
import { logoData } from '../../lib/LogoData'

const OurPartners = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Container>
      <section className="flex flex-col items-center md:py-20 py-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-10" data-aos="fade-left" data-aos-offset={0}>
          Our Partners
        </h2>
        <p className="text-gray-default text-center" data-aos="fade-right" data-aos-offset={0}>
          A very big thank you to all our partners for their continued
          partnership. If you’re interested in being showcased throughout ,
          contact SLIIT FCSC to discuss sponsorship opportunities.
        </p>
        <div className="inline-flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-6">
          {logoData.map(({ image, alt }, index) => (
            <div key={index} data-aos={index%2==0?"fade-up":"fade-down"} data-aos-offset={120}>
              <NextImage
                classnames="flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8"
                src={image}
                alt={alt}
                layout="intrinsic"
                quality={90}
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default OurPartners
