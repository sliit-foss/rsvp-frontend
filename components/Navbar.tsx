import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import Container from './Layout/Container'

import foss_dark from '../public/logos/foss_dark.svg'
import foss_light from '../public/logos/foss_light.svg'

// animations
import { mobileNavVariants, navElementsVariants } from '../animations'

// icons
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="relative">
      <Container>
        <div className="relative flex justify-between items-center">
          <div className="sm:h-20 h-14 sm:w-32 w-16 flex items-center">
            <Link href="/">
              <a>
                <Image
                  src={foss_dark}
                  alt="foss logo"
                  layout="intrinsic"
                  quality={90}
                />
              </a>
            </Link>
          </div>

          <h3 className="absolute left-1/2 transform -translate-x-1/2 text-sm sm:text-xl md:text-xl font-bold">
            SLIIT RSVP PORTAL
          </h3>
          <nav>
            <ul className="inline-flex space-x-6">
              <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in">
                <Link href="/event">
                  <a>Events</a>
                </Link>
              </li>
              <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in">
                <Link href="/clubs">
                  <a>Clubs</a>
                </Link>
              </li>
              <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li
                className="block lg:hidden z-20 cursor-pointer transition ease-in"
                onClick={toggleNav}
              >
                {!isOpen ? (
                  <HiMenuAlt2 className="h-6 w-6 hover:text-gray-default transition ease-in" />
                ) : (
                  ''
                )}
              </li>
            </ul>
          </nav>
        </div>
        <AnimatePresence exitBeforeEnter>
          {isOpen ? (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileNavVariants}
              className={`fixed top-0 left-0 bottom-0 z-10 min-h-screen ${
                isOpen ? `w-full` : `w-0`
              } bg-blue flex flex-col items-center justify-center`}
            >
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={toggleNav}
              >
                {isOpen ? (
                  <RiCloseFill className="h-6 w-6 hover:text-gray-light text-white transition ease-in" />
                ) : (
                  ''
                )}
              </div>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={navElementsVariants}
                className="h-32 w-48 flex items-center mb-5"
              >
                <Image
                  src={foss_light}
                  alt="foss logo"
                  layout="intrinsic"
                  quality={90}
                />
              </motion.div>
              <motion.ul
                initial="initial"
                animate="animate"
                exit="exit"
                variants={navElementsVariants}
                className="flex flex-col items-center justify-center space-y-6"
              >
                <li
                  className="font-medium text-2xl hover:text-gray-light text-white transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-white transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/event">
                    <a>Events</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-white transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/clubs">
                    <a>Clubs</a>
                  </Link>
                </li>
                <li
                  className="font-medium text-2xl hover:text-gray-light text-white transition ease-in"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </motion.ul>
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export default Navbar
