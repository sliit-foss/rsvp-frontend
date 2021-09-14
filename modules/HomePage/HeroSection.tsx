import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import EventBanner from '../../components/Events/EventBanner'
import { useGetLatestEvents } from '../../queries/useGetEvent'

const HeroSection = (): JSX.Element => {
  const { data: eventList = [], isSuccess } = useGetLatestEvents()
  return (
    <div>
      <section className="bg-gradient-to-r from-gradientBlue to-gradientPurple shadow-lg z-0">
        {isSuccess && eventList? (
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
            {eventList.map((event, index) => (
              <EventBanner
                key={index}
                id={event._id}
                title={event.name}
                description={event.description}
                category={event.category}
                status={event.status}
                startTime={event.startTime}
                tags={event.tags}
              />
            ))}
          </Carousel>
        ) : (
          <div
            className={`bg-white fixed top-0 flex justify-center items-center w-screen h-screen transition duration-500 z-10 ${
              isSuccess ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
          > <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gradientBlue" />
          </div>
        )}
      </section>
    </div>
  )
}

export default HeroSection
