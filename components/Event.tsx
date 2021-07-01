import {useEffect } from 'react'
import Aos from '../node_modules/aos/dist/aos.js'
import '../node_modules/aos/dist/aos.css'

import Image from 'next/image'

//props of Event Components
interface EventProps {
  logo: StaticImageData
  title: string
  category: string
  description: string
  date: string
}

const Event = ({
  logo,
  title,
  category,
  description,
  date,
}: EventProps): JSX.Element => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div data-aos="fade-up" className="w-full lg:w-2/6  md:px-4 lg:px-6 py-5 ">
      <div className="bg-white hover:shadow-xl h-full rounded-xl">
        <Image
          className="h-56 w-full border-white border-8 hover:opacity-25 rounded-xl rounded-b-none transition-all ease-out duration-500"
          src={logo}
          alt="SLIIT FOSS"
          quality={90}
          layout="intrinsic"
          placeholder="blur"
        />

        <div className="px-4 py-4 md:px-10">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="py-4">{description}</p>
          <a
            href=""
            className="w-full mb-1 md:w-full text-base font-bold text-gray-dark hover:text-lightBlue"
          >
            Read More
          </a>
          <div className="flex flex-wrap pt-8">
            <div className="bg-lightBlue py-0.5 px-3 mb-4 rounded-3xl shadow-md text-white text-sm">
              {category}
            </div>
            <div className="w-full mb-1 md:w-full text-sm font-bold">
              {date}
            </div>
            <div className="2/3 mb-3">
              <div className="text-sm font-medium">
                SHARE:
                <a href="" className="text-blue px-1 ">
                  FACEBOOK
                </a>
                <a href="" className="text-lightBlue px-1 ">
                  TWITTER
                </a>
                <a href="" className="text-redAccent px-1 ">
                  GOOGLE+
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
