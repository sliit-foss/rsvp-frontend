import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import EventBanner from '../../components/EventBanner'

const HeroSection = (): JSX.Element => {
  const latestEvents = [0, 1, 2, 3, 4]
  return (
    <section className="bg-gradient-to-r from-gradientBlue to-gradientPurple shadow-lg">
      <Carousel
        className=""
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
      >
        {latestEvents.map((index) => (
          <EventBanner key={index} />
        ))}
      </Carousel>
    </section>
  )
}

export default HeroSection
