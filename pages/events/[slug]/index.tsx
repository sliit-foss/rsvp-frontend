import React from 'react'
import { useRouter } from 'next/router'
import { useGetEvent } from '../../../queries/useGetEvent'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Layout/Navbar'
import Footer from '../../../components/Layout/Footer'
import Container from '../../../components/Layout/Container'
import Speaker from '../../../components/Events/Speaker'

const SingleEvent = (): JSX.Element => {
  const router = useRouter()
  let eventID = ''
  if (process.browser) {
    eventID = window.location.href.split('/').reverse()[1].replaceAll('/','')
  }
  const { data: event, isSuccess } = useGetEvent(eventID)

  return (
    <Layout
      title={
        router.query.name == undefined
          ? 'RSVP SLIIT'
          : `${router.query.name} | RSVP SLIIT`
      }
      description={event?.description}
      image={event?.headerImage}
    >
      <Navbar />

      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10 "
      >
        {isSuccess ? (
          <Container>
            <div className="w-full lg:px-16 2xl:px-0" data-aos="fade-right">
              <div className="text-5xl lg:text-6xl xl:text-7xl text-blue font-bold text-center lg:text-left mt-14 mb-14 lg:mb-0">
                {event?.name}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-32 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0">
                  Event
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-left">
                <div className="text-base lg:text-lg font-normal text-center lg:text-left mt-5">
                  {event?.description}
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-start mt-10">
                  <div className="w-full lg:w-1/4">
                    <div className="text-lg font-extrabold text-center lg:text-left">
                      When:
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-base lg:text-lg font-normal text-center lg:text-left w-auto ">
                      <div className="mb-3">
                        {new Date(event ? event.startTime : 0)
                          .toLocaleString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })
                          .replaceAll(',', ' ')}
                      </div>
                      <p className="mb-3 ml-18 text-bold">to</p>
                      <div>
                        {new Date(event ? event.endTime : 0)
                          .toLocaleString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                          })
                          .replaceAll(',', ' ')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-start mt-10">
                  <div className="w-full lg:w-1/4">
                    <div className="text-lg font-extrabold text-center lg:text-left">
                      Where:
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                      {event?.venue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start mt-20 lg:mt-36 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0">
                  Speakers
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-left">
                {event?.speakers.length != 0 ? (
                  <>
                    {event?.speakers.map((speaker) => (
                      <Speaker
                        key={speaker._id}
                        name={speaker.name}
                        description={speaker.description}
                        photoURL={speaker.photo}
                        occupation={speaker.occupation}
                        topic={speaker.topic}
                        twitterURL={speaker.twitterURL}
                        linkedinURL={speaker.linkedInURL}
                      />
                    ))}
                  </>
                ) : (
                  <div className="text-xl text-black font-bold text-center lg:text-left mt-5">
                    This event has no speakers
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-36 mb-20 lg:mb-32 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="text-5xl lg:text-6xl xl:text-7xl text-darkBlue font-bold text-center lg:text-left mb-14 lg:mb-0">
                  Sponsors
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-left">
                <div className="flex flex-col justify-center items-start mt-5">
                  <div className="w-full text-base lg:text-lg font-normal text-center lg:text-left">
                    A big thanks to our sponsors for pitching in and helping
                    keep these sessions free for attendees
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1 bg-blue mt-8 rounded-lg" data-aos="fade"></div>
            <div className="flex flex-col lg:flex-row justify-end items-start mt-6 lg:mt-14 mb-20 lg:mb-32 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col justify-center items-start mt-5">
                  <div className="w-full text-base lg:text-lg font-semibold text-center lg:text-left mt-10" data-aos="fade-left">
                    Register and join us on this day for an amazing experience
                  </div>
                  <div className="mt-10 w-full flex flex-col lg:flex-row justify-center items-center md:justify-start" data-aos="fade-right">
                    <button
                      onClick={() => {
                        if (
                          event?.attendeeCount !== event?.capacity &&
                          event?.status === 'Upcoming'
                        ) {
                          router.push({
                            pathname: `/events/${eventID}/register`,
                            query: {
                              eventName: event?.name,
                              headerImage: event?.headerImage,
                            },
                          })
                        }
                      }}
                      className={`py-2 px-8 text-white rounded-lg shadow-md duration-150 transition ease-in font-medium ${
                        event?.attendeeCount !== event?.capacity &&
                        event?.status === 'Upcoming'
                          ? 'bg-gradientBlue hover:bg-gradientPurple'
                          : 'bg-gray-500 cursor-default'
                      }`}
                    >
                      Register Here
                    </button>
                    {event?.attendeeCount === event?.capacity ? (
                      <p className="px-10 mt-8 lg:mt-0 text-red-500 text-center lg:text-left">
                        {`Event Capacity Reached (${event?.capacity}/${event?.capacity})`}
                      </p>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        ) : (
          <div
            className=" flex justify-center items-center"
            style={{ height: '90vh' }}
          >
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gradientBlue" />
          </div>
        )}
      </section>
      <Footer />
    </Layout>
  )
}

export default SingleEvent
