import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from 'react-share'
import { FacebookIcon, TwitterIcon, EmailIcon, WhatsappIcon } from 'react-share'

//props of Event Components
interface EventProps {
  logo: StaticImageData
  title: string
  category: string
  description: string
  date: string
  status: string
}

const Event = ({
  logo,
  title,
  category,
  description,
  date,
  status,
}: EventProps): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="fade-up" className="w-full lg:w-2/6  md:px-4 lg:px-6 py-5 ">
      <div className="bg-white hover:shadow-xl h-full rounded-xl">
        <Image
          className="border-white border-8 hover:opacity-25 rounded-xl rounded-b-none transition-all ease-out duration-500"
          src={logo}
          alt="SLIIT FOSS"
          quality={90}
          layout="responsive"
          placeholder="blur"
        />
        <div className="px-4 py-4 md:px-10">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="py-4">{description}</p>
          <a
            href=""
            className="w-full mb-1 md:w-full text-base font-bold text-gray-dark hover:text-lightBlueAccent"
          >
            Read More
          </a>
          <div className="flex flex-wrap pt-8">
            <div className="text-sm font-medium  flex flex-wrap">
              <div className="bg-lightBlueAccent py-0.5 px-4 mb-4 rounded-3xl shadow-md text-white text-sm">
                {category}
              </div>
              <div className="w-2"></div>
              {status == 'Happenning Now' || status == 'Closed' ? (
                <div
                  className={
                    status == 'Closed'
                      ? 'bg-redAccent py-0.5 px-4 mb-4 rounded-3xl shadow-md text-white text-sm'
                      : 'bg-green-400 py-0.5 px-4 mb-4 rounded-3xl shadow-md text-white text-sm'
                  }
                >
                  {status}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="w-full mb-1 md:w-full text-sm font-bold">
              {date}
            </div>
            <div className="2/3 mb-3">
              <div className="text-sm font-medium  flex flex-row flex-wrap justify-center items-center">
                <p>SHARE: &nbsp;</p>
                <FacebookShareButton
                  title={title}
                  url={'https://sliit-foss-rsvp.web.app/'}
                  hashtag="#sliit #sliitfoss #fosslk"
                >
                  <FacebookIcon lightingColor="white" round={true} size={25}>
                    {' '}
                  </FacebookIcon>
                </FacebookShareButton>{' '}
                &nbsp;
                <TwitterShareButton
                  url={'https://sliit-foss-rsvp.web.app/'}
                  title={title}
                >
                  <TwitterIcon lightingColor="white" round={true} size={25}>
                    {' '}
                  </TwitterIcon>
                </TwitterShareButton>{' '}
                &nbsp;
                <EmailShareButton url={'https://sliit-foss-rsvp.web.app/'}>
                  <EmailIcon lightingColor="white" round={true} size={25}>
                    {' '}
                  </EmailIcon>
                </EmailShareButton>{' '}
                &nbsp;
                <WhatsappShareButton
                  title={title}
                  url={'https://sliit-foss-rsvp.web.app/' + '\n'}
                >
                  <WhatsappIcon lightingColor="white" round={true} size={25}>
                    {' '}
                  </WhatsappIcon>
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
