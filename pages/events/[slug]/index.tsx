import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { useGetEvent } from '../../../queries/useGetEvent'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Container from '../../../components/Layout/Container'
import Button from '../../../components/Button'
import Speaker from '../../../components/Speaker'

const SingleEvent = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])

  const router = useRouter()
  let eventID = ''
  if (process.browser) {
    eventID = window.location.href.split('/').reverse()[0].split('?')[0]
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
            <div className="flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-32 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="text-5xl lg:text-6xl xl:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
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
                <div className="text-5xl lg:text-6xl xl:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
                  Speakers
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-left">
                {event?.speakers.map((speaker) => (
                  <Speaker
                    key={speaker._id}
                    name={speaker.name}
                    description={speaker.description}
                    photoURL={speaker.photo}
                    status={speaker.status}
                    company={speaker.company}
                    topic={speaker.topic}
                    twitterURL={speaker.twitterURL}
                    linkedinURL={speaker.linkedInURL}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start mt-16 lg:mt-36 mb-20 lg:mb-32 px-5 lg:px-16 2xl:px-0">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="text-5xl lg:text-6xl xl:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
                  Sponsors
                </div>
              </div>

              <div className="w-full lg:w-1/2" data-aos="fade-left">
                <div className="flex flex-col justify-center items-start mt-5">
                  <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                    A big thanks to our sponsors for pitching in and helping
                    keep these sessions free for attendees
                  </div>
                  <div className="text-base lg:text-lg font-semibold text-center lg:text-left mt-10">
                    Register and join us on this day for an amazing experience
                  </div>
                  <div className="mt-10 w-full flex justify-center items-center md:justify-start">
                    <button
                      onClick={() => {
                        router.push({
                          pathname: `/events/${eventID}/register`,
                          query: {
                            eventName: event?.name,
                            headerImage: event?.headerImage,
                          },
                        })
                      }}
                    >
                      <Button value={'Register Here'} />
                    </button>
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
