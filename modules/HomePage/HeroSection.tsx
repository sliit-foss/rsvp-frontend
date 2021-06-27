// components
import Container from '../../components/Layout/Container'
import Button from '../../components/Button'

// icons
import { HiArrowRight } from 'react-icons/hi'

const HeroSection = (): JSX.Element => {
  return (
    <section className="bg-gradient-to-r from-gradientBlue to-gradientPurple">
      <Container>
        <section className="text-white grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-6 md:py-44 py-20">
          <div className="md:col-span-1 flex flex-col justify-center">
            <p className="inline-flex items-center font-medium text-2xl sm:text-3xl mb-8 animate-pulse">
              Upcoming{' '}
              <span>
                <HiArrowRight className="ml-3" />
              </span>
            </p>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl mb-5 leading-snug">
              JavaScript Fundamentals
            </h1>
            <div className="inline-flex items-center space-x-2">
              <p className="font-medium">Programming</p>
              <div className="text-gray-default text-xs sm:text-base bg-gray-light py-1 px-3 rounded-2xl shadow-md">
                #JavaScript
              </div>
              <div className="text-gray-default text-xs sm:text-base bg-gray-light py-1 px-3 rounded-2xl shadow-md">
                #SLIITFOSS
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col justify-center items-start ">
            <p className="text-2xl sm:text-3xl font-medium mb-6">Join us on</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">
              November 8th
            </h2>
            <p className="mb-6 max-w-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto reprehenderit voluptates nihil id harum molestias,
              perferendis
            </p>
            {/* pass the callback function to the button */}
            <Button value={'RSVP'} />
          </div>
        </section>
      </Container>
    </section>
  )
}

export default HeroSection
