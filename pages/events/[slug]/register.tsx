import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import LoadingOverlay from '../../../Components/LoadingOverlay'
import FailedSnackbar from '../../../Components/Common/Snackbars/FailedSnackbar'
import SuccessSnackbar from '../../../Components/Common/Snackbars/SuccessSnackbar'
import { EventEndpoints } from '../../api/event'
const SingleEvent = (): JSX.Element => {
  useEffect(() => {
    Aos.init({ offset: 0, duration: 1000 })
  }, [])

  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const [openFailedSnackbar, setOpenFailedSnackbar] = useState(false)
  const [showLoading, setShowLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const router = useRouter()
  let eventID = ''
  if (process.browser) {
    eventID = window.location.href.split('/').reverse()[1]
    console.log(eventID)
  }

  const formSubmit = (e: any) => {
    e.preventDefault()
    setShowLoading(true)
    const userData={
      name:e.target.name.value,
      email:e.target.email.value,
      organization:e.target.org.value,
    }

    EventEndpoints.registerEvent(eventID,userData)
    .then(() => {
      setOpenSuccessSnackbar(true)
      setShowLoading(false)
      const form = document.getElementById('registerForm')
      if(form) (form as HTMLFormElement).reset()
      setTimeout(function () {
        setOpenSuccessSnackbar(false)
      }, 2000)
    })
    .catch((e) => {
      const error=JSON.parse(e)
      setErrorMessage(error.data.error)
      setOpenFailedSnackbar(true)
      setShowLoading(false)
      setTimeout(function () {
        setOpenFailedSnackbar(false)
      }, 1500)
    })
  }

  return (
    <Layout title="Register | RSVP SLIIT">
      <LoadingOverlay show={showLoading}/>
      <Navbar />
      <section
        style={{ backgroundImage: 'url(/patterns/clubs.svg)' }}
        className="bg-no-repeat bg-right-top bg-cover  "
      >
        <div
          className="w-full flex justify-center items-center"
          style={{ height: '95vh' }}
        >
          <div className="absolute w-full sm:w-3/4 md:w-8/12 xl:w-1/2 2xl:w-5/12 z-0 mb-25vh lg:mb-0 mr-0 lg:mr-20vw p-5 ">
            <img
              src={`${router.query.headerImage}`}
              alt="Logo"
              className=" border-white shadow hover:shadow-lg filter hover:brightness-110 rounded-xl rounded-b-lg transition-all ease-out duration-500"
              data-aos="fade-right"
            ></img>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-xl w-10/12 sm:w-1/2 lg:w-5/12 2xl:w-4/12 transition-all ease-out duration-500 z-10 mt-20vh lg:mt-0 ml-0 lg:ml-20vw" data-aos="fade-left">
            <div className="px-4 py-8 sm:px-10">
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm leading-5 mb-10">
                  <span className="px-2 text-gray-500 bg-white text-3xl text-center">
                    {router.query.eventName == undefined
                      ? 'RSVP SLIIT'
                      : `${router.query.eventName}`}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full">
                  <form onSubmit={formSubmit} id="registerForm">
                    <div className="w-full my-6">
                      <div className=" relative px-3 sm:px-0">
                        <input
                          type="text"
                          id="name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full my-6">
                      <div className=" relative px-3 sm:px-0">
                        <input
                          type="email"
                          id="email"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full my-6">
                      <div className=" relative px-3 sm:px-0">
                        <input
                          type="text"
                          id="org"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="University/Organization"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block w-full rounded-md shadow-sm px-3 sm:px-0">
                        <button
                          type="submit"
                          className="py-2 px-4 bg-gradientBlue hover:bg-gradientPurple text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                        >
                          Register
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10 ">
              <p className="text-xs leading-5 text-gray-500 text-center">
                SLIIT FOSS
              </p>
            </div>
          </div>
        </div>
        <div
        className={
          openFailedSnackbar
            ? 'fixed top-24 md:top-3/4 left-0 w-full flex justify-center z-10 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 left-0 w-full flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <FailedSnackbar message={errorMessage}/>
      </div>
      <div
        className={
          openSuccessSnackbar
            ? 'fixed top-24 md:top-3/4 left-0 w-full flex justify-center z-10 opacity-100 transition ease-in duration-200'
            : 'fixed top-24 md:top-3/4 left-0 w-full flex justify-center z-10 opacity-0 transition ease-in duration-200 pointer-events-none'
        }
      >
        <SuccessSnackbar message="Registered for event successfully"/>
      </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default SingleEvent
