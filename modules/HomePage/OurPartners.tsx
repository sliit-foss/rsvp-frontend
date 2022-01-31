import Container from '../../components/Layout/Container'
import NextImage from '../../components/Common/NextImage'
import { clubs } from '../../lib/clubData'
import ParticleBG from '../../components/Common/ParticleBG'

const OurPartners = (): JSX.Element => {
  return (
    <div className="relative">
      <ParticleBG backgroundMode={false} />
      <Container>
        <section className="flex flex-col items-center md:py-20 py-10 z-10">
          <h2
            className="text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-10"
            data-aos="fade-left"
            data-aos-offset={0}
          >
            Our Partners
          </h2>
          <p
            className="text-gray-default text-center"
            data-aos="fade-right"
            data-aos-offset={0}
          >
            A very big thank you to all our partners for their continued
            partnership. If you’re interested in being showcased throughout ,
            contact SLIIT FCSC to discuss sponsorship opportunities.
          </p>
          <div className="inline-flex justify-center items-center space-x-3 lg:space-x-6 flex-wrap mb-8">
            {clubs.map(({ logo, title, url }, index) => (
              <div
                key={index}
                data-aos={index % 2 == 0 ? 'fade-up' : 'fade-down'}
                data-aos-offset={120}
              >
                <a href={url} rel="noreferrer" target="_blank">
                  <NextImage
                    classnames="flex items-center justify-center w-16 md:w-20 lg:w-28 mt-8 shadow-sm rounded-lg transform hover:scale-105 transition-all ease-out duration-300"
                    nextImgClassnames="rounded-lg"
                    src={logo}
                    alt={title}
                    layout="intrinsic"
                    quality={90}
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}

export default OurPartners
