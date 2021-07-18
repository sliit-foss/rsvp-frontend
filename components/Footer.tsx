import Image from 'next/image'
import Link from 'next/link'
import fossLogo from '../public/logos/foss_light.svg'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitter,
} from 'react-icons/fa'

const Footer = (): JSX.Element => {
  return (
    <div className="lg:flex lg:flex-row bg-gradient-to-r from-gradientBlue to-gradientPurple pb-10 lg:pb-0">
      <div className="sm:w-full lg:w-1/3">
        <div>
          <Image src={fossLogo} width="168" height="168" alt="Foss Logo" />
        </div>
        <div className="relative -top-8">
          <div>
            <p className="pl-10 pr-10 text-white mb-3">
              A group of volunteers who believe in the usage of Free/Open Source
              Software (FOSS). The primary objective of the community is to
              promote, develop and diversify the usage of Free and Open Source
              Software at SLIIT.
            </p>
          </div>
          <div className="pl-10 pr-10 text-white mb-3 ">
            <h4 className="text-xl font-bold mb-3">Follow Us</h4>
            <div className="sm:mb-3 md:mb-3 flex flex-row">
              <a href="">
                <FaFacebook
                  className="colorIcon mb-3 mr-3 fill-current-color hover:text-white transition-all ease-out duration-200"
                  size="22"
                />
              </a>
              <a href="">
                <FaInstagram
                  className="colorIcon mb-3  mr-3 fill-current-color hover:text-white transition-all ease-out duration-200"
                  size="22"
                />
              </a>
              <a href="">
                <FaLinkedin
                  className="colorIcon mb-3  mr-3 fill-current-color hover:text-white transition-all ease-out duration-200"
                  size="22"
                />
              </a>
              <a href="">
                <FaTwitter
                  className="colorIcon mb-3  mr-3 fill-current-color hover:text-white transition-all ease-out duration-200"
                  size="22"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:w-full lg:w-1/3 mb-10">
        <div className="w-full h-1/4">
          <div className="lg:pt-14">
            <h4 className="relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white">
              Useful Links
            </h4>
            <span className="absolute left-10 w-16 bg-white h-1 rounded-xl" />
          </div>
        </div>
        <div className="w-full h-4/6">
          <div className="flex flex-row w-full text-white pl-10 pr-10">
            <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2">
              <ul>
                <li className="pt-3 pb-3">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/clubs">
                    <a>Clubs</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/events">
                    <a>Events</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-1/2">
              <ul>
                <li className="pt-3 pb-3">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/clubs">
                    <a>Clubs</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/">
                    <a>About Us</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li className="pt-3 pb-3">
                  <Link href="/events">
                    <a>Events</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:w-full lg:w-1/3">
        <div className="w-full h-1/4 md:mb-4 lg:mb-3">
          <div className="lg:pt-14 pb-5">
            <h4 className="relative left-10 w-1/2 sm:w-1/2 md:w-1/2 text-xl font-bold mb-1 text-white">
              Subscribe
            </h4>
            <span className="absolute left-10 bg-white w-16 h-1 rounded-xl" />
          </div>
        </div>
        <div className="w-full h-4/6 sm:mt-5 md:mt-5">
          <div className="flex flex-row w-full text-white pl-10 pr-10">
            <div className="sm:mt-5 sm:mb-5 md:mt-5 md:mb-5 w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                incidunt ea quisquam impedit deleniti illum quis libero
                blanditiis non architecto quidem praesentium amet voluptas ab
                cupiditate, suscipit neque ut pariatur?
              </p>
              <div className="flex flex-row item-center mb-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="p-2 pl-3 mt-5 w-3/4 rounded-lg block text-black shadow-md"
                />
                <button className="w-11 h-11  bg-blue mt-5 shadow-md hover:bg-gradientPurple duration-150 transition ease-in font-medium rounded-lg block relative -left-7">
                  <FaRegEnvelope
                    className="transform -rotate-12  relative top-0 left-0 right-0 bottom-0 m-auto"
                    size="25"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
