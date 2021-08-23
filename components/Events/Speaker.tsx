import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

interface SpeakerProps {
  name: string
  description: string
  topic: string
  occupation: string
  twitterURL: string
  linkedinURL: string
  photoURL: string
}

const Speaker = ({
  name,
  description,
  topic,
  occupation,
  twitterURL,
  linkedinURL,
  photoURL,
}: SpeakerProps): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-end">
        <div className="w-full lg:w-1/2 flex justify-center items-center rounded-xl mt-5">
          <div className="w-3/4 lg:w-full rounded-xl shadow-md hover:shadow-xl transition-all ease-out duration-500">
            <img
              src={photoURL}
              alt="Logo"
              className="w-full hover:opacity-80 rounded-xl transition-all ease-out duration-500"
            ></img>
          </div>
        </div>
        <div className="ml-0 lg:ml-10 mt-10 lg:mt-0 flex flex-row lg:flex-col">
          <a href={twitterURL}>
            <AiFillTwitterCircle
              className="mb-3  mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200"
              size="32"
            />
          </a>
          <a href={linkedinURL}>
            <FaLinkedin
              className="mt-0 lg:mt-3 mr-3 fill-current-color text-gray-500 hover:text-white transition-all ease-out duration-200"
              size="30"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start mt-10">
        <div className="w-full text-3xl font-extrabold text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-gradientBlue to-gradientPurple">
          {name}
        </div>
        <div className="w-full text-2xl font-extrabold text-center lg:text-left mt-5">
          {occupation}
        </div>
        <div className="w-full text-base lg:text-lg font-normal text-center lg:text-left mt-8">
          {description}
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
            {topic}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speaker
