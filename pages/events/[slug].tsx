import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Container from '../../components/Layout/Container'
import Button from '../../components/Button'
import speakerPhoto from '../../public/singleEvent/speaker.png'

const SingleEvent = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])
  return (
    <Layout title="SLIIT RSVP | Events">
      <Navbar />

      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover py-10 "
      >
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start mt-32 px-5 lg:px-0">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="text-5xl lg:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
                Event
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis
                dui non neque gravida mollis. Pellentesque laoreet placerat elit
                nec consectetur. Suspendisse congue, libero in consectetur
                congue, dolor lectus porta purus, eget sollicitudin sapien dui
                sed sapien. Cras lobortis dapibus libero, a blandit justo
                egestas quis. Praesent metus nisl, aliquet non egestas in,
                tincidunt in nibh. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices{' '}
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-start mt-10">
                <div className="w-full lg:w-1/4">
                  <div className="text-lg font-extrabold text-center lg:text-left">
                    When:
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    quis dui non neque gravida mollis. Pellentesque laoreet
                    placerat elit nec consectetur. Suspendisse congue
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    quis dui non nequ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start mt-36 px-5 lg:px-0">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="text-5xl lg:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
                Speakers
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-end">
                <div className="w-full lg:w-1/2 flex justify-center items-center rounded-xl mt-5">
                  <div className="w-3/4 lg:w-full rounded-xl shadow-md hover:shadow-xl transition-all ease-out duration-500">
                    <Image
                      className="border-white border-8 hover:opacity-80 rounded-xl transition-all ease-out duration-500"
                      src={speakerPhoto}
                      alt="SLIIT FOSS"
                      quality={90}
                      layout="responsive"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <div className="ml-0 lg:ml-10 mt-10 lg:mt-0 flex flex-row lg:flex-col">
                  <a href="">
                    <AiFillTwitterCircle
                      className="mb-3  mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200"
                      size="32"
                    />
                  </a>
                  <a href="">
                    <FaLinkedin
                      className="mt-0 lg:mt-3 mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200"
                      size="30"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start mt-10">
                <div className="w-full text-3xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue to-gradientPurple">
                  Bill Gates
                </div>
                <div className="w-full text-2xl font-extrabold text-center lg:text-left mt-5">
                  Former Chair Person,
                </div>
                <div className="w-full text-2xl font-extrabold text-center lg:text-left">
                  Microsoft
                </div>
                <div className="text-base lg:text-lg font-normal text-center lg:text-left mt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  quis dui non nequ sit amet, consectetur adipiscing elit. In
                  quis dui non neque gravida mollis
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-start mt-10">
                <div className="w-full lg:w-1/4">
                  <div className="text-lg font-extrabold text-center lg:text-left">
                    Topic:
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    quis dui non nequ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start mt-36 mb-32 px-5 lg:px-0 ">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="text-5xl lg:text-7xl text-blue font-bold text-center lg:text-left mb-14 lg:mb-0">
                Sponsors
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="flex flex-col justify-center items-start mt-5">
                <div className="text-base lg:text-lg font-normal text-center lg:text-left">
                  A big thanks to our sponsors for pitching in and helping keep
                  these sessions free for attendees
                </div>
                <div className="text-base lg:text-lg font-semibold text-center lg:text-left mt-10">
                  Register and join us on this day for an amazing experience
                </div>
                <div className="mt-10 w-full flex justify-center items-center md:justify-start">
                  <Button value={'Register Here'} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </Layout>
  )
}

export default SingleEvent
