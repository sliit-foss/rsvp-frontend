import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import foss_dark from '../../public/logos/foss_dark.svg'
import { mobileNavVariants, navElementsVariants } from '../../animations'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import ParticleBG from '../Common/ParticleBG'

const Navbar = (): JSX.Element => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  let loginStatus = false
  if (process.browser) {
    loginStatus = window.localStorage.getItem('LoggedIn') === 'true'
  }

  const toggleNav = () => {
    setIsOpen((prev) => !prev)
  }

  const logOut = () => {
    window.localStorage.clear()
    router.push({
      pathname: '/',
    })
  }

  return (
    <header className="sticky top-0 flex flex-row w-full h-14 justify-between items-center shadow-noOffset z-30 bg-white">
      <div className="flex justify-between items-center">
        <div className="sm:h-20 h-14 sm:w-32 w-16 flex items-center">
          <Link href="/">
            <a>
              <Image
                src={foss_dark}
                alt="SLIIT FOSS logo"
                layout="intrinsic"
                quality={90}
                width={75}
              />
            </a>
          </Link>
        </div>

        <h3 className="absolute left-1/2 lg:left-1/4 2xl:left-1/2 transform -translate-x-1/2 text-sm sm:text-xl md:text-xl font-bold cursor-default ">
          SLIIT RSVP PORTAL
        </h3>
        <nav className="absolute right-5">
          <ul className="inline-flex items-center ">
            <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in mx-3">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in mx-3">
              <Link href="/events">
                <a>Events</a>
              </Link>
            </li>
            <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in mx-3">
              <Link href="/clubs">
                <a>Clubs</a>
              </Link>
            </li>
            <li
              className={`hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in mx-3 ${
                loginStatus ? 'mr-3' : 'mr-6'
              }`}
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            {loginStatus ? (
              <button
                onClick={() => {
                  if (process.browser) {
                    window.localStorage.setItem('MenuOptionCache', '')
                  }
                  router.push({
                    pathname: '/admin/',
                  })
                }}
              >
                <li className="hidden lg:block font-medium text-lg hover:text-gray-default transition ease-in mx-3 mr-6">
                  <a>Management</a>
                </li>
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={
                loginStatus
                  ? logOut
                  : () => {
                      router.push({
                        pathname: '/login',
                      })
                    }
              }
            >
              <a>
                <li className="hidden lg:block font-medium text-lg bg-gradientBlue hover:bg-gradientPurple text-white py-1.5 px-6 shadow hover:shadow-md transition ease-in rounded-lg cursor-pointer">
                  {loginStatus ? 'Sign Out' : 'Sign In'}
                </li>
              </a>
            </button>
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
            } bg-gray-200 flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover`}
            style={{ backgroundImage: 'url(/patterns/single-event.svg)' }}
          >
            <ParticleBG backgroundMode={true} />

            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleNav}
            >
              {isOpen ? (
                <RiCloseFill className="h-6 w-6 hover:text-blue text-gray-700 transition ease-in" />
              ) : (
                ''
              )}
            </div>

            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={navElementsVariants}
              className="h-32 w-48 flex items-center"
            >
              <Image
                src={foss_dark}
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
              className="flex flex-col items-center justify-center w-full"
            >
              <Link href="/">
                <a className="w-full flex justify-center items-center font-medium text-2xl text-gray-700 hover:text-white hover:bg-gradientBlue transform hover:scale-105 transition ease-in">
                  <li onClick={() => setIsOpen(false)}>
                    <div className="py-4">Home</div>
                  </li>
                </a>
              </Link>
              <Link href="/events">
                <a className="w-full flex justify-center items-center font-medium text-2xl text-gray-700 hover:text-white hover:bg-gradientBlue transform hover:scale-105 transition ease-in">
                  <li onClick={() => setIsOpen(false)}>
                    <div className="py-4">Events</div>
                  </li>
                </a>
              </Link>
              <Link href="/clubs">
                <a className="w-full flex justify-center items-center font-medium text-2xl text-gray-700 hover:text-white hover:bg-gradientBlue transform hover:scale-105 transition ease-in">
                  <li onClick={() => setIsOpen(false)}>
                    <div className="py-4">Clubs</div>
                  </li>
                </a>
              </Link>
              <Link href="/contact">
                <a className="w-full flex justify-center items-center font-medium text-2xl text-gray-700 hover:text-white hover:bg-gradientBlue transform hover:scale-105 transition ease-in">
                  <li onClick={() => setIsOpen(false)}>
                    <div className="py-4">Contacts</div>
                  </li>
                </a>
              </Link>
              {loginStatus ? (
                <Link href="/admin/">
                  <a className="w-full flex justify-center items-center font-medium text-2xl text-gray-700 hover:text-white hover:bg-gradientBlue transform hover:scale-105 transition ease-in">
                    <li
                      onClick={() => {
                        setIsOpen(false)
                        if (process.browser) {
                          window.localStorage.setItem('MenuOptionCache', '')
                        }
                      }}
                    >
                      <div className="py-4">Management</div>
                    </li>
                  </a>
                </Link>
              ) : (
                <div></div>
              )}

              <button
                onClick={
                  loginStatus
                    ? logOut
                    : () => {
                        router.push({
                          pathname: '/login',
                        })
                      }
                }
              >
                <li
                  className="font-medium text-2xl bg-gradientBlue hover:bg-gradientPurple py-1.5 px-8 text-white shadow hover:shadow-md transform hover:scale-105 transition duration-400 rounded-lg cursor-pointer my-4 mt-6"
                  onClick={() => setIsOpen(false)}
                >
                  {loginStatus ? 'Sign Out' : 'Sign In'}
                </li>
              </button>
            </motion.ul>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
