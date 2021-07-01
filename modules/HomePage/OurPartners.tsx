import Container from '../../components/Layout/Container'
import NextImage from '../../components/NextImage'

// partners logos
import { logoData } from '../../lib/LogoData'

const OurPartners = (): JSX.Element => {
  return (
    <Container>
      <section className="flex flex-col items-center md:py-20 py-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-10">
          Our Partners
        </h2>
        <p className="text-gray-default text-center">
          A very big thank you to all our partners for their continued
          partnership. If you’re interested in being showcased throughout ,
          contact SLIIT FCSC to discuss sponsorship opportunities.
        </p>
        <div className="inline-flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-6">
          {logoData.map(({ image, alt }, index) => (
            <NextImage
              key={index}
              classnames="flex items-center justify-center w-9 sm:w-16 md:w-20 lg:w-28 my-8"
              src={image}
              alt={alt}
              layout="intrinsic"
              quality={90}
            />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default OurPartners
