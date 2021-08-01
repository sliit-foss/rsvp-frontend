import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from 'react-share'
import { FacebookIcon, TwitterIcon, EmailIcon, WhatsappIcon } from 'react-share'

interface EventProps {
  id: string
  imageURL: string
  title: string
  category: string
  description: string
  startTime: number
  status: string
}

const Event = ({
  id,
  imageURL,
  title,
  category,
  description,
  startTime,
  status,
}: EventProps): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const router = useRouter()

  return (
    <div data-aos="fade-up" className="w-full lg:w-2/6  md:px-4 lg:px-6 py-5 ">
      <div className="bg-white hover:shadow-xl h-full rounded-xl transition-all ease-out duration-500">
        <img
          src={imageURL}
          alt="Logo"
          className="w-full mb-3 border-white hover:opacity-75 rounded-xl rounded-b-lg transition-all ease-out duration-500"
        ></img>

        <div className="px-6 py-4 md:px-10">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="py-4">{description}</p>
          <button
            onClick={() => {
              router.push({
                pathname: '/events/' + id,
                query: {
                  name: title,
                },
              })
            }}
          >
            <a className="w-full mb-1 md:w-full text-base font-bold text-gray-dark hover:text-lightBlueAccent">
              Read More
            </a>
          </button>

          <div className="flex flex-wrap pt-8">
            <div className="text-sm font-medium  flex flex-wrap">
              <div className="bg-lightBlueAccent py-0.5 px-4 mb-4 rounded-3xl shadow-md text-white text-sm transform hover:scale-103 filter hover:brightness-110 transition ease-in duration-150 cursor-default">
                {category}
              </div>
              <div className="w-2" />

              <div
                className={`py-0.5 px-4 mb-4 rounded-3xl shadow-md text-white text-sm transform hover:scale-103 filter hover:brightness-110 transition ease-in duration-150 cursor-default ${
                  status === 'Closed' || status === 'Cancelled'
                    ? 'bg-redAccent'
                    : status === 'Postponed'
                    ? 'bg-yellow-400'
                    : status === 'Upcoming'
                    ? 'bg-gray-400'
                    : 'bg-green-400'
                }`}
              >
                {status}
              </div>
            </div>
            <div className="w-full mb-1 md:w-full text-sm font-bold">
              {new Date(startTime).toString().substring(4, 15)}
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
