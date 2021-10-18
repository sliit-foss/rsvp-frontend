import NextImage from '../../components/Common/NextImage'
import Container from '../../components/Layout/Container'
import whatWeDo from '../../public/what-we-do.svg'

const WhatWeDo = (): JSX.Element => {
  return (
    <section
      style={{ backgroundImage: 'url(/patterns/what-we-do.svg)' }}
      className="bg-no-repeat bg-cover bg-center shadow-md"
    >
      <Container>
        <section className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 md:py-20 py-10">
          <div data-aos="fade-left">
            <NextImage
              classnames="md:col-span-1 md:col-start-2 md:col-end-3 md:row-start-1 flex items-center justify-center max-w-lg lg:w-auto sm:w-80 w-64 mx-auto my-8"
              src={whatWeDo}
              alt="foss logo"
              layout="intrinsic"
              quality={90}
            />
          </div>
          <div className="md:col-span-1 md:col-start-1 md:col-end-2 md:row-start-1 flex flex-col justify-center items-center md:items-start">
            <h2
              className="text-4xl sm:text-5xl font-bold text-blue md:text-left text-center leading-snug mb-10"
              data-aos="fade-right"
            >
              What We Do
            </h2>
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 gap-5">
              <div className="max-w-xs mb-4" data-aos="fade-right">
                <h4 className="font-semibold text-xl sm:text-2xl text-center md:text-left mb-3">
                  Live Viewing Parties
                </h4>
                <p className="text-gray-default text-center md:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto
                </p>
              </div>
              <div className="max-w-xs mb-4" data-aos="fade-left">
                <h4 className="font-semibold text-xl sm:text-2xl text-center md:text-left mb-3">
                  Talks
                </h4>
                <p className="text-gray-default text-center md:text-left">
                  We interview the leading figures in the industry and share
                  their stories and insight intended to be inclusive of an array
                  of IT topics.
                </p>
              </div>
              <div className="max-w-xs mb-4" data-aos="fade-right">
                <h4 className="font-semibold text-xl sm:text-2xl text-center md:text-left mb-3">
                  Study Jam
                </h4>
                <p className="text-gray-default text-center md:text-left">
                  Study Jams tailored to students’ requirements are organized.
                </p>
              </div>
              <div className="max-w-xs mb-4" data-aos="fade-left">
                <h4 className="font-semibold text-xl sm:text-2xl text-center md:text-left mb-3">
                  Codelabs
                </h4>
                <p className="text-gray-default text-center md:text-left">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export default WhatWeDo
